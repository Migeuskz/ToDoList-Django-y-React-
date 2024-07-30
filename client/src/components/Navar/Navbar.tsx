import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <Link to="/task">
                <h1>Task App</h1>
            </Link>
            <Link to="/tasks-create">Create App</Link>
        </div>
    )
}
