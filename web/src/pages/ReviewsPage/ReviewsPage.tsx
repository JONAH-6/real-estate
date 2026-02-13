// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ReviewsPage = () => {
  return (
    <>
      <Metadata title="Reviews" description="Reviews page" />

      <h1>ReviewsPage</h1>
      <p>
        Find me in <code>./web/src/pages/ReviewsPage/ReviewsPage.tsx</code>
      </p>
      {/*
          My default route is named `reviews`, link to me with:
          `<Link to={routes.reviews()}>Reviews</Link>`
      */}
    </>
  )
}

export default ReviewsPage
