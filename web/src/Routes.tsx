import { Router, Route, Set } from '@redwoodjs/router'

import MainLayout from 'src/layouts/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/seemore" page={SeemorePage} name="seemore" />
      <Route path="/reviews" page={ReviewsPage} name="reviews" />
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/video" page={VideoPage} name="video" />
        <Route path="/contact" page={ContactPage} name="contact" />
      </Set>
    </Router>
  )
}

export default Routes
