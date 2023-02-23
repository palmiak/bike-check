import { test, expect } from '@playwright/test';

test('Is bike available?', async ({ page }) => {
  await page.goto( process.env.URL );

  const bike = await page.getByTestId(process.env.SIZE);
  await expect(bike).toHaveClass(/js-nonSelectableVariation/);
});
