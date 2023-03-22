import SignUpForm from "../../components/SignUpForm/SignUpForm.component";
import SignInForm from "../../components/SignInForm/SignInForm.component";
import {AuthenticationContainer} from "./UserAuth.styles";

const UserAuth = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default UserAuth;
