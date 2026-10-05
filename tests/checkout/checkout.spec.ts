import { test } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';


test.describe('Checkout Tests', () => {

  test('user should proceed to checkout successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);


    // Login
    await loginPage.navigate();

    await loginPage.login(
      process.env.TEST_EMAIL!,
      process.env.TEST_PASSWORD!
    );


    // Add product to cart
    await productPage.navigate();

    await productPage.searchProduct('Blue Top');

    await productPage.addToCart('Blue Top');


    // Popup already closed by Continue Shopping
    // Open cart from navigation
    await cartPage.openCart();

    await cartPage.verifyProductInCart('Blue Top');


    // Checkout
    await checkoutPage.proceedToCheckout();

    await checkoutPage.verifyCheckoutPageLoaded();

  });

});