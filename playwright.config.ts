import dotenv from 'dotenv';

import { defineConfig, devices } from '@playwright/test';

dotenv.config();

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
   
  timeout: 60000,
  
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