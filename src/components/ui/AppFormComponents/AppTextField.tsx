import { Input } from '@material-tailwind/react'
import { color, size } from '@material-tailwind/react/types/components/input'
import { ReactNode } from 'react'
import { useForm } from 'react-hook-form'

interface AppTextFieldProps {
  label: string
  name: string
  required?: boolean
  type?: string
  size?: size
  children?: ReactNode
  color?: color
  className?: string
}

const AppTextField = ({
  type = 'text',
  name,
  required = true,
  size = 'lg',
  label,
  children,
  color,
  className,
}: AppTextFieldProps) => {
  const { register } = useForm()

  return (
    <Input
      size={size}
      className={` text-white text-[17.12px] tracking-wider font-light space-x-2  rounded-none focus:rounded-none ${className}`}
      label={label}
      type={type}
      name={name}
      height={70}
      color={color}
      placeholder=""
      {...register(name, {
        required: required,
      })}
      containerProps={{
        className: 'h-[55px]',
      }}
      labelProps={{
        className:
          'peer-placeholder-shown:text-[17.2px] text-[20] peer-focus:text-[11px] after:rounded-tr-none   before:rounded-tl-none -top-2',
      }}
    >
      {children}
    </Input>
  )
}

export default AppTextField
