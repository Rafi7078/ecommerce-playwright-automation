import { Page, expect } from '@playwright/test';


export class RegisterPage {

  readonly page: Page;

  readonly nameInput;
  readonly emailInput;
  readonly signupButton;


  constructor(page: Page) {

    this.page = page;

    this.nameInput = page.locator(
      'input[data-qa="signup-name"]'
    );

    this.emailInput = page.locator(
      'input[data-qa="signup-email"]'
    );

    this.signupButton = page.locator(
      'button[data-qa="signup-button"]'
    );

  }


  async navigate(): Promise<void> {

    await this.page.goto('/login');

  }


  async signup(
    name: string,
    email: string
  ): Promise<void> {


    await this.nameInput.fill(name);

    await this.emailInput.fill(email);

    await this.signupButton.click();

  }


  async verifyAccountInformationPage(): Promise<void> {

    await expect(this.page)
      .toHaveURL(/signup/);

  }


}