const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
  return (
    <header className="app-header">
      <Link to="/">
        <div className="logo-container">
          <img className="app-logo" src="./assets/img/appsus-logo.png" />
          <h3>AppSus</h3>
        </div>
      </Link>

      <nav>
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/mail">Mail</NavLink>
            </li>
            <li>
              <NavLink to="/note">Note</NavLink>
            </li>
            <li>
              <NavLink to="/book">Miss Books</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

{
  /* // <header className="app-header">
    //   <Link to="/">
    //     <div className="logo-container">
    //       <img className="app-logo" src="./assets/img/appsus-logo.png" />
    //       <h3>AppSus</h3>
    //     </div>
    //   </Link>
    //   <nav>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/mail">Mail</NavLink>
    //     <NavLink to="/note">Note</NavLink>
    //     <NavLink to="/book">Miss Books</NavLink>
    //     <NavLink to="/about">About</NavLink>
    //   </nav>
    // </header> */
}
