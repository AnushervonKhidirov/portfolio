const endpoint = 'http://localhost:4000'

export enum Endpoint {
    UserInfo = `${endpoint}/user`,
    Positions = `${endpoint}/positions`,
    Position = `${endpoint}/positions/[id]`,
    Grades = `${endpoint}/grades`,
    Grade = `${endpoint}/grades/[id]`,
    SocialLinks = `${endpoint}/social-links`,
}