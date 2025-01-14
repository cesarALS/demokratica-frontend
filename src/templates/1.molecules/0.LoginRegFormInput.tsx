// Este componente es para login y registro. Básicamente, permite crear un form al estilo formik y yup, y usa por debajo LabelField, que fue diseñado específicamente para formik, también

import { Field, ErrorMessage } from "formik";
import LabelField from "../../components/0.atoms/0.LabelField";

interface LoginRegFormInputProps {
    name: string;
    label: string;
    type: string;
    placeholder: string;
  }

const LoginRegFormInput = ( {name, label, type, placeholder}: LoginRegFormInputProps ) => {
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
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div> 
  );
};

export default LoginRegFormInput;

