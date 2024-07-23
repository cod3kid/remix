import { Outlet } from "@remix-run/react";
import marketingStyles from "~/styles/marketing.css";

function MarketingLayout() {
  return <Outlet />;
}

export const links = () => {
  return [{ rel: "stylesheet", href: marketingStyles }];
};
export default MarketingLayout;
