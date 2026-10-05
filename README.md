# E-Commerce Playwright Automation Framework

A production-like end-to-end test automation project built with **Playwright**, **TypeScript**, and the **Page Object Model (POM)** design pattern.

This project automates major user journeys of the [Automation Exercise](https://automationexercise.com/) demo e-commerce application, including authentication, product search, cart operations, checkout, payment, and complete order placement.

---

## Project Overview

The main goal of this project is to demonstrate practical QA Automation skills using a real web application workflow.

The framework covers:

- Smoke Testing
- Login Testing
- Product Search
- Product Details Verification
- Add to Cart
- Cart Verification
- Checkout
- Payment
- Complete End-to-End Purchase Flow

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Playwright | Web automation |
| TypeScript | Programming language |
| Node.js | Runtime environment |
| Page Object Model | Framework design pattern |
| dotenv | Environment variable management |
| Git | Version control |
| GitHub | Repository and Pull Request workflow |
| GitHub Actions | CI workflow |
| Microsoft Edge | Local browser execution |
| Chromium | CI browser execution |

---

## Test Coverage

The framework currently contains **8 automated tests**.

| Test | Coverage |
|---|---|
| Smoke Test | Verify application loads successfully |
| Invalid Login | Verify incorrect credentials show an error |
| Valid Login | Verify registered user can log in |
| Product Search | Search and verify a product |
| Product Details | Verify product information |
| Add to Cart | Add product and verify it in cart |
| Checkout | Complete cart-to-checkout flow |
| Payment | Complete full order and payment flow |

### Current Test Result

```text
8 passed
```

---

## End-to-End Flow

The main E2E scenario automates the following customer journey:

```text
Login
  ↓
Open Products
  ↓
Search Product
  ↓
Add Product to Cart
  ↓
Continue Shopping
  ↓
Open Cart
  ↓
Verify Product
  ↓
Proceed to Checkout
  ↓
Verify Checkout Page
  ↓
Place Order
  ↓
Payment Page
  ↓
Enter Demo Payment Information
  ↓
Pay and Confirm Order
  ↓
Order Placed Successfully
```

---

## Project Structure

```text
ecommerce-playwright-automation/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   ├── RegisterPage.ts
│   ├── AccountPage.ts
│   ├── ProductPage.ts
│   ├── ProductDetailsPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── PaymentPage.ts
│
├── tests/
│   ├── smoke/
│   │   └── home.spec.ts
│   │
│   ├── auth/
│   │   ├── login.spec.ts
│   │   └── valid-login.spec.ts
│   │
│   ├── product/
│   │   ├── search-product.spec.ts
│   │   └── product-details.spec.ts
│   │
│   ├── cart/
│   │   └── add-to-cart.spec.ts
│   │
│   └── checkout/
│       ├── checkout.spec.ts
│       └── payment.spec.ts
│
├── test-data/
│   └── users.json
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

---

## Page Object Model

This project follows the **Page Object Model (POM)** pattern.

Instead of placing all locators and actions directly inside test files, page-specific functionality is stored inside reusable Page Object classes.

Example:

```ts
const productPage = new ProductPage(page);

await productPage.navigate();

await productPage.searchProduct('Blue Top');

await productPage.addToCart('Blue Top');
```

This makes the automation framework:

- Easier to maintain
- More reusable
- Easier to debug
- Cleaner and more scalable

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Rafi7078/ecommerce-playwright-automation.git
```

### 2. Open the project

```bash
cd ecommerce-playwright-automation
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install Playwright browsers if required

```bash
npx playwright install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
TEST_EMAIL=your_test_account_email
TEST_PASSWORD=your_test_account_password
```

Do not commit the `.env` file to GitHub.

The `.env` file should be included in `.gitignore`.

---

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run all tests with browser visible

```bash
npx playwright test --headed --workers=1
```

This is useful for visually observing the complete automation flow.

### Run a specific test

Example:

```bash
npx playwright test tests/checkout/payment.spec.ts
```

### Run a specific test in headed mode

```bash
npx playwright test tests/checkout/payment.spec.ts --headed
```

### TypeScript validation

```bash
npx tsc --noEmit
```

---

## HTML Test Report

After running the tests, open the Playwright HTML report using:

```bash
npx playwright show-report
```

The report provides information about:

- Passed tests
- Failed tests
- Execution time
- Error details
- Screenshots and traces when available

---

## Reliability Improvements

Several improvements were implemented to make the automation more stable on the public demo website.

These include:

- Waiting for visible elements instead of fixed delays
- Using `domcontentloaded` where appropriate
- Handling the Add to Cart modal
- Automatically clicking `Continue Shopping`
- Waiting for the cart modal to close before navigating
- Using stable locators such as `data-qa`
- Using specific product locators
- Running tests sequentially with one worker
- Retry support for unstable public-site behavior
- Environment-based configuration

---

## Example Cart Flow

```ts
await productPage.searchProduct('Blue Top');

await productPage.addToCart('Blue Top');

await cartPage.openCart();

await cartPage.verifyProductInCart('Blue Top');
```

The `addToCart()` method handles the product-added modal and closes it using the **Continue Shopping** button before the Cart page is opened.

---

## Example Checkout and Payment Flow

```ts
await checkoutPage.proceedToCheckout();

await checkoutPage.placeOrder();

await paymentPage.verifyPaymentPageLoaded();

await paymentPage.completePayment();

await paymentPage.verifyOrderPlaced();
```

Only demo payment information is used because Automation Exercise is a testing/demo application. Real payment information should never be stored in automation code.

---

## Git Workflow

The project was developed using a feature-branch workflow.

Example branches:

```text
main
feat/framework-foundation
feat/authentication
feat/auth-valid-login
feat/cart-automation
feat/checkout-automation
```

Features were developed separately and merged into `main` through Pull Requests.

This provides practical experience with:

- Feature branches
- Commits
- Push/Pull
- Pull Requests
- Merge workflow
- Repository synchronization

---

## CI/CD

The project includes a GitHub Actions workflow:

```text
.github/workflows/playwright.yml
```

This allows Playwright tests to be executed automatically in a CI environment.

---

## Key Learning Outcomes

Through this project, I gained practical experience with:

- Playwright automation
- TypeScript
- Page Object Model
- UI automation
- End-to-end testing
- Smoke testing
- Authentication testing
- Product and cart automation
- Checkout automation
- Test data management
- Environment variables
- Locator debugging
- Handling dynamic UI elements
- Test stabilization
- Git and GitHub workflow
- Pull Requests
- Automated HTML reporting
- Basic CI/CD integration

---

## Challenges Solved

During development, several real-world automation challenges were handled, including:

### Strict Mode Locator Issues

Duplicate text elements caused Playwright strict-mode errors.

The issue was solved by using more specific locators such as:

```ts
page.getByRole('heading', { name: 'Payment' })
```

### Add to Cart Modal

The cart modal blocked navigation elements after adding a product.

The framework now:

```text
Add Product
→ Wait for Modal
→ Click Continue Shopping
→ Wait for Modal to Close
→ Open Cart
```

### Public Website Loading Issues

The demo website sometimes loads third-party ads and resources slowly.

The framework was stabilized using:

```ts
waitUntil: 'domcontentloaded'
```

and condition-based waits instead of unnecessary fixed delays.

---

## Future Improvements

Possible future enhancements include:

- API testing
- Custom Playwright fixtures
- Data-driven testing
- Multiple browser execution
- Allure reporting
- Visual regression testing
- Accessibility testing
- Performance testing
- Docker support
- Advanced CI/CD pipelines

---

## Application Under Test

**Automation Exercise**

https://automationexercise.com/

The website is a public demo application used only for automation practice.

---

## Repository

GitHub Repository:

https://github.com/Rafi7078/ecommerce-playwright-automation

---

## Author

**Salman Rafi**

QA Automation Project  
Playwright + TypeScript

---

## Project Status

**Completed**

```text
Automated Tests: 8
Result: 8 Passed
Framework: Playwright + TypeScript
Architecture: Page Object Model
E2E Purchase Flow: Completed
GitHub Workflow: Completed
```

---

⭐ If you find this project useful, feel free to explore the repository.
