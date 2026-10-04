import { Page, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {

  await this.page.goto('/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

}

  async verifyHomePageLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(/Automation Exercise/i);
  }
}