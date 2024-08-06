import AuthForm from "~/components/auth/AuthForm";
import authStyles from "~/styles/auth.css";

export default function AuthPage() {
  return <AuthForm />;
}

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}

export const action = async ({ request }) => {
  const searchParams = URL(request.url);
  const authMode = searchParams.authMode || "login";

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  if (authMode === "login") {
    // Login logic
  } else {
    // Sign up logic
  }
};
