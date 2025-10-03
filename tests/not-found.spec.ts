import { expect, test } from '@playwright/test'

// Not Found page
test.describe('404 Not Found Page', () => {
  test('should display 404 page for non-existent routes', async ({ page }) => {
    await page.goto('/en/this-page-does-not-exist')

    await page.waitForLoadState('networkidle')

    const bodyContent = await page.locator('body').textContent()
    expect(bodyContent).toBeTruthy()

    const notFoundText = page.getByText(/not found|404/i)
    await expect(notFoundText.first()).toBeVisible()
  })

  // Header and Footer display on Not Found page
  test('should still display header and footer on 404 page', async ({ page }) => {
    await page.goto('/en/non-existent-page')
    await page.waitForLoadState('networkidle')

    const header = page.locator('header, nav').first()
    await expect(header).toBeVisible()

    const footer = page.locator('footer').first()
    await expect(footer).toBeVisible()
  })
})
