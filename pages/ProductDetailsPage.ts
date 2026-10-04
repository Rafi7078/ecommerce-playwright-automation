import { Page, expect } from '@playwright/test';


export class ProductDetailsPage {

  readonly page: Page;


  constructor(page: Page) {
    this.page = page;
  }


  async verifyProductDetailsPage(): Promise<void> {

    await expect(this.page)
      .toHaveURL(/product_details/);

  }


  async verifyProductName(productName: string): Promise<void> {

    await expect(
      this.page.locator('.product-information h2')
    ).toHaveText(productName);

  }


  async verifyProductPrice(): Promise<void> {

    await expect(
      this.page.locator('.product-information h2')
    ).toBeVisible();

  }


  async verifyAvailability(): Promise<void> {

    await expect(
      this.page.getByText('Availability:')
    ).toBeVisible();

  }


}