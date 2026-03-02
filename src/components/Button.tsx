import type { ButtonProps } from '../utils/types'

const Button = ({ trailingIcon, buttonText, leadingIcon, bgColor, getActionFn }: ButtonProps) => {
    return (
        <div className={`flex justify-center items-center max-w-max rounded-lg p-1 cursor-pointer ${bgColor ? bgColor : ''}`} onClick={getActionFn}>
            {trailingIcon}
            {buttonText && <span></span>}
            {leadingIcon}
        </div>
    )
}

export default Button