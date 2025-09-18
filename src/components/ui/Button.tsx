import type React from "react"

interface Props {
    children: React.ReactNode,
    handleClick?: () => void,
    title: string,
    disabled?: boolean,
    bgcolor?: string,
    color?: string
}

const Button = ({ children, handleClick, title, disabled, bgcolor, color }: Props) => {
  return (
    <div>
        <button onClick={handleClick} disabled={disabled} title={title} className={`px-5 py-3.5 disabled:cursor-not-allowed rounded-md cursor-pointer duration-150 ease-linear ${bgcolor ? bgcolor : 'bg-orange-500' } ${color ? color : 'text-white'} flex items-center gap-2.5`}>
            {children}
        </button>
    </div>
  )
}

export default Button