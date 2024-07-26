import { FC } from "react";
import style from "./Loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={style["loader"]}>
      <h2>Loader</h2>
    </div>
  );
};

export default Loader;
