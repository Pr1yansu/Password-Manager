import Auth from "@/components/auth/auth";
import RegisterForm from "@/components/forms/register-form";

export default function Register() {
  return (
    <Auth
      description="Sign up to start managing your passwords securely"
      title="Create an account"
      type="register"
    >
      <RegisterForm />
    </Auth>
  );
}
