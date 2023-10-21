import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

interface IClassicInput {
  id: string;
  errors: FieldErrors<FieldValues>;
  required?: boolean;
  placeholder: string;
  classNameExtra?: string;
  requiredMessage?: string;
  control: Control<FieldValues, any>;
}

export default function ClassicInput({
  id,
  errors,
  required = false,
  placeholder = "",
  classNameExtra = "",
  requiredMessage = "",
  control,
}: IClassicInput): JSX.Element {
  const registerOptions: RegisterOptions = {
    required: {
      value: required,
      message: requiredMessage,
    },
  };

  return (
    <>
      <div className="input-container">
        <Controller
          control={control}
          name={id}
          rules={registerOptions}
          render={({ field }) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const [open, setOpen] = useState<boolean>(false);
            return (
              <>
                <input
                  id={id}
                  type={"text"}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  placeholder={placeholder}
                  value={field.value}
                  className={`${classNameExtra} input-text peer`}
                  onChange={(e) => {
                    if (e.target.value) field.value = e.target.value;
                    field.onChange(e);
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                  }}
                />
                <ReactDatePicker
                  id={"date"}
                  name={"date"}
                  className="hidden"
                  open={open}
                  onClickOutside={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                  }}
                  onChange={(date) => {
                    if (date)
                      field.onChange(date.toISOString().substring(0, 10));
                  }}
                />
              </>
            );
          }}
        />
        <label className="label-text" htmlFor={"fecha"}>
          Fecha
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
