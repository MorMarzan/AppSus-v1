import { MissBooksAppHeader } from '../cmps/MissBooksAppHeader.jsx'

const { Outlet, useSearchParams } = ReactRouterDOM

export function MissBooksApp() {
  return (
    <section className="miss-books page">
      <MissBooksAppHeader />
      <Outlet />
    </section>
  )
}
