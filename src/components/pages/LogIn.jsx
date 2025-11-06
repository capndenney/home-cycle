import Button from "../common/Button"
import Input from "../common/Input"

const LogIn = () => {
    return (
        <div>
            <h2>Log In</h2>
            <Input /> {/* TODO: Add details to point to Username */}
            <Input /> {/* TODO: Add details to point to Password */}
            <Button /> {/* TODO: Set button to validate credentials and move to home page */}
        </div>
    )
}

export default LogIn