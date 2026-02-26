import type { ReactNode } from "react"

export interface SearchBarProps {
    placeholderText?: string
    getInputValue?: string
    getActionFn?: (searchEvent: React.ChangeEvent<HTMLInputElement>) => void
    filterValue?: boolean
    getClearFn?: () => void
}

export interface ButtonProps {
    trailingIcon?: ReactNode
    buttonText?: string
    leadingIcon?: ReactNode
    bgColor?: string
}

export interface DropdownProps {
    selectedValue?: string
    options?: DropdownOptionType[]
    visibility?: boolean
    getSelectedFn?: () => void
    getOptionFn?: (value?: string) => void
}

export interface DropdownOptionType {
    name?: string
    value?: string
}
export interface BookmarkType {
    id?: number
    title?: string
    description?: string
    url?: string
    domain?: string
    favicon?: string
    tags?: string[]
    archived?: boolean
    isPinned?: boolean
    createdAt?: string
}

export interface BookmarkProps {
    title?: string
    domain?: string
    description?: string
    getTags?: string[]
    createdDate?: string
    logo?: string
    getPinFn?: () => void
    pinned?: boolean
}
export interface TagProps {
    name?: string
}