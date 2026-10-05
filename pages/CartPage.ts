import { Page, expect } from '@playwright/test';


export class CartPage {

    readonly page: Page;


    constructor(page: Page) {
        this.page = page;
    }


    async openCart(): Promise<void> {

        await this.page
            .locator('a[href="/view_cart"]')
            .first()
            .click();


        await this.page.waitForURL(/view_cart/);

    }


    async verifyProductInCart(productName: string): Promise<void> {

        await expect(
            this.page
                .locator('#cart_info_table')
                .getByText(productName)
        ).toBeVisible();

    }

}