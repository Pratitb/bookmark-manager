import { LuChevronsUpDown } from "react-icons/lu"
import type { DropdownProps } from "../utils/types"

const Dropdown = ({ selectedValue, options, visibility, getSelectedFn, getOptionFn }: DropdownProps) => {
    return (
        <div className={`bg-white px-3 py-[6px] flex-1 border-primary rounded-lg relative cursor-pointer max-w-28`}>
            {/* SELECTED VALUE */}
            <div className={`flex items-center justify-between text-gray-500 text-sm gap-2`} onClick={getSelectedFn}>
                <p className={`text-xs`}>{selectedValue}</p>
                <LuChevronsUpDown />
            </div>
            {/* OPTIONS */}
            {visibility ? <div className="absolute bg-white text-gray-500 w-full p-1 top-9 left-0 border-primary rounded-lg">
                {options?.map(option => <p key={option?.value} onClick={() => getOptionFn?.(option?.value)} className="text-xs lowercase py-[6px] px-2 rounded-lg hover:bg-gray-800 hover:text-white">{option?.value}</p>)}
            </div> : null}
        </div>
    )
}

export default Dropdown