import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRight, Ellipsis, Upload } from 'lucide-react'
import { expect, fn } from 'storybook/test'
import { Button } from './button'

const meta = {
  component: Button,
  tags: ['ai-generated'],
  args: { children: 'Get started', onClick: fn() },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Get started' }))
    await expect(args.onClick).toHaveBeenCalledOnce()
  },
}

export const Outline: Story = { args: { variant: 'outline' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Destructive: Story = { args: { variant: 'destructive', children: 'Delete project' } }
export const Link: Story = { args: { variant: 'link', children: 'Read the docs' } }

export const ExtraSmall: Story = { args: { size: 'xs' } }
export const Small: Story = { args: { size: 'sm' } }
export const Large: Story = { args: { size: 'lg' } }

export const WithLeadingIcon: Story = {
  args: {
    variant: 'outline',
    children: (
      <>
        <Upload />
        Upload
      </>
    ),
  },
}

export const WithTrailingIcon: Story = {
  args: {
    variant: 'secondary',
    size: 'lg',
    children: (
      <>
        Next
        <ArrowRight />
      </>
    ),
  },
}

export const IconOnly: Story = {
  args: { variant: 'ghost', size: 'icon', 'aria-label': 'More options', children: <Ellipsis /> },
  play: async ({ canvas }) => {
    // The icon is decorative; the accessible name must come from aria-label
    const button = canvas.getByRole('button', { name: 'More options' })
    await expect(button).toHaveAttribute('data-size', 'icon')
  },
}

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Get started' })
    await expect(button).toBeDisabled()
    // opacity/button/disabled from DESIGN.md
    await expect(getComputedStyle(button).opacity).toBe('0.35')
  },
}

export const KeyboardActivation: Story = {
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'Get started' })).toHaveFocus()
    await userEvent.keyboard('{Enter}')
    await userEvent.keyboard(' ')
    await expect(args.onClick).toHaveBeenCalledTimes(2)
  },
}

export const AsChildLink: Story = {
  args: {
    asChild: true,
    variant: 'outline',
    children: <a href="#pricing">See pricing</a>,
  },
  play: async ({ canvas }) => {
    // asChild renders the child element with the button styles (Radix Slot)
    const link = canvas.getByRole('link', { name: 'See pricing' })
    await expect(link).toHaveAttribute('href', '#pricing')
    await expect(link).toHaveAttribute('data-slot', 'button')
  },
}

// Proves the preview loaded src/index.css: an unstyled <button> has none of these values
export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const style = getComputedStyle(canvas.getByRole('button', { name: 'Get started' }))
    // bg-primary → reference/action/primary/background (#000000)
    await expect(style.backgroundColor).toBe('rgb(0, 0, 0)')
    // rounded-button → radius/button (8px), h-12 → size/button/default (48px)
    await expect(style.borderTopLeftRadius).toBe('8px')
    await expect(style.height).toBe('48px')
    // text-button-label → typography/button/label (15px / 500)
    await expect(style.fontSize).toBe('15px')
    await expect(style.fontWeight).toBe('500')
  },
}
