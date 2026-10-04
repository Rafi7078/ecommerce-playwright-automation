import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AccountPage } from '../../pages/AccountPage';


test.describe('Valid Login Tests', () => {


  test('user should login successfully', async ({ page }) => {


    const loginPage = new LoginPage(page);

    const accountPage = new AccountPage(page);

    

    await loginPage.navigate();


    await loginPage.login(
      process.env.TEST_EMAIL!,
      process.env.TEST_PASSWORD!
    );


    await accountPage.verifyLoggedInUser(
      'QA Automation User'
    );


  });


});