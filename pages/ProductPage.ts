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

    const searchButton = this.page.locator('#submit_search');


    await expect(searchBox)
      .toBeVisible({
        timeout: 30000
      });


    await searchBox.fill(productName);


    await searchButton.click({
      noWaitAfter: true
    });


    const searchedProduct = this.page
      .locator('.productinfo')
      .filter({
        hasText: productName
      })
      .first();


    await expect(searchedProduct)
      .toBeVisible({
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
      .toBeVisible({
        timeout: 10000
      });

  }


  async viewProduct(productName: string): Promise<void> {

    const product = this.page
      .locator('.single-products')
      .filter({
        hasText: productName
      })
      .first();


    await expect(product)
      .toBeVisible({
        timeout: 10000
      });


    await product.scrollIntoViewIfNeeded();


    const viewButton = this.page
      .locator('a[href*="product_details"]')
      .first();


    await expect(viewButton)
      .toBeVisible({
        timeout: 10000
      });


    await viewButton.click({
      noWaitAfter: true
    });


    await expect(
      this.page.locator('.product-information')
    ).toBeVisible({
      timeout: 30000
    });

  }


  async addToCart(productName: string): Promise<void> {

    const product = this.page
      .locator('.single-products')
      .filter({
        hasText: productName
      })
      .first();


    await expect(product)
      .toBeVisible({
        timeout: 15000
      });


    await product.scrollIntoViewIfNeeded();


    await product.hover();


    // Use only the visible Add to Cart button
    const addToCartButton = product
      .locator('a.add-to-cart:visible')
      .first();


    await expect(addToCartButton)
      .toBeVisible({
        timeout: 10000
      });


    await addToCartButton.click();


    // Add-to-cart modal
    const cartModal = this.page.locator('#cartModal');


    await expect(cartModal)
      .toBeVisible({
        timeout: 15000
      });


    await expect(
      cartModal.getByText(
        'Your product has been added to cart'
      )
    ).toBeVisible({
      timeout: 10000
    });


    // Continue Shopping button
    const continueShoppingButton = cartModal
      .getByRole('button', {
        name: 'Continue Shopping'
      });


    await expect(continueShoppingButton)
      .toBeVisible({
        timeout: 10000
      });


    await continueShoppingButton.click();


    // Important:
    // wait until modal is completely closed
    await expect(cartModal)
      .toBeHidden({
        timeout: 15000
      });

  }

}