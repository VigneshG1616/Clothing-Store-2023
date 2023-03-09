import SignUpForm from "../../components/SignUpForm/SignUpForm.component";
import SignInForm from "../../components/SignInForm/SignInForm.component";
import "./UserAuth.styles.scss";

const UserAuth = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default UserAuth;
