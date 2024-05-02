import { useState } from "react";
import {
  runSignInWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button, {BUTTON_TYPE_CLASSES} from "../Button/Button.component";
import InputField from "../InputField/InputField.component";

import {SignUPConatiner, ButtonsContainer} from  "./SignInForm.styles.jsx";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
      await runSignInWithEmailAndPassword(email, password);

      resetFormFields();
      navigate("/shop")
    } catch (err) {
      console.log("handle submit error ", err);
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignUPConatiner>
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
        <ButtonsContainer >
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUPConatiner>
  );
};

export default SignInForm;
