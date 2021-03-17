import logo from "./logo.svg";
import swal from "sweetalert";
import "./App.css";
import Contacts from "./components/Contacts";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCheckSquare,
  faUser,
  faMobile,
  faEnvelope,
  faAddressCard,
  faPencilAlt,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCoffee,
  faCheckSquare,
  faUser,
  faMobile,
  faEnvelope,
  faAddressCard,
  faPencilAlt,
  faTrash
);

function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Contacts></Contacts>
      </div>
    </div>
  );
}

export default App;
