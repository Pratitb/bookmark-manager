import type { ButtonProps } from '../utils/types'

const Button = ({ trailingIcon, buttonText, leadingIcon, bgColor }: ButtonProps) => {
    return (
        <div className={`flex justify-center items-center max-w-max rounded-lg p-1 ${bgColor ? bgColor : ''}`}>
            {trailingIcon}
            {buttonText && <span></span>}
            {leadingIcon}
        </div>
    )
}

export default Button