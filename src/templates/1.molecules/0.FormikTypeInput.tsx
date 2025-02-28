// Este componente facilita facilita usar formik

import { Field, ErrorMessage } from "formik";
import LabelField from "../0.atoms/0.LabelField";

interface FormikTypeInputProps {
    name: string;
    label: string;
    type: string;
    placeholder: string;
    divClassName?: string,
    fieldClassName?: string,    
    fieldLabelClassName?: string,
    fieldTextClassName?: string,
  }

const FormikTypeInput = ( {
  name, 
  label, 
  type, 
  placeholder,
  divClassName,
  fieldClassName,
  fieldLabelClassName,
  fieldTextClassName,
}:
FormikTypeInputProps ) => {
  return (
    <div className="flex flex-col gap-y-1">
      <Field
        component={LabelField}
        label={label}
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        showEye={true}
        divClassName={divClassName}
        fieldClassName={fieldClassName}
        fieldLabelClassName={fieldLabelClassName}
        fieldTextClassName={fieldTextClassName}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div> 
  );
};

export default FormikTypeInput;

