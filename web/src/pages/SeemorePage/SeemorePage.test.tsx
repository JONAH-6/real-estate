import { render } from '@redwoodjs/testing/web'

import SeemorePage from './SeemorePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SeemorePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SeemorePage />)
    }).not.toThrow()
  })
})
