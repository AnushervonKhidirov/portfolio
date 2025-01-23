import type { TQuery } from '@type/common.type'

export class Query {
    getString(query: TQuery) {
        const queryNames = Object.keys(query)
        const queryStrings = queryNames.map(queryName => `${queryName}=${query[queryName]}`)
        return `?${queryStrings.join('&')}`
    }
}
