import { useReducer } from "react";
import { Container, Form } from "./signin.layout.style";
import { FullLogo, LoginBanner } from "@assets/img";
import { Text } from "@components/common/text/text";
import { Outlet } from "react-router-dom";
import { Button } from "@components/common";
import immer from "immer";

const reducers = {
  setFormSignin: (state: unknown, action: { payload: unknown }) => {
    return {
      ...state,
      ...action.payload,
    };
  },
  setLoading: (state, action) => {
    state.loading = action.payload;
  },
  handleSubmitSignin: (state, action) => {
    const formData = new FormData(action.payload);
    const { phone_number } = Object.fromEntries(formData.entries());
    state.phoneNumber = phone_number;
  },
  handleSubmitConfirmation: (state, action) => {
    const formData = new FormData(action.payload);
    const data = Array.from(formData.values());
    state.otp = data.join("");
  },
};

function reducer(state, action) {
  const fn = reducers[action.type];
  if (fn) {
    return immer(state, draftState => fn(draftState, action));
  }
  return state;
}

export const SigninLayout = () => {
  const [state, dispatch] = useReducer(reducer, {});

  console.log("state", state);

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
        <Button isLoading={true}>{state.buttonName}</Button>
      </Form>
    </Container>
  );
};
