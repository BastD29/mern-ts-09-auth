import { FC, Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LoaderLayout from "../LoaderLayout/LoaderLayout";
import Header from "../../Header/Header2";
import { useAuthContext } from "../../../hooks/useAuthContext";
import style from "./AuthLayout.module.scss";

const AuthLayout: FC = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  return (
    <div className={style["auth-layout"]}>
      <Suspense fallback={<LoaderLayout />}>
        <Header />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthLayout;
