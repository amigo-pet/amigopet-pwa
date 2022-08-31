import { InputOtp } from "@components/common/input/otp/input-otp";
import { ClipboardEvent, Dispatch, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { oauthApi } from "../../../api/oauth";
import { Box } from "./signin-confirmation.style";

type OutletContext = {
  state: {
    phoneNumber: string;
    otp: string;
  };
  dispatch: Dispatch<DispatchSignin>;
};

type DispatchSignin = {
  type: string;
  payload?:
    | {
        labelName?: string;
        buttonName?: string;
        typeSubmit?: string;
      }
    | string
    | boolean;
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
      handleSubmit(phoneNumber, otpSMS);
    }
  }, [otpSMS]);

  const handleSubmit = async (phone_number: string, otp: string) => {
    const response = await oauthApi.post("/validade-code", {
      phone_number: `+55${phone_number.toString().replace(/[^\d]/g, "")}`,
      connection: "sms",
      code: otp,
    });
    if (response.status === 200) {
      navigate("/");
    }
  };

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
            variant="transparant"
            maxLength={1}
            key={index}
            id={`otp-${index}`}
            name={`otp-${index}`}
            value={value}
            onChange={e => handleOtp(e.target, index)}
            onPaste={onPaste}
            type="text"
          />
        );
      })}
    </Box>
  );
};
