import { useEffect, useMemo, useRef, useState } from "react";
import SearchBar from "./components/SearchBar";
import Button from "./components/Button";
import { IoIosAdd } from "react-icons/io";
import Dropdown from "./components/Dropdown";
import { dummyBookmarks, sortingOptions } from "./utils/dummyData";
import type { BookmarkType } from "./utils/types";
import Bookmark from "./components/Bookmark";
import { useRemHeight } from "./hooks/useRemHeight";

const App = () => {

  const [searchValue, setSearchValue] = useState('')
  const [debounceSearchValue, setDebounceSearchValue] = useState('')

  const [allBookmarks, setAllBookmarks] = useState(dummyBookmarks)

  const [sortVisibility, setSortVisibility] = useState(false)
  const [selectedOption, setSelectedOption] = useState('sort by')

  const bookmarksContainer = useRef<HTMLDivElement | null>(null)
  const height = useRemHeight(bookmarksContainer, 20)


  // FUNCTIONS ------------------------------------------
  const handleSearch = (searchEvent: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(searchEvent?.target.value)
  }
  const handleSortOptionsVisibility = () => {
    setSortVisibility(!sortVisibility)
  }
  const handleOptionSelection = (option?: string) => {
    setSortVisibility(false)
    setSelectedOption(option ?? 'sort by')
  }

  const handlePinning = (id: number) => setAllBookmarks(prev => prev.map(bookmark => bookmark?.id === id ? { ...bookmark, isPinned: !bookmark.isPinned } : bookmark))

  const visibleBookmarks = useMemo(() => {
    const trimmed = debounceSearchValue?.trim().toLowerCase()

    let list = allBookmarks
    if (trimmed) list = list.filter(b => b?.title?.toLowerCase().includes(trimmed))

    return [...list].sort((a, b) => {
      // pinned first
      if (a.isPinned && !b.isPinned) return -1
      if (!a.isPinned && b.isPinned) return 1

      // fallback: original order via id
      return Number(a.id) - Number(b.id)
    })
  }, [allBookmarks, debounceSearchValue])

  const handleSearchClear = () => {
    setSearchValue('')
  }

  // EFFECTS -----------------------------------------
  useEffect(() => {
    const debouceTimer = setTimeout(() => {
      setDebounceSearchValue(searchValue)
    }, 500);

    return () => clearTimeout(debouceTimer)
  }, [searchValue])

  useEffect(() => {
    visibleBookmarks?.map((b) => console.log(`${b?.id}, ${b?.isPinned}`))
  })


  return (
    <div className="min-h-screen bg-gray-100 capitalize">
      <div className="container">
        {/* HEADER */}
        <div>
          <p className="uppercase text-xl tracking-wide font-semibold text-gray-800 mb-3">bookmark manager</p>
          <div className="flex justify-between items-center gap-2">
            <SearchBar placeholderText="search for a bookmark..." getInputValue={searchValue} getActionFn={handleSearch} filterValue={searchValue?.length > 0} getClearFn={handleSearchClear} />
            <Button leadingIcon={<IoIosAdd color="#fff" size={24} />} bgColor="bg-gray-800" />
          </div>
        </div>
        {/* MAIN */}
        <div className="mt-4 flex flex-col justify-between">
          <div className="w-full flex justify-between items-center">
            <p className="text-gray-800 font-semibold flex-1">all bookmarks</p>
            <Dropdown selectedValue={selectedOption} options={sortingOptions} getSelectedFn={handleSortOptionsVisibility} getOptionFn={handleOptionSelection} visibility={sortVisibility} />
          </div>
          {/* BOOKMARKS */}
          <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mt-4" ref={bookmarksContainer} style={{ maxHeight: height, overflowY: 'auto' }}>
            {visibleBookmarks?.map((bookmark: BookmarkType) => <Bookmark key={bookmark?.id} logo={bookmark?.favicon} title={bookmark?.title} createdDate={bookmark?.createdAt} description={bookmark?.description} domain={bookmark?.domain} pinned={bookmark?.isPinned} getTags={bookmark?.tags} getPinFn={() => handlePinning?.(bookmark.id ?? 0)} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
