import { test, expect } from '@playwright/test';

test.describe('Home Page Smoke Tests', () => {
  test('should load the home page successfully', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Automation Exercise/i);
  });
});