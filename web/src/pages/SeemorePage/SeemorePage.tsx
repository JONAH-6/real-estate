// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const SeemorePage = () => {
  return (
    <>
      <Metadata title="Seemore" description="Seemore page" />

      <h1>SeemorePage</h1>
      <p>
        Find me in <code>./web/src/pages/SeemorePage/SeemorePage.tsx</code>
      </p>
      {/*
          My default route is named `seemore`, link to me with:
          `<Link to={routes.seemore()}>Seemore</Link>`
      */}
    </>
  )
}

export default SeemorePage
