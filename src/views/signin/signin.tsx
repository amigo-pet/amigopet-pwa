import { Dispatch, useEffect, useRef } from "react";
import { oauthAPI } from "../../api/oauth";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { DispatchSignin } from "./types";
import { Input } from "@/components/ui/input";

type OutletContext = {
  state: {
    phoneNumber: string;
  };
  dispatch: Dispatch<DispatchSignin>;
};

export const SignIn = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    state: { phoneNumber },
    dispatch,
  } = useOutletContext<OutletContext>();
  const navigate = useNavigate();

  const sendPhoneNumber = async (phoneNumber: string) => {
    const response = await oauthAPI.post("/send-code", {
      connection: "sms",
      phone_number: `+55${phoneNumber.toString().replace(/[^\d]/g, "")}`,
    });
    return response;
  };

  const { mutate } = useMutation(sendPhoneNumber, {
    onSuccess() {
      navigate("/confirmation");
    },
    onError: err => {
      console.error(err);
    },
  });

  useEffect(() => {
    dispatch({
      type: "setFormSignin",
      payload: {
        labelName: "Entre com seu celular",
        buttonName: "Enviar código SMS",
        typeSubmit: "handleSubmitSignin",
      },
    });
  }, []);

  useEffect(() => {
    if (phoneNumber) {
      mutate(phoneNumber);
    }
  }, [phoneNumber]);

  useEffect(() => {
    dispatch({
      type: "setLoading",
      payload: isLoading,
    });
  }, [isLoading]);

  const formatPhoneNumber = (value: string) => {
    if (!value) {
      return value;
    }

    const numbersOnly = value.replace(/[^\d]/g, "");
    const valueSize = numbersOnly.length;

    if (valueSize <= 10) {
      return numbersOnly;
    }

    const ddd = numbersOnly.slice(0, 2);
    const phoneNumber = numbersOnly.slice(2);

    if (inputRef.current?.value) {
      inputRef.current.value = `(${ddd}) ${phoneNumber}`;
    }
  };

  return (
    <Input
      id="phone_number"
      name="phone_number"
      inputMode="tel"
      type="text"
      onBlur={e => formatPhoneNumber(e.target.value)}
      maxLength={13}
      ref={inputRef}
    />
  );
};
