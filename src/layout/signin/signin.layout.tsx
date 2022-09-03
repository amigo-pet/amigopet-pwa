import { useReducer } from "react";
import { Container, Form } from "./signin.layout.style";
import { FullLogo, LoginBanner } from "@assets/img";
import { Outlet } from "react-router-dom";
import { Button, Text } from "@components/common";
import immer from "immer";

type Action = {
  payload: object;
  type: string;
};

type State = {
  loading: boolean;
  phoneNumber: string;
  labelName: string;
  typeSubmit: string;
  buttonName: string;
  otp: string;
};

const reducers = {
  setFormSignin: (state: State, action: Action) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  setLoading: (state: State, action: Action) => {
    state.loading = Boolean(action.payload);
  },
  handleSubmitSignin: (state: State, action: Action) => {
    const formData = new FormData(action.payload as HTMLFormElement);
    const { phone_number } = Object.fromEntries(formData.entries());
    state.phoneNumber = phone_number as string;
  },
  handleSubmitConfirmation: (state: State, action: Action) => {
    const formData = new FormData(action.payload as HTMLFormElement);
    const data = Array.from(formData.values());
    state.otp = data.join("");
  },
};

function reducer(state: State, action: Action) {
  const fn = reducers[action.type as keyof typeof reducers];

  if (fn) {
    return immer(state, draftState => fn(draftState, action));
  }
  return state;
}

export const SigninLayout = () => {
  const [state, dispatch] = useReducer(reducer, {} as State);

  return (
    <Container>
      <FullLogo />
      <Text size="md" color="white">
        {state.labelName}
      </Text>
      <Form
        onSubmit={e => {
          e.preventDefault();
          e.persist();
          dispatch({ type: state.typeSubmit, payload: e.target });
        }}
      >
        <Outlet
          context={{
            dispatch,
            state,
          }}
        />
        <LoginBanner />
        <Button isLoading={state.loading}>{state.buttonName}</Button>
      </Form>
    </Container>
  );
};
