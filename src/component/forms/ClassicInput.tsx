import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

interface IClassicInput {
  id: string;
  type: string;
  errors: FieldErrors<FieldValues>;
  pattern?: RegExp;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  placeholder: string;
  classNameExtra?: string;
  patternMessage?: string;
  requiredMessage?: string;
}

export default function ClassicInput({
  id,
  type,
  errors,
  pattern = /.*/,
  register,
  required = false,
  placeholder = "",
  classNameExtra = "",
  patternMessage = "",
  requiredMessage = "",
}: IClassicInput): JSX.Element {
  const registerOptions: RegisterOptions = {
    required: {
      value: required,
      message: requiredMessage,
    },
    pattern: {
      value: pattern,
      message: patternMessage,
    },
  };

  return (
    <>
      <div className="input-container">
        <input
          id={id}
          type={type}
          {...register(id, registerOptions)}
          placeholder={placeholder}
          className={`${classNameExtra} input-text peer`}
        />
        <label htmlFor={id} className="label-text">
          {placeholder}
        </label>
        {errors[id] && (
          <p className="text-sm text-red-600 mt-2">
            {errors[id] && <>{errors[id]?.message}</>}
          </p>
        )}
      </div>
    </>
  );
}
