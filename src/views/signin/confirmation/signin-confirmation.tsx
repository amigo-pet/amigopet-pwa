import { InputOtp } from "@components/common/input/otp/input-otp";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { oauthApi } from "../../../api/oauth";
import { Box } from "./signin-confirmation.style";

export const SigninConfirmation = () => {
  const context = useOutletContext();
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(6).fill(""));

  useEffect(() => {
    context.dispatch({
      type: "setFormSignin",
      payload: {
        labelName: "Insira o código enviado por SMS",
        buttonName: "Entrar",
        typeSubmit: "handleSubmitConfirmation",
      },
    });
  }, []);

  useEffect(() => {
    if (context?.state?.otp) {
      handleSubmit(context?.state?.phoneNumber, context?.state?.otp);
    }
  }, [context?.state?.otp]);

  const handleSubmit = async (phone_number: string, otp: string) => {
    console.log("phone_number",phone_number);
    console.log("otp",otp);

    const response = await oauthApi.post("/validade-code", {
      phone_number: `+55${phone_number.toString().replace(/[^\d]/g, "")}`,
      connection: "sms",
      code: otp,
    });
    if (response.status === 200) {
      navigate("/");
    }
  };

  const handleOtp = async (element: any, index: number) => {
    if (isNaN(element.value)) return false;

    setOtp([
      ...otp.map((state, idx) => (idx === index ? element.value : state)),
    ]);

    if (element.value && element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const onPaste = event => {
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
