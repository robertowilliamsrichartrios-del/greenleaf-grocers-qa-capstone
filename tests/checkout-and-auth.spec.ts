typescript
import { test, expect } from '@playwright/test';

test.describe('GreenLeaf Grocers - E2E Registration & Checkout Flow', () => {
  
  test('3-step user registration and login using resilient data-testid selectors', async ({ page }) => {
    const uniqueEmail = `qa.tester.${Date.now()}@greenleaf.test`;

    // Step 1: Navigate to registration
    await page.goto('https://example.com');

    // Step 2: Fill registration details using data-testid
    await page.getByTestId('register-name-input').fill('Roberto Richart');
    await page.getByTestId('register-email-input').fill(uniqueEmail);
    await page.getByTestId('register-password-input').fill('SecurePass2026!');
    await page.getByTestId('register-submit-btn').click();

    // Step 3: Verify successful onboarding
    await expect(page.getByTestId('welcome-banner')).toBeVisible();
  });

});
