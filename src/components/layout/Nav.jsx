import { Link } from "react-router"
import Button from "../common/Button"

//TODO: add user context to links

const Nav = ({logInStatus, setLogInStatus}) => {

    return (
        <div className="nav-menu">
            <Link className="link new-task" to="/newtask">
                New Task
            </Link>
            <Link className="link" to="/">
                Home
            </Link>
            <Link className="link" to="/calendar">
                Calendar
            </Link>
            <Link className="link" to="/about">
                About
            </Link>
            {logInStatus && <Button id="logout" label="Log Out" handleClick={() => setLogInStatus(false)} classes="button" />}
        </div>
    )
}

export default Nav