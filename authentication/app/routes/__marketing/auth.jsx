import { redirect } from "@remix-run/node";
import AuthForm from "~/components/auth/AuthForm";
import { login, signUp } from "~/data/auth.server";
import { validateCredentials } from "~/data/validation.server";
import authStyles from "~/styles/auth.css";

export default function AuthPage() {
  return <AuthForm />;
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  // validate user input

  try {
    validateCredentials(credentials);
  } catch (err) {
    return err;
  }

  try {
    if (authMode === "login") {
      // login logic
      return await login(credentials);
    } else {
      // signup logic (create user)
      return await signUp(credentials);
    }
  } catch (err) {
    if (err.status === 422) {
      return { credentials: err.message };
    }
  }
}

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
