import { Header } from "@components/Header";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
