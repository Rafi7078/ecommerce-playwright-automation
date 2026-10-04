import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
  baseURL: 'https://automationexercise.com',
  trace: 'on-first-retry',
},

  projects: process.env.CI
  ? [
      {
        name: 'chromium',
        use: {
          ...devices['Desktop Chrome'],
        },
      },
    ]
  : [
      {
        name: 'Microsoft Edge',
        use: {
          ...devices['Desktop Edge'],
          channel: 'msedge',
        },
      },
    ],
});