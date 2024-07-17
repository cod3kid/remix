import authStyles from "~/styles/auth.css";

export default function AuthPage() {
  return <h1>Auth Page</h1>;
}

export const links = () => {
  return [{ rel: "stylesheet", href: authStyles }];
};
