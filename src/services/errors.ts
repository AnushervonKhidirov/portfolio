import type { TResponseError } from '@type/errors'

export class ResponseError {
    message: string
    statusCode: number
    error?: string

    constructor(err: Partial<TResponseError> | undefined) {
        this.message = err?.message ?? 'Bad request'
        this.statusCode = err?.statusCode ?? 400
        this.error = err?.error
    }
}
