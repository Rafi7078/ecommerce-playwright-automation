import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import users from '../../test-data/users.json';


test.describe('Login Tests', () => {

  test('should show error for invalid login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
      users.invalidUser.email,
      users.invalidUser.password
    );

    await loginPage.verifyLoginError();

  });

});