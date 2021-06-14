import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from '../../validation'
import './style.css';

export default function Profile() {
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
        <input type="text" placeholder='Nombres'{...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <input type="text" placeholder='Apellidos'{...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <input type="text" placeholder='Correo Electrónico Corporativo'{...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <input type="password" placeholder='Ingresa una contraseña'{...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <div>
        <input type="password" placeholder='Confirma la contraseña'{...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <input type="submit" />
    </form>
  )
}
