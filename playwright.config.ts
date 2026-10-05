import dotenv from 'dotenv';

import { defineConfig, devices } from '@playwright/test';

dotenv.config();


export default defineConfig({

  testDir: './tests',


  // Disable parallel execution for public website stability
  fullyParallel: false,


  // Maximum test execution time
  timeout: 60000,


  // Assertion timeout
  expect: {
    timeout: 10000,
  },


  forbidOnly: !!process.env.CI,


  // Retry failed tests once (useful for unstable public websites)
  retries: 1,


  // Run one test at a time
  workers: 1,


  reporter: 'html',


  use: {

    // Application URL
    baseURL: 'https://automationexercise.com',


    // Navigation and action stability
    navigationTimeout: 60000,

    actionTimeout: 15000,


    // Collect trace when retry happens
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