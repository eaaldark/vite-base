import React, { useState, useEffect } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
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
  control: Control<FieldValues, any>;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  placeholder: string;
  classNameExtra?: string;
  requiredMessage?: string;
}

export default function CustomSelect({
  id,
  data = [],
  errors,
  control,
  register,
  required,
  placeholder,
  classNameExtra,
  requiredMessage,
}: IClassicSelect): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<any>(); // Inicializa como undefined
  console.log("selectedOption", selectedOption);

  const handleSelect = (option: IClassicSelectData) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target && !target.closest(".input-container")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Agregar un manejador de clics fuera del componente para cerrar el select
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      // Eliminar el manejador de clics fuera del componente al desmontar
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="input-container relative">
      <Controller
        control={control}
        name={id}
        render={({
          field: {
            onChange,
            onBlur,
            value = selectedOption ? selectedOption?.label : "",
            ref,
          },
        }) => {
          return (
            <>
              <input
                id={id}
                name={id}
                type="text"
                onBlur={onBlur}
                ref={ref}
                placeholder={placeholder}
                value={value.label}
                onChange={(e) => {
                  onChange(e.target.value);
                  // onChange(selectedOption);
                }}
                // readOnly
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className={`${classNameExtra} peer input-text`}
              />
              {isOpen && (
                <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-md">
                  {data.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        handleSelect(option);
                        onChange(option);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100">
                      {option.label}
                    </li>
                  ))}
                </ul>
              )}
            </>
          );
        }}
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
  );
}

// import React, { useState, useEffect } from "react";

// import {
//   Control,
//   Controller,
//   FieldErrors,
//   FieldValues,
//   RegisterOptions,
//   UseFormRegister,
// } from "react-hook-form";

// interface IClassicSelectData {
//   value: string | any;
//   label: string;
// }

// interface IClassicSelect {
//   id: string;
//   data?: IClassicSelectData[];
//   errors: FieldErrors<FieldValues>;
//   control: Control<FieldValues, any>;
//   register: UseFormRegister<FieldValues>;
//   required?: boolean;
//   placeholder: string;
//   classNameExtra?: string;
//   requiredMessage?: string;
// }

// export default function CustomSelect({
//   id,
//   data = [],
//   errors,
//   control,
//   register,
//   required,
//   placeholder,
//   classNameExtra,
//   requiredMessage,
// }: IClassicSelect): JSX.Element {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [selectedOption, setSelectedOption] = useState<{
//     value: string | any;
//     label: string;
//   }>();

//   useEffect(() => {
//     if (selectedOption === null && data.length > 0) {
//       setSelectedOption(data[0]);
//     }
//   }, [selectedOption, data]);

//   return (
//     <div className="relative">
//       <Controller
//         control={control}
//         name={id}
//         render={({
//           field: {
//             onChange,
//             onBlur,
//             value = selectedOption ? selectedOption?.label : "",
//             ref,
//           },
//         }) => {
//           return (
//             <>
//               <input
//                 type="text"
//                 onBlur={onBlur}
//                 ref={ref}
//                 value={value}
//                 onChange={onChange}
//                 readOnly
//                 onClick={(
//                   e: React.MouseEvent<HTMLInputElement, MouseEvent>
//                 ) => {
//                   console.log("e", e);
//                   e.preventDefault();

//                   if (e) {
//                     setIsOpen(!isOpen);
//                     console.log("inside");
//                   } else {
//                     console.log("outside");
//                   }
//                 }}
//                 className="block w-full py-2 pl-3 pr-8 text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 transition duration-300 cursor-pointer"
//               />
//               {isOpen && (
//                 <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-md">
//                   {data.map((option) => (
//                     <li
//                       key={option.value}
//                       onClick={() => {
//                         setSelectedOption(option);
//                         setIsOpen(false);
//                       }}
//                       className="px-4 py-2 cursor-pointer hover:bg-gray-100">
//                       {option?.label}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </>
//           );
//         }}
//       />
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";

// import {
//   FieldErrors,
//   FieldValues,
//   RegisterOptions,
//   UseFormRegister,
// } from "react-hook-form";

// interface IClassicSelectData {
//   value: string | any;
//   label: string;
// }

// interface IClassicSelect {
//   id: string;
//   data?: IClassicSelectData[];
//   errors: FieldErrors<FieldValues>;
//   register: UseFormRegister<FieldValues>;
//   required?: boolean;
//   placeholder: string;
//   classNameExtra?: string;
//   requiredMessage?: string;
// }

// export default function CustomSelect({
//   id,
//   data = [],
//   errors,
//   register,
//   required,
//   placeholder,
//   classNameExtra,
//   requiredMessage,
// }: IClassicSelect): JSX.Element {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [selectedOption, setSelectedOption] = useState<{
//     value: string | any;
//     label: string;
//   }>();

//   const handleOptionClick = (option: any) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//   };

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     if (selectedOption === null && data.length > 0) {
//       setSelectedOption(data[0]);
//     }
//   }, [selectedOption, data]);

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         value={selectedOption ? selectedOption?.label : ""}
//         readOnly
//         onClick={(e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
//           e.preventDefault();
//           console.log("xd", e);
//           setIsOpen(!isOpen);
//         }}
//         className="block w-full py-2 pl-3 pr-8 text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500 transition duration-300 cursor-pointer"
//       />
//       {isOpen && (
//         <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded shadow-md">
//           {data.map((option) => (
//             <li
//               key={option.value}
//               onClick={() => handleOptionClick(option)}
//               className="px-4 py-2 cursor-pointer hover:bg-gray-100">
//               {option?.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default function ClassicSelect({
//   id,
//   data = [],
//   errors,
//   register,
//   required = false,
//   placeholder = "",
//   classNameExtra = "",
//   requiredMessage = "",
// }: IClassicSelect): JSX.Element {
//   const registerOptions: RegisterOptions = {
//     required: {
//       value: required,
//       message: requiredMessage,
//     },
//   };

//   return (
//     <div className="input-container">
//       <select
//         id={id}
//         disabled={data.length > 0 ? false : true}
//         {...register(id, registerOptions)}
//         placeholder={placeholder}
//         className={`${classNameExtra} input-select peer`}>
//         <option disabled value="">
//           {placeholder}
//         </option>
//         <option className="hidden" value=""></option>
//         {data.length > 0 &&
//           data.map((item) => {
//             return (
//               <>
//                 <option value={item.value}>{item.label}</option>
//               </>
//             );
//           })}
//       </select>
//       <label
//         htmlFor={id}
//         className="absolute top-0 left-0 ml-3 -mt-2 px-1 text-xs bg-white text-gray-500">
//         {placeholder}
//       </label>
//       {errors[id] && (
//         <p className="text-sm text-red-600 mt-2">
//           {errors[id] && <>{errors[id]?.message}</>}
//         </p>
//       )}
//     </div>
//   );
// }
