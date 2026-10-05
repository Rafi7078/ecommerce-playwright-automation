import { test } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';


test.describe('Product Tests', () => {


  test('should search product successfully', async ({ page }) => {


    const productPage = new ProductPage(page);


    await page.goto('/');


    await productPage.navigate();


    await productPage.verifyProductPageLoaded();


    await productPage.searchProduct('Blue Top');


    await productPage.verifyProductVisible('Blue Top');


  });


});