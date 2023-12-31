import { DynamicFilter } from './DynamicFilter.jsx'
import { DynamicLogo } from './DynamicLogo.jsx'

const { Link, NavLink, useLocation } = ReactRouterDOM
const { useState, useEffect, Fragment } = React

export function DynamicHeader({
  onSetIsSbOpen,
  searchValue,
  onSearch,
  filter,
  onSetFilter,
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const { pathname } = useLocation()

  const headerType = pathname.includes('mail') ? 'mail' : 'keep'

  return (
    <header className="dynamic-header">
      <div className="logo-menu-wrapper">
        <button className="btn btn-menu" onClick={onSetIsSbOpen}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <DynamicLogo page={headerType} />
      </div>


      {headerType ==='keep' && 
      <Fragment>
      <form className="search-form" onSubmit={(ev) => ev.preventDefault()}>
        <button>
          <img className="search-img" src="./assets/img/search.svg" />
        </button>
        <input
          value={searchValue}
          onChange={onSearch}
          className="search-input"
          type="text"
          placeholder="Search"
        />
      </form>

      <i
        className="fa-solid fa-filter"
        onClick={() => setIsFilterOpen((filterOpen) => !filterOpen)}
      ></i>
      {isFilterOpen && (
        <DynamicFilter onSetFilter={onSetFilter} filter={filter} />
      )}
      </Fragment>
      }
    </header>
  )
}
