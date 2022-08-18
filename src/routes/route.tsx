import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import * as View from "@views/index";
import { SigninLayout } from "../layout/signin/signin.layout";
import { Button } from "@components/common";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route index element={<View.PetProfile />} />
        <Route path="button" element={<Button isLoading>Teste</Button>} />
        <Route element={<SigninLayout />}>
          <Route path="login" element={<View.SignIn />} />
          <Route path="confirmation" element={<View.SigninConfirmation />} />
        </Route>
      </Switch>
    </Router>
  );
};
