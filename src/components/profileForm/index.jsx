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
        <label>First Name</label>
        <input type="text" {...register('firstName')} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div style={{ marginBottom: 10 }}>
        <label>Last Name</label>
        <input type="text" {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label>Age</label>
        <input type="text" {...register('age')} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>
      <div>
        <label>Website</label>
        <input type="text" {...register('website')} />
        {errors.website && <p>{errors.website.message}</p>}
      </div>

      <input type="submit" />
    </form>
  )
}
