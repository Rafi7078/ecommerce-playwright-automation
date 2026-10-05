import { test } from '@playwright/test';
import { ProductPage } from '../../pages/ProductPage';
import { ProductDetailsPage } from '../../pages/ProductDetailsPage';


test.describe('Product Details Tests', () => {


  test('should open product details successfully', async ({ page }) => {


    const productPage = new ProductPage(page);

    const detailsPage = new ProductDetailsPage(page);



    await page.goto('/');


    await productPage.navigate();


    await productPage.searchProduct('Blue Top');


    await productPage.viewProduct('Blue Top');


    await detailsPage.verifyProductDetailsPage();


    await detailsPage.verifyProductName('Blue Top');


    await detailsPage.verifyAvailability();


  });


});