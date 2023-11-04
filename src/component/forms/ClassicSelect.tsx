import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface IClassicSelectData {
  value: string | any;
  label: string;
}

interface IClassicSelect {
  id: string;
  data?: IClassicSelectData[];
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  placeholder: string;
  classNameExtra?: string;
  requiredMessage?: string;
}

export default function ClassicSelect({
  id,
  data = [],
  errors,
  register,
  required = false,
  placeholder = "",
  classNameExtra = "",
  requiredMessage = "",
}: IClassicSelect): JSX.Element {
  const registerOptions: RegisterOptions = {
    required: {
      value: required,
      message: requiredMessage,
    },
  };

  return (
    <div className="input-container">
      <select
        id={id}
        disabled={data.length > 0 ? false : true}
        {...register(id, registerOptions)}
        placeholder={placeholder}
        className={`${classNameExtra} input-select peer`}>
        <option disabled value="">
          {placeholder}
        </option>
        <option className="hidden" value=""></option>
        {data.length > 0 &&
          data.map((item) => {
            return (
              <>
                <option value={item.value}>{item.label}</option>
              </>
            );
          })}
      </select>
      <label
        htmlFor={id}
        className="absolute top-0 left-0 ml-3 -mt-2 px-1 text-xs bg-white text-gray-500">
        {placeholder}
      </label>
      {errors[id] && (
        <p className="text-sm text-red-600 mt-2">
          {errors[id] && <>{errors[id]?.message}</>}
        </p>
      )}
    </div>
  );
}
