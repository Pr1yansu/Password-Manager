import LoginForm from "@/components/forms/login-form";
import Auth from "@/components/auth/auth";

export default function Login() {
  return (
    <Auth
      description="Enter your credentials to access your vault"
      title="Welcome back"
      type="login"
    >
      <LoginForm />
    </Auth>
  );
}
