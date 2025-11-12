import Button from "../common/Button"
import Input from "../common/Input"

const LogIn = () => {
    return (
        <div className="log-in card add-blur">
            <h2>Log In</h2>
            <Input label="Username:" value="Username" id="username"/> {/* TODO: Add details to point to Username */}
            <Input label="Password:" value="password" type="password" id="password"/> {/* TODO: Add details to point to Password */}
            <Button label="Log In" id="log-in-button" /> {/* TODO: Set button to validate credentials and move to home page */}
        </div>
    )
}

export default LogIn