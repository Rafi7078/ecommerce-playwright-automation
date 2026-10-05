import { Page, expect } from '@playwright/test';

export class CartPage {

  readonly page: Page;


  constructor(page: Page) {
    this.page = page;
  }


  async openCart(): Promise<void> {

    // Header Cart link only
    const cartLink = this.page
      .locator('#header a[href="/view_cart"]')
      .first();


    await expect(cartLink)
      .toBeVisible({
        timeout: 15000
      });


    await cartLink.click({
      noWaitAfter: true
    });


    await this.page.waitForURL(
      /view_cart/,
      {
        waitUntil: 'domcontentloaded',
        timeout: 30000
      }
    );


    await expect(
      this.page.locator('#cart_info_table')
    ).toBeVisible({
      timeout: 15000
    });

  }


  async verifyProductInCart(
    productName: string
  ): Promise<void> {

    await expect(
      this.page
        .locator('#cart_info_table')
        .getByText(productName)
    ).toBeVisible({
      timeout: 10000
    });

  }

}