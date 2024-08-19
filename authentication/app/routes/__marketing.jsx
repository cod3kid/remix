import { Outlet } from "@remix-run/react";

import MainHeader from "~/components/navigation/MainHeader";
import { getUserFromSession } from "~/data/auth.server";
import marketingStyles from "~/styles/marketing.css";

export default function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />;
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: marketingStyles }];
}

export const loader = ({ request }) => {
  return getUserFromSession(request);
};
