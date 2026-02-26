import { IoIosClose } from "react-icons/io"
import type { SearchBarProps } from "../utils/types"

const SearchBar = ({ placeholderText, getInputValue, getActionFn, filterValue, getClearFn }: SearchBarProps) => {
    return (
        <div className="w-full relative">
            <input type="text" className="text-gray-500 rounded-lg w-full px-3 py-[6px] border-primary focus-visible:outline-none placeholder:text-sm" placeholder={placeholderText} value={getInputValue} onChange={getActionFn} />
            {filterValue ? <div className="cursor-pointer absolute right-3 top-[7px] bg-gray-200 rounded-full" onClick={getClearFn}><IoIosClose size={24} /></div> : null}
        </div>
    )
}

export default SearchBar