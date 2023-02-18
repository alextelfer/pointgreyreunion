import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';
function MainNavigation() {
  return (
    <>
      {' '}
      
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/event"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Event Information
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                About the Organizers
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className={classes.container}>
        <img src={'https://liveatsouthlands.com/wp-content/uploads/2016/03/Blog16_POINT-GREY-SECONDARY.jpg'} alt='Point Grey Secondary' className={classes.img} />
        <div className={classes.centered}>Point Grey Secondary <br/> 50 Year Reunion</div>
      </div>
    </>
  );
}

export default MainNavigation;
