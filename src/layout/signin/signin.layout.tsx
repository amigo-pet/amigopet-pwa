import { useReducer } from "react";
import { FullLogo, LoginBanner } from "@/assets/img";
import { Outlet } from "react-router-dom";
import { Text } from "@/components/common";
import { produce } from "immer";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

type Action = {
  payload: object;
  type: keyof typeof reducers;
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

type Reducers = keyof typeof reducers;

function reducer(state: State, action: Action): State {
  const fn = reducers[action.type as Reducers];

  if (fn) {
    const newState = produce(draftState => fn(draftState, action));
    return newState(state);
  }
  return state;
}

export const SigninLayout = () => {
  const [state, dispatch] = useReducer(reducer, {} as State);

  return (
    <div>
      <FullLogo />
      <Text size="md" color="white">
        {state.labelName}
      </Text>
      <Form
        onSubmit={e => {
          e.preventDefault();
          e.persist();
          dispatch({ type: state.typeSubmit as Reducers, payload: e.target });
        }}
      >
        <Outlet
          context={{
            dispatch,
            state,
          }}
        />
        <LoginBanner />
        <Button>{state.buttonName}</Button>
      </Form>
    </div>
  );
};
