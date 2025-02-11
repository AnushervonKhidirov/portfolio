import type { TResponseError } from '@type/errors.type'

export class ResponseError {
    message: string | string[]
    statusCode: number
    error: string

    constructor(err: Partial<TResponseError> | undefined) {
        this.message = err?.message ?? 'Something went wrong, please try again later!'
        this.statusCode = err?.statusCode ?? 400
        this.error = err?.error ?? 'Bad request'
    }
}
