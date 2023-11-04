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

export default function DateInput({
  id,
  errors,
  required = false,
  placeholder = "",
  classNameExtra = "",
  requiredMessage = "",
  control,
}: IClassicInput): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
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
                    field.onChange(e.target.value === "" ? "" : e.target.value);
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
                  //Esta accion deberia funcionar perfectamente para quitar el aviso que sale en consola:
                  // A component is changing an uncontrolled input to be controlled.
                  //This is likely caused by the value changing from undefined to a defined value, which should not happen.
                  //Pero debido a que la validacion del field.value al limpiarse el input deja de ser fecha, falla el web dejando de funcionar
                  //se deja comentado si en futuro se encuentra solucion
                  //selected={field.value ? new Date(field.value) : null}
                  onChange={(date) => {
                    field.onChange(
                      date ? date.toISOString().substring(0, 10) : null
                    );
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
