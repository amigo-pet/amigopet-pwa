import { Dispatch, useEffect, useRef } from "react";
import { oauthApi } from "../../api/oauth";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Icon, Input } from "@components/common";
import { useMutation } from "@tanstack/react-query";
import logger from "loglevel";

type OutletContext = {
  state: {
    phoneNumber: string;
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

export const SignIn = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    state: { phoneNumber },
    dispatch,
  } = useOutletContext<OutletContext>();
  const navigate = useNavigate();

  const sendPhoneNumber = async (phoneNumber: string) => {
    const response = await oauthApi.post("/send-code", {
      connection: "sms",
      phone_number: `+55${phoneNumber.toString().replace(/[^\d]/g, "")}`,
    });
    return response;
  };

  const { mutate, isLoading } = useMutation(sendPhoneNumber, {
    onSuccess() {
      navigate("/confirmation");
    },
    onError: err => {
      logger.error(err);
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
      type="text"
      variant="transparant"
      onBlur={e => formatPhoneNumber(e.target.value)}
      maxLength={13}
      ref={inputRef}
      icon={
        <Icon name="ph-device-mobile-camera" rotate="-180" color="#0025AA" />
      }
    />
  );
};
