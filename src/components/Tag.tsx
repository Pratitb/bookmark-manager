import type { TagProps } from '../utils/types'

const Tag = ({ name }: TagProps) => {
    return (
        <div className='text-xs text-gray-500 border border-gray-500 rounded-lg px-2 py-1'>{name}</div>
    )
}

export default Tag