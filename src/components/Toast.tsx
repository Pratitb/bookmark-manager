import { FaCheckCircle } from "react-icons/fa"
import type { ToastProps } from "../utils/types"

const Toast = ({ color, message }: ToastProps) => {
    return (
        <div className={`flex items-center gap-2 bg-${color} border-bg-${color} whitespace-nowrap  w-full max-w-fit py-[10px] px-4 rounded-lg fixed top-[30px] left-[50%] translate-x-[-50%]`}>
            <FaCheckCircle />
            <p>{message}</p>
        </div>
    )
}

export default Toast