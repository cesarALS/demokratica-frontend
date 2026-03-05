import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().email("Correo inválido").required("Se requiere correo"),
  password: Yup.string().required("Se requiere contraseña"),
});

const passwordReqs = Yup.string()
    .required("Se requiere contraseña")
    .min(8, "Debe tener al menos 8 caracteres")
    .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Debe contener al menos un carácter especial")

const signupSchema = Yup.object({
  email: Yup.string().email("Correo inválido").required("Se requiere correo"),
  username: Yup.string().required("Debes establecer un nombre de usuario"),
  password: passwordReqs,
  confirmPassword: Yup.string()
    .required("Se requiere confirmar la contraseña")
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  termsAccepted: Yup.boolean().oneOf([true], "Debes aceptar los términos y condiciones"),
});

const changeUsernameSchema = Yup.object({
    newPassword: passwordReqs,    
    confirmNewPassword: Yup.string()
        .required("Se requiere confirmar la contraseña")
        .oneOf([Yup.ref("newPassword")], "Las contraseñas no coinciden"),  
});

export { loginSchema, changeUsernameSchema, signupSchema }