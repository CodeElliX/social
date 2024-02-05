import { NavLink } from 'react-router-dom';
import classes from './navbar.module.css';

function Navbar() {
    return(
      <nav className={classes.nav}>
      <div className={classes.item}><NavLink to="/profile" className={navData => navData.isActive ? classes.link : classes.item}>Profile</NavLink></div>
      <div className={classes.item}><NavLink to="/dialogs"className={navData => navData.isActive ? classes.link : classes.item}>Messages</NavLink></div>
      <div className={classes.item}><NavLink to="/news" className={navData => navData.isActive ? classes.link : classes.item}>News</NavLink></div>
      <div className={classes.item}><NavLink to="" className={navData => navData.isActive ? classes.link : classes.item}>Music</NavLink></div>
      <div className={classes.item}><NavLink to="" className={navData => navData.isActive ? classes.link : classes.item}>Settings</NavLink></div>
    </nav>
    );
}
export default Navbar;