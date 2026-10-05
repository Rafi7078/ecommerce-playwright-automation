import { Page, expect } from '@playwright/test';

export class PaymentPage {

  readonly page: Page;

  readonly nameOnCard;
  readonly cardNumber;
  readonly cvc;
  readonly expiryMonth;
  readonly expiryYear;
  readonly payButton;


  constructor(page: Page) {

    this.page = page;

    this.nameOnCard = page.locator('[data-qa="name-on-card"]');

    this.cardNumber = page.locator('[data-qa="card-number"]');

    this.cvc = page.locator('[data-qa="cvc"]');

    this.expiryMonth = page.locator('[data-qa="expiry-month"]');

    this.expiryYear = page.locator('[data-qa="expiry-year"]');

    this.payButton = page.locator('[data-qa="pay-button"]');

  }


  async verifyPaymentPageLoaded(): Promise<void>{

    await expect(
      this.page.getByRole('heading', {name:'Payment'})
    ).toBeVisible();

  }


  async completePayment(): Promise<void>{

    await this.nameOnCard.fill('QA Automation User');

    await this.cardNumber.fill('4111111111111111');

    await this.cvc.fill('311');

    await this.expiryMonth.fill('12');

    await this.expiryYear.fill('2028');


    await this.payButton.click();


    await this.page.waitForURL(/payment_done/);

  }


}