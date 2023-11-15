import { useTranslation } from "react-i18next";
import reactLogo from "/react.svg";
import { useForm } from "react-hook-form";
import hookFormLogo from "/hookform.svg";
import viteLogo from "/vite.svg";
import { useState } from "react";
import ClassicInput from "../component/forms/ClassicInput";
import { emailValidation } from "../utils/regexExpresion";
import { useNavigate } from "react-router-dom";
import DateInput from "../component/forms/DateInput";
import CustomSelect from "../component/forms/CustomSelect";
// import ReactSelectCustom from "../component/forms/ReactSelectCustom";

export default function FormView() {
  const { t } = useTranslation("main");
  const [data, setData] = useState<unknown>();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data: unknown) => {
    console.log(data);

    setData(data);
  };

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
          {
            //ReactSelectCustom es un componente que contiene un select de la libreria react-select tiene funciones
            //muy completas y tiene muchos manejos, Documentacion https://react-select.com/home
          }
          {/* <ReactSelectCustom
            errors={errors}
            id={"options"}
            label={"Dropdown"}
            //options recibe las opcciones que seran seleccionadas su formato es un arreglo de objetos:
            //[{value:"",label:""},{value:"",label:""},...]
            //value seria el valor a tomar para enviar al a base de datos y label solo es visual para saber
            //que elemento es que vamos a utilizar
            options={[
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" },
              { value: "3", label: "Option 3" },
            ]}
            control={control}
            //showLabel utiliza a watch de react-hook-form para permitir el comportamiento del label en el select,
            //lo que hace es verificar si hay datos en el input y si los hay solo devolvera false para ocultar el
            //label, en caso contrario lo mostrara
            showLabel={watch("options") ? false : true}
          /> */}
          <CustomSelect
            id={"select"}
            errors={errors}
            control={control}
            classNameExtra={"h-10 w-64 2s:w-80"}
            placeholder={"Select an option"}
            register={register}
            data={[
              { label: "Seleccion 1", value: { id: 1, name: "SubObjeto 1" } },
              { label: "Seleccion 2", value: { id: 2, name: "SubObjeto 2" } },
              { label: "Seleccion 3", value: { id: 3, name: "SubObjeto 3" } },
            ]}
          />
          <ClassicInput
            errors={errors}
            id={`name`}
            placeholder={t("name")}
            register={register}
            type={"text"}
          />
          <DateInput
            errors={errors}
            id={"birthdate"}
            placeholder={t("birthdate")}
            control={control}
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
