import Button from "../common/Button"
import Input from "../common/Input"
import './login.css'

const LogIn = () => {
    return (
        <div className="log-in card add-blur">
            <h2>Log In</h2>
            <Input /> {/* TODO: Add details to point to Username */}
            <Input /> {/* TODO: Add details to point to Password */}
            <Button label="Log In" /> {/* TODO: Set button to validate credentials and move to home page */}
        </div>
    )
}

export default LogIn