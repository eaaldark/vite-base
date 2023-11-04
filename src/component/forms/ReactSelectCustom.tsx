import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";
import Select, { components } from "react-select";
import { StylesConfig } from "react-select";

interface IOption {
  label: string;
  value: string | number;
}

interface IReactSelectCustom {
  id: string;
  errors: FieldErrors;
  required?: boolean;
  messageR?: string;
  disabled?: boolean;
  control: Control;
  classCustomSelect?: string;
  label?: string;
  indexValue?: number;
  styleConfig?: StylesConfig;
  options?: IOption[];
  classCustom?: string;
  labelclass?: string;
  showLabel?: boolean;
}

export const ReactSelectAdvancedStyle = (): StylesConfig => {
  //Documentacion acerca de los estilos del select https://react-select.com/styles
  return {
    placeholder: (base) => {
      return {
        ...base,
        color: "#56409a",
      };
    },
    container: (base) => {
      return {
        ...base,
        "&:hover": { borderColor: "#56409a" },
      };
    },
    option: (base) => {
      return {
        ...base,
        "&:hover": { background: "#56409a" },
      };
    },
    control: (base) => {
      console.log(base);
      return {
        ...base,
        borderWidth: 3,
        borderRadius: 15,
        "&:hover": { borderColor: "#56409a" },
        borderColor: "hsl(0, 0%, 91%)",
      };
    },
  };
};

const CustomOption = ({ label, ...props }: any) => {
  //Acerca de los componentes personalizados https://react-select.com/components
  return (
    <div className="w-full h-full hover:text-white">
      <components.Option {...props}>{label}</components.Option>
    </div>
  );
};

export default function ReactSelectCustom({
  id,
  errors,
  required = false,
  messageR = "",
  classCustom,
  disabled,
  styleConfig = ReactSelectAdvancedStyle(),
  label,
  control,
  indexValue,
  classCustomSelect,
  options = [],
  labelclass,
  showLabel = false,
}: IReactSelectCustom): JSX.Element {
  return (
    <div className={`${classCustom} input-container`}>
      <Controller
        control={control}
        name={id}
        rules={{
          required: {
            value: required,
            message: messageR,
          },
        }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Select
            placeholder={label}
            id={id}
            name={id}
            onBlur={onBlur}
            value={value}
            onChange={onChange}
            isDisabled={disabled}
            defaultValue={indexValue ? options[indexValue] : null}
            styles={styleConfig}
            className={`${classCustomSelect}`}
            ref={ref}
            options={options}
            components={{
              Option: CustomOption,
            }}
            isClearable
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary: "#56409a",
              },
            })}
          />
        )}
      />
      {!showLabel && (
        <label
          htmlFor={id}
          className={`label-text ${
            labelclass
              ? labelclass
              : "text-gray-600 peer-placeholder-shown:text-gray-400 "
          }`}>
          {label}
        </label>
      )}
      {errors[id] && (
        <p className="text-sm text-red-600 mt-2">
          {errors[id] && <>{errors[id]?.message}</>}
        </p>
      )}
    </div>
  );
}
