import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('Home Page Smoke Tests', () => {
  test('should load the home page successfully', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.navigate();
    await homePage.verifyHomePageLoaded();
  });
});