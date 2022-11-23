import '../styles/navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'

export const NavBar = ({isLoged}) => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('user-cred');
        navigate('/', {
            replace: true
        })
    }

    return (
        <div className='navbar'>
            <div className='logo'>Logo</div>
            <div className='navlinks'>
                <button className='nav-button home-button'><NavLink style={({isActive}) => {
                    return {
                        color: isActive ? "#ff5455" : "black"
                    }
                }} to='/' className='link'>Home</NavLink></button>
                {isLoged ? <button className='nav-button posts-button'><NavLink style={({isActive}) => {
                    return {
                        color: isActive ? "#ff5455" : "black"
                    }
                }} to="/posts" className='link'>Posts</NavLink></button>: null}
                {isLoged ? <button onClick={handleLogout} className='logout-button'>Logout</button>: <button className='login-button'><NavLink to="/login" className='link'>Login</NavLink></button>}
            </div>
        </div>
    )
}