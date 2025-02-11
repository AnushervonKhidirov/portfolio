export type TAlert = {
    type: 'success' | 'warning' | 'error'
    header: string
    message: string | string[]
}
