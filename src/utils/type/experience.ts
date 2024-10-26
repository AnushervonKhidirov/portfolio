export type TExperience = {
    name: string
    position: string
    dates: {
        from: Date
        to: Date
    }
    tasks: string[]
    stack: string[]
    about?: string
    rating?: number
}
