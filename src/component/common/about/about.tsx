import classes from './about.module.css'

const About = ({ about }: { about: string }) => {
    return (
        <div className={classes.about}>
            <span>About:</span>
            <div className={classes.about_text}>{about}</div>
        </div>
    )
}

export default About
