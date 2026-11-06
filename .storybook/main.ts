import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    // MCP server for AI agents at http://localhost:6016/mcp (see .mcp.json)
    '@storybook/addon-mcp',
  ],
  // Same <StrictMode> wrapper as src/main.tsx
  framework: { name: '@storybook/react-vite', options: { strictMode: true } },
  staticDirs: ['../public'],
}

export default config
