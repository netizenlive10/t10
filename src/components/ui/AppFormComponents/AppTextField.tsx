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
      size={'lg'}
      className="text-white text-[18px] tracking-wider font-light space-x-2 "
      label={label}
      type={type}
      name={name}
      height={70}
      {...register(name, {
        required: required,
      })}
      containerProps={{
        className: 'h-[50px]',
      }}
    >
      {children}
    </Input>
  )
}

export default AppTextField
