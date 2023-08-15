export enum UserConfig {
    USER_NAME = 'Anushervon',
    USER_SURNAME = 'Khidirov',
    USER_LOGIN = 'AnushervonKhidirov',
    USER_EMAIL = 'ankhid98@gmail.com',
    USER_URL = 'https://api.github.com/users/AnushervonKhidirov',
    REPO_URL = 'https://api.github.com/users/AnushervonKhidirov/repos',
}

export interface IRepo {
    id: number
    name: string
    html_url: string
    description: string | null
    language: string
    has_pages: boolean
}

export interface IUserData {
    login: string
    githubPage: string
    email: string | null
    location: string | null
    avatar: string | null
    bio: string | null
}
