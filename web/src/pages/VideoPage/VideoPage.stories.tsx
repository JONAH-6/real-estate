import type { Meta, StoryObj } from '@storybook/react'

import VideoPage from './VideoPage'

const meta: Meta<typeof VideoPage> = {
  component: VideoPage,
}

export default meta

type Story = StoryObj<typeof VideoPage>

export const Primary: Story = {}
