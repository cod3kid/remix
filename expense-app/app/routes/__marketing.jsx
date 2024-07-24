import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import marketingStyles from "~/styles/marketing.css";

function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export const links = () => {
  return [{ rel: "stylesheet", href: marketingStyles }];
};
export default MarketingLayout;
