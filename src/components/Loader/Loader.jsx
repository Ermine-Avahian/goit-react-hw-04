import { TailSpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => (
  <div className={css.loader}>
    <TailSpin ariaLabel="loading" />
  </div>
);

export default Loader;
