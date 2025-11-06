import { Link } from "react-router"

//TODO: add user context to links

const Nav = () => {
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
        </div>
    )
}

export default Nav