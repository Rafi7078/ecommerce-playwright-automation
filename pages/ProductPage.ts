import { Page, expect } from '@playwright/test';

export class ProductPage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }


  async navigate(): Promise<void> {
    await this.page.getByText('Products').click();
  }


  async verifyProductPageLoaded(): Promise<void> {
    await expect(this.page)
      .toHaveTitle(/Automation Exercise/i);
  }


  async searchProduct(productName: string): Promise<void> {

    await this.page
      .locator('#search_product')
      .fill(productName);

    await this.page
      .locator('#submit_search')
      .click();

    await expect(
      this.page.locator('.features_items')
    ).toBeVisible();

}


  async verifyProductVisible(productName: string): Promise<void> {

  const product = this.page
    .locator('.productinfo')
    .filter({ hasText: productName });

  await expect(product).toBeVisible();

}


  async viewProduct(productName: string): Promise<void> {

    await this.page
      .getByText(productName)
      .first()
      .click();

  }

}