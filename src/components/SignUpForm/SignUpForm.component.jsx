import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button.component";
import InputField from "../InputField/InputField.component";
import {SignUpContainer} from "./SignUpForm.styles";
import { setCurrentUser } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const INPUT_FIELDS = [
  {
    label: "Display Name",
    name: "displayName",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
  },
];

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      if (password === confirmPassword) {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(user, { displayName });
        setCurrentUser({ user });
        resetFormFields();
      } else {
        console.error("password Confirmpassword must be same");
      }
      setErrorMessage("");
    } catch (err) {
      console.log("handle submit error ", err);
      if (err.message === "auth/email-already-in-use") {
        setErrorMessage("Email already exists, Please Sign In");
      }
    }
  };

  return (
    <SignUpContainer>
      <h2>I Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSignUp}>
        {INPUT_FIELDS.map(({ label, name, type }, i) => {
          return (
            <InputField
              key={i}
              label={label}
              name={name}
              type={type}
              handleChange={handleChange}
              value={formFields[name]}
            />
          );
        })}
        <Button>Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
