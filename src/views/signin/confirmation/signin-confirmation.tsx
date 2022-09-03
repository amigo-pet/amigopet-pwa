import { InputOtp } from "@components/common/input/otp/input-otp";
import { useMutation } from "@tanstack/react-query";
import { Logger } from "aws-amplify";
import { ClipboardEvent, Dispatch, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { oauthApi } from "../../../api/oauth";
import { DispatchSignin } from "../types";
import { Box } from "./signin-confirmation.style";

const logger = new Logger("[SIGIN][CONFIRMATION]");

type State = {
  phoneNumber: string;
  otp: string;
};

type OutletContext = {
  state: State;
  dispatch: Dispatch<DispatchSignin>;
};

export const SigninConfirmation = () => {
  const {
    state: { phoneNumber, otp: otpSMS },
    dispatch,
  } = useOutletContext<OutletContext>();

  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(6).fill(""));

  useEffect(() => {
    dispatch({
      type: "setFormSignin",
      payload: {
        labelName: "Insira o código enviado por SMS",
        buttonName: "Entrar",
        typeSubmit: "handleSubmitConfirmation",
      },
    });
  }, []);

  useEffect(() => {
    if (otpSMS) {
      mutate({ phoneNumber, otp: otpSMS });
    }
  }, [otpSMS]);

  useEffect(() => {
    const controller = new AbortController();

    if ("OTPCredential" in window) {
      navigator.credentials
        .get({
          otp: {
            transport: ["sms"],
          },
          signal: controller.signal,
        })
        .then(otp => {
          setOtp(otp?.code?.split("") as Array<string>);
          logger.log("otp", otp);
          controller.abort();
        })
        .catch(() => {
          controller.abort();
        })
        .finally(() => {
          dispatch({
            type: "setLoading",
            payload: false,
          });
        });
    }
  }, []);

  const sendOtpCode = async ({ phoneNumber, otp }: State) => {
    const response = await oauthApi.post("/validade-code", {
      phone_number: `+55${phoneNumber.toString().replace(/[^\d]/g, "")}`,
      connection: "sms",
      code: otp,
    });
    return response;
  };

  const { mutate } = useMutation(sendOtpCode, {
    onSuccess() {
      navigate("/");
    },
    onError: err => {
      logger.log("err", err);
    },
  });

  const handleOtp = async (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([
      ...otp.map((state, idx) => (idx === index ? element.value : state)),
    ]);

    if (element.value && element.nextSibling) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const onPaste = (event: ClipboardEvent) => {
    const pasted = event.clipboardData.getData("text/plain");
    setOtp(pasted.split(""));
  };

  return (
    <Box>
      {otp.slice(0, 6).map((value, index) => {
        return (
          <InputOtp
            key={index}
            id={`otp-${index}`}
            name={`otp-${index}`}
            value={value}
            variant="transparant"
            maxLength={1}
            onChange={e => handleOtp(e.target, index)}
            onPaste={onPaste}
            inputMode="numeric"
            autoComplete="one-time-code"
            type="text"
          />
        );
      })}
    </Box>
  );
};
