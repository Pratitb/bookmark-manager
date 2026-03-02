import { IoMdCloseCircle } from 'react-icons/io'
import type { OverlayProps } from '../utils/types'

const Overlay = ({ children, getActionFn }: OverlayProps) => {
    return (
        <div className='h-[100vh] w-[100vw] bg-gray-900/90 fixed top-0'>
            <IoMdCloseCircle className='absolute right-3 top-3 cursor-pointer' size={36} color='white' onClick={getActionFn} />
            {children}
        </div>
    )
}

export default Overlay