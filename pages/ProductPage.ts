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


    await expect(searchBox)
      .toBeVisible({
        timeout: 30000
      });


    await searchBox.fill(productName);


    await this.page
      .locator('#submit_search')
      .click({
        noWaitAfter: true
      });


    // Verify that search URL has changed.
    // This does not wait for every ad/image/script to finish loading.
    await expect(this.page)
      .toHaveURL(
        /products\?search=/,
        {
          timeout: 30000
        }
      );


    // Verify actual search results are displayed.
    await expect(
      this.page.locator('.productinfo').first()
    ).toBeVisible({
      timeout: 30000
    });

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


    await viewButton.click({
      noWaitAfter: true
    });


    await expect(this.page)
      .toHaveURL(
        /product_details/,
        {
          timeout: 30000
        }
      );

  }


  async addToCart(productName: string): Promise<void> {

    const product = this.page
      .locator('.single-products')
      .filter({
        hasText: productName
      })
      .first();


    await expect(product)
      .toBeVisible();


    await product.hover();


    const addToCartButton = product
      .locator('.add-to-cart')
      .first();


    await expect(addToCartButton)
      .toBeVisible();


    await addToCartButton.click();


    await expect(
      this.page.getByText(
        'Your product has been added to cart'
      )
    ).toBeVisible({
      timeout: 10000
    });

  }

}