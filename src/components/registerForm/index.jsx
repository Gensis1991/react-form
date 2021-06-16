import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from '../../validation'
import './style.css';

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2 className='session'>Inicia Sesión</h2>
      </div>

      <div>
        <input placeholder='Correo electrónico'{...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <input type="password" placeholder='Contraseña'{...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <h2 className='forgetPasswd'>¿Olvidaste tu contraseña?</h2>
      </div>

      <input type='submit' value='Iniciar sesión' />

      <div>
        <h2 className='notAccount'>¿Todavía no tienes cuenta?</h2>
      </div>

      <input type='submit' value='Regístrate aquí' />
      
    </form>
  )
}