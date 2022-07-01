import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { PetProfile } from "../views/profile/pet/pet";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<PetProfile />} />
      </Switch>
    </Router>
  );
};
