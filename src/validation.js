import * as yup from 'yup'

const alphabeticalspace = /^['a-z ']{3,40}$/i;;
const numeric = /^[0-9]+$/;
const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const userpassword = /^[\w!@*\-?¡¿+/.,#ñÑ]+$/;
 
const schema = yup.object().shape({
  email: yup.string().required('Este campo es requerido').matches(emailValid, 'El email es incorrecto'),
  password: yup.string().required('Este campo es requerido').min(8,'La contraseña debe tener al menos 8 caracteres').max(25,'La contraseña debe tener máximo 25 caracteres').matches(userpassword,'La contraseña debe contener(!@*-?¡¿+/.,#ñÑ)'),
  firstName: yup.string().required('Este campo es requerido').matches(alphabeticalspace,'Sólo se admiten letras y espacios (mín 3, máx 40)'),
  lastName: yup.string().required('Este campo es requerido').matches(alphabeticalspace,'Sólo se admiten letras y espacios (mín 3, máx 40)'),
  age:  yup.string().required('Este campo es requerido').matches(numeric,'Solo se admiten números'),
  website: yup.string().url('El sitio web debe ser una URL válida'),
})
 
export default schema
