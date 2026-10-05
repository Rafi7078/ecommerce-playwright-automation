import { Page, expect } from '@playwright/test';


export class CheckoutPage {

  readonly page: Page;


  constructor(page: Page) {
    this.page = page;
  }


  async proceedToCheckout(): Promise<void> {

    await this.page
      .getByText('Proceed To Checkout')
      .click();

  }


  async verifyCheckoutPageLoaded(): Promise<void> {

    await expect(
      this.page.getByText('Address Details')
    ).toBeVisible();

  }

  async placeOrder(): Promise<void>{

    await this.page
      .getByRole('link', {name:'Place Order'})
      .click();


    await this.page.waitForURL(/payment/);

}

}