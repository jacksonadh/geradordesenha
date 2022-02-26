import React, { useRef, useEffect } from 'react'
import { useField } from '@unform/core'
import { Form } from './styles'

export default function MyForm({ name, label, ...rest }) {

  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  const formRef = useRef()
  const handleFormSubmit = senha => {
    console.log(senha)
  }
  return (
    <Form ref={formRef} onSubmit={handleFormSubmit}>
      <label htmlFor={fieldName}>{label}</label>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </Form>
  )
}