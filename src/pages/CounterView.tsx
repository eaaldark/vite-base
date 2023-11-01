import { useTranslation } from "react-i18next";
import reduxLogo from "/redux.svg";
import viteLogo from "/vite.svg";
import reactLogo from "/react.svg";
import { Counter } from "../features/counter/Counter";
import { useNavigate } from "react-router-dom";

export default function CounterView() {
  const { t } = useTranslation("main");
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row">
        <div>
          <img
            onClick={(e) => {
              e.preventDefault();
              navigate("/tabs", { replace: true, relative: "route" });
            }}
            src={viteLogo}
            className="logo"
            alt="Vite logo"
          />
        </div>
        <div>
          <img
            onClick={(e) => {
              e.preventDefault();
              navigate("/form", { replace: true, relative: "route" });
            }}
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </div>
        <div>
          <img src={reduxLogo} className="logo react" alt="React logo" />
        </div>
      </div>
      <Counter />
      <div className="flex flex-col gap-5 my-5 text-center text-3xl">
        <h1>{t("title")}</h1>
        <p>{t("subtitle")}</p>
      </div>
    </>
  );
}
