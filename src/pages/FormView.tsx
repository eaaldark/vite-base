import { useTranslation } from "react-i18next";
import reactLogo from "/react.svg";
import { useForm } from "react-hook-form";
import hookFormLogo from "/hookform.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";
import ClassicInput from "../component/forms/ClassicInput";
import { emailValidation } from "../utils/regexExpresion";
import { useNavigate } from "react-router-dom";

export default function FormView() {
  const { t } = useTranslation("main");
  const [data, setData] = useState<unknown>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: unknown) => {
    setData(data);
  };

  return (
    <>
      <div className="flex flex-row">
        <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
        <div>
          <img
            onClick={(e) => {
              e.preventDefault();
              navigate("/", { replace: true, relative: "route" });
            }}
            src={reactLogo}
            className="logo react"
            alt="React logo"
          />
        </div>
        <div>
          <img src={hookFormLogo} className="logo react" alt="React logo" />
        </div>
      </div>
      <div className="flex flex-row gap-5 my-5 text-center text-3xl ">
        <form
          className="w-96 flex flex-col gap-8 text-black"
          onSubmit={handleSubmit(onSubmit)}
          onReset={reset}>
          <ClassicInput
            errors={errors}
            id={`name`}
            placeholder={t("name")}
            register={register}
            type={"text"}
          />
          <ClassicInput
            errors={errors}
            id={`email`}
            placeholder={t("email")}
            register={register}
            type={"email"}
            pattern={emailValidation}
            patternMessage={t("emailPatternMessage")}
            required={true}
            requiredMessage={t("emailRequiredMessage")}
          />
          <ClassicInput
            errors={errors}
            id={`password`}
            placeholder={t("password")}
            register={register}
            type={"password"}
            required={true}
            requiredMessage={t("passwordRequiredMessage")}
          />

          <button type="submit" className="border-2">
            {t("send")}
          </button>
        </form>
        {data !== undefined && (
          <p className="w-96 break-all">{JSON.stringify(data)}</p>
        )}
      </div>
    </>
  );
}
