import { render } from '@redwoodjs/testing/web'

import ReviewsPage from './ReviewsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ReviewsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ReviewsPage />)
    }).not.toThrow()
  })
})
