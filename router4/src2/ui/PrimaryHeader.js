import React  from 'react';
import { NavLink } from 'react-router-dom';

const PrimaryHeader = () => (
<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
<header className="mdl-layout__header" style={{backgroundColor: "hsl(210, 76 %, 46 %) !important"}}>
    <div className="mdl-layout__header-row">
      <span className="mdl-layout__title">
      </span>
      <div className="mdl-layout-spacer">
        <h6>
          <span> App
         </span>
        </h6>

      </div>
      <nav className="mdl-navigation mdl-layout--large-screen-only">
          <button id="demo-menu-lower-right"
            className="mdl-button mdl-js-button" style={{color:"white"}}>
            Hello <strong>@User.Identity.GetUserName()</strong><i className="material-icons">more_vert</i>
          </button>

          <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="demo-menu-lower-right">
                                <li className="mdl-menu__item"><a href="javascript:document.getElementById('logoutForm').submit()">Log off</a></li>
                        </ul>
      </nav>
    </div>
 </header>
   <div className="mdl-layout__drawer">
    <span className="mdl-layout__title">Menu</span>
    <nav className="mdl-navigation">
        <NavLink to="/app" exact>Home</NavLink>
        <NavLink to="/app/users" >Users</NavLink>
       <NavLink to="/app/products">Products</NavLink>

    </nav>
  </div>
  </div>

)

export default PrimaryHeader;