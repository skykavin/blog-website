import logo from './logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom'

function Header(){
    return (
    <div className="header">
        <div className="nav-bar">
            <div className="logo-container">
                <img src='https://c4.wallpaperflare.com/wallpaper/724/474/485/pokemon-go-logo-minimalism-wallpaper-preview.jpg' className='logo-img'/>
            </div>
            <ul className='nav-menu'>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/blogList'>Blog</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
        <div className='header-container'>
            <div className='header-content'>
                Hi
            </div>
        </div>
    </div>
    )
}

export default Header