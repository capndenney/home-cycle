import Input from "../common/Input"
import Button from "../common/Button"

const About = () => {
    return (
        <div id="about-page">
            <h2>About Home Cycle</h2>
            <p>TODO: Write copy for about</p>
            <br />
            <Input>TODO: Name</Input>
            <Input>TODO: Email</Input>
            <Input>TODO: Feedback</Input>
            <Button id="submit-feedback" type="submit" label="Submit" handleClick="TBD" classes="submit button feedback"/>
        </div>
    )
}

export default About