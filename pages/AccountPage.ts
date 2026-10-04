
import { Page, expect } from '@playwright/test';

export class AccountPage {


  readonly page: Page;


  constructor(page: Page) {

    this.page = page;

  }


  async verifyLoggedInUser(
    username: string
  ): Promise<void> {


    await expect(
  this.page.getByText(`Logged in as ${username}`)
).toBeVisible();


  }


  async logout(): Promise<void> {

  await this.page
    .getByText('Logout')
    .click();

}


}