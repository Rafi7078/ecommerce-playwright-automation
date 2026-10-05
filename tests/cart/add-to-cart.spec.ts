import { test } from '@playwright/test';

import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';


test.describe('Cart Tests', () => {

  test('should add product to cart successfully', async ({ page }) => {

    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);


    await productPage.navigate();


    await productPage.searchProduct('Blue Top');


    await productPage.verifyProductVisible('Blue Top');


    await productPage.addToCart('Blue Top');


    // Popup is already closed by Continue Shopping
    // Now open Cart from navigation
    await cartPage.openCart();


    await cartPage.verifyProductInCart('Blue Top');

  });

});