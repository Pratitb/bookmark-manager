import { HiOutlineDotsVertical } from "react-icons/hi"
import type { BookmarkProps } from "../utils/types"
import Separator from "./Separator"
import Tag from "./Tag"
import { TbPinned, TbPinnedFilled } from "react-icons/tb"

const Bookmark = ({ title, domain, description, getTags, createdDate, logo, getPinFn, pinned }: BookmarkProps) => {
    return (
        <div className={`w-full flex flex-col ${pinned ? 'bg-gray-300' : 'bg-white'} rounded-lg p-4 shadow-sm md:max-w-[48%] lg:max-w-[32%]`}>
            {/* logo, title, more */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="" className="max-w-10 rounded-full" />
                    <div>
                        <p className="text-lg font-semibold">{title}</p>
                        <p className="text-xs lowercase">{domain}</p>
                    </div>
                </div>
                <div className="cursor-pointer"><HiOutlineDotsVertical /></div>
            </div>
            <Separator />
            {/* description */}
            <p className="text-xs text-gray-600 flex-1">{description}</p>
            {/* tags */}
            <div className="flex gap-2 mt-6 mb-4">
                {getTags?.map((tag: string) => <Tag key={tag} name={tag} />)}
            </div>
            {/* creation data and pin */}
            <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600">{createdDate}</p>
                <div onClick={getPinFn}>{pinned ? <TbPinnedFilled size={20} /> : <TbPinned size={20} />}</div>
            </div>
        </div>
    )
}

export default Bookmark