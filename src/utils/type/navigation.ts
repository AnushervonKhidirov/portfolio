export type TNavigationItem = {
    href: string
    title: string
    fixButtonPadding?: boolean
}

export type TNavigationList = {
    navigationLinks: TNavigationItem[]
    fixButtonPadding?: boolean
}
