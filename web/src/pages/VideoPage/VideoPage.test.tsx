import { render } from '@redwoodjs/testing/web'

import VideoPage from './VideoPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VideoPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VideoPage />)
    }).not.toThrow()
  })
})
