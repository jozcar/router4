import React from 'react';

const Layout = () => (
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
      <a className="mdl-navigation__link" href="~/Home/Index">
        <i className="material-icons">build</i> Link 1
                </a>
      <a className="mdl-navigation__link" href="~/Home/CurrentConsents"><i className="material-icons">visibility</i> Link 2</a>
      <a className="mdl-navigation__link" href=""><i className="material-icons">dashboard</i> Link 3</a>
      <a className="mdl-navigation__link" href="~/Access/Index"><i className="material-icons">face</i> Link 4</a>
      <a className="mdl-navigation__link" href="~//Documentation/Index"><i className="material-icons">mode_comment</i>Link 4</a>
    </nav>
  </div>
  <div className="page-content">
    <div className="demo-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--10-col">

      body hhhhhhhhhhhhhhh
                    </div>


  </div>
  </div>
)

export default Layout;