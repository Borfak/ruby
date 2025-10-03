import { expect, test } from '@playwright/test'

test.describe('Home Page', () => {
  test('should load the home page successfully', async ({ page }) => {
    await page.goto('/en')

    await page.waitForLoadState('networkidle')

    expect(page.url()).toContain('/en')

    const bodyContent = await page.locator('body').textContent()
    expect(bodyContent).toBeTruthy()
  })

  test('should display header and footer', async ({ page }) => {
    await page.goto('/en')
    await page.waitForLoadState('networkidle')

    const header = page.locator('header, nav').first()
    await expect(header).toBeVisible()

    const footer = page.locator('footer').first()
    await expect(footer).toBeVisible()
  })

  test('should navigate to instruments page', async ({ page }) => {
    await page.goto('/en')
    await page.waitForLoadState('networkidle')

    const instrumentsLink = page.getByRole('link', { name: /instruments/i })

    if ((await instrumentsLink.count()) > 0) {
      await instrumentsLink.first().click()
      await page.waitForLoadState('networkidle')

      expect(page.url()).toContain('/instruments')
    }
  })
})
