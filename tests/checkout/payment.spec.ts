import { test } from '@playwright/test';

import { LoginPage } from '../../pages/LoginPage';
import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { PaymentPage } from '../../pages/PaymentPage';


test('user should complete payment successfully', async ({page})=>{


const loginPage = new LoginPage(page);
const productPage = new ProductPage(page);
const cartPage = new CartPage(page);
const checkoutPage = new CheckoutPage(page);
const paymentPage = new PaymentPage(page);



await loginPage.navigate();

await loginPage.login(
  process.env.TEST_EMAIL!,
  process.env.TEST_PASSWORD!
);



await productPage.navigate();

await productPage.searchProduct('Blue Top');


await productPage.addToCart('Blue Top');



await cartPage.openCart();


await checkoutPage.proceedToCheckout();


await checkoutPage.placeOrder();



await paymentPage.verifyPaymentPageLoaded();


await paymentPage.completePayment();



});