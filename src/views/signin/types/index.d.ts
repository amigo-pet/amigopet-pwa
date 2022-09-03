export type DispatchSignin = {
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