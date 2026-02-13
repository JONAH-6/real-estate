import type { Meta, StoryObj } from '@storybook/react'

import ReviewsPage from './ReviewsPage'

const meta: Meta<typeof ReviewsPage> = {
  component: ReviewsPage,
}

export default meta

type Story = StoryObj<typeof ReviewsPage>

export const Primary: Story = {}
