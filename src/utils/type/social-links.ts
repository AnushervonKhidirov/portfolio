export type TSocialLink = {
    title: string
    href: string
    Icon: () => JSX.Element
}

export type TSocialLinkList = {
    list: TSocialLink[]
}
