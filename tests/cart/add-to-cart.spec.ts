import { test } from '@playwright/test';

import { ProductPage } from '../../pages/ProductPage';
import { CartPage } from '../../pages/CartPage';



test.describe('Cart Tests',()=>{


test('should add product to cart successfully', async({page})=>{


const productPage = new ProductPage(page);
const cartPage = new CartPage(page);



await page.goto('/');


await productPage.navigate();


await productPage.searchProduct('Blue Top');


await productPage.verifyProductVisible('Blue Top');


await productPage.addToCart('Blue Top');


// wait popup
await page.getByText('View Cart').click();


await cartPage.verifyProductInCart('Blue Top');


});


});