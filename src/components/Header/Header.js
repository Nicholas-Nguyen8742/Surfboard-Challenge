import './Header.scss';
import logo from '../../assets/images/surfboardlogo.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={logo} alt='Surfboard Logo'/>
            <nav className='header__nav'>
                <NavLink  exact={true} activeClassName="header__item-active" className="header__item-inactive" to='/'>Login</NavLink>
                <NavLink activeClassName="header__item-active" className="header__item-inactive" to='/register'>Register</NavLink>
            </nav>
        </header>
    );
}