import { DynamicLogo } from '../../../cmps/DynamicLogo.jsx'

const { Link, NavLink } = ReactRouterDOM

export function NoteSidebar({ isMobileSbOpen, isDesktopSbOpen, isMobile }) {
  return (
    <section
      className={`sidebar note-sidebar ${isMobileSbOpen && 'open'} ${
        isDesktopSbOpen && 'sidebar-shadow'
      }`}
    >
      {isMobile && <DynamicLogo page={'keep'} />}

      <div className="sidebar-btns">
        <NavLink className="btn" to="/note/notes">
          <img src="./assets/img/bulb.svg" />
          {isDesktopSbOpen && <span>Notes</span>}
        </NavLink>
        <NavLink className="btn" to="/note/bin">
          <img src="./assets/img/trash.svg" />
          {isDesktopSbOpen && <span>Bin</span>}
        </NavLink>
      </div>
    </section>
  )
}
