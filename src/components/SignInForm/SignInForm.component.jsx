import { useState } from "react";
import {
  runSignInWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../Button/Button.component";
import InputField from "../InputField/InputField.component";
import "./SignInForm.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const INPUT_FIELDS = [
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
];

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSignin = async (event) => {
    event.preventDefault();
    try {
      const { user } = await runSignInWithEmailAndPassword(email, password);
      console.log("User data is", user);
      resetFormFields();
    } catch (err) {
      console.log("handle submit error ", err);
    }
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignin}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
