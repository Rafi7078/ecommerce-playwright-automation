import { Page, expect } from '@playwright/test';

export class LoginPage {

  readonly page: Page;

  readonly emailInput;
  readonly passwordInput;
  readonly loginButton;
  readonly errorMessage;


  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');

    this.errorMessage = page.getByText('Your email or password is incorrect!');
  }


  async navigate(): Promise<void> {
    await this.page.goto('/login');
  }


  async login(email: string, password: string): Promise<void> {

    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();

  }


  async verifyLoginPageLoaded(): Promise<void> {
    await expect(this.page).toHaveTitle(/Automation Exercise/i);
  }


  async verifyLoginError(): Promise<void> {

    await expect(this.errorMessage)
      .toContainText('Your email or password is incorrect!');

  }

}