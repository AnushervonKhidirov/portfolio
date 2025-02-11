export const Host = 'http://localhost:4000'

export enum Endpoint {
    Skill = `${Host}/acquired-skills/[id]`,
    Skills = `${Host}/acquired-skills`,

    UserInfo = `${Host}/user`,
    Positions = `${Host}/positions`,
    Position = `${Host}/positions/[id]`,
    Grades = `${Host}/grades`,
    Grade = `${Host}/grades/[id]`,
    SocialLinks = `${Host}/social-links`,
    Contacts = `${Host}/contacts`,
    Companies = `${Host}/companies`,
    Company = `${Host}/companies[id]`,
    Projects = `${Host}/projects`,
    Project = `${Host}/projects[id]`,
    Mail = `${Host}/email`,
}
