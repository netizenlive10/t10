import { Input } from '@material-tailwind/react'
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'

interface AppTextFieldProps {
  label: string
  name: string
  required?: boolean
  type?: 'text' | 'number'
  size?: 'lg' | 'md' | 'sm'
  children?: ReactNode
}

const AppTextField = ({
  type = 'text',
  name,
  required = true,
  size = 'lg',
  label,
  children,
}: AppTextFieldProps) => {
  const { register } = useForm()

  return (
    <Input
      size={size}
      label={label}
      type={type}
      name={name}
      // {...register(name, {
      //   required: required,
      // })}
    >
      {children}
    </Input>
  )
}

export default AppTextField
