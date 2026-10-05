import { Page, expect } from '@playwright/test';

export class ProductPage {

  readonly page: Page;


  constructor(page: Page) {
    this.page = page;
  }


async navigate(): Promise<void> {


  await this.page.goto('/products', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });


  await expect(
    this.page.locator('#search_product')
  ).toBeVisible({
    timeout: 30000
  });


}


  async verifyProductPageLoaded(): Promise<void> {

    await expect(this.page)
      .toHaveTitle(/Automation Exercise/i);

  }


async searchProduct(productName: string): Promise<void> {


  const searchBox = this.page.locator('#search_product');


  await searchBox.waitFor({
    state: 'visible'
  });


  await searchBox.fill(productName);


  await this.page
    .locator('#submit_search')
    .click({
      noWaitAfter: true
    });


  await this.page.waitForURL(
    /products\?search=/,
    {
      timeout: 60000
    }
  );


  await expect(
    this.page.locator('.productinfo')
  ).toBeVisible();

}

  async verifyProductVisible(productName: string): Promise<void> {

    const product = this.page
      .locator('.productinfo')
      .filter({
        hasText: productName
      })
      .first();


    await expect(product)
      .toBeVisible();

  }


  async viewProduct(productName: string): Promise<void> {


    const product = this.page
      .locator('.single-products')
      .filter({
        hasText: productName
      })
      .first();


    await expect(product)
      .toBeVisible();


    await product
      .scrollIntoViewIfNeeded();


    const viewButton = this.page
      .locator('a[href*="product_details"]')
      .first();


    await expect(viewButton)
      .toBeVisible();


    await viewButton.click();


    await this.page
      .waitForURL(/product_details/);

  }


 async addToCart(productName: string): Promise<void> {

  const product = this.page
    .locator('.single-products')
    .filter({
      hasText: productName
    })
    .first();


  await expect(product).toBeVisible();


  await product.hover();


  await product
    .locator('.add-to-cart')
    .first()
    .click();


  await this.page
    .getByText('Your product has been added to cart')
    .waitFor();


}


}