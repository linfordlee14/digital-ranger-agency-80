import { expect, test } from "@playwright/test";

test("shows required-field feedback before advancing", async ({ page }) => {
  await page.goto("/assessment?source=playwright");
  await page.getByRole("button", { name: "Continue to operations" }).click();

  await expect(page.getByText("Please review the highlighted fields before continuing.")).toBeVisible();
  await expect(page.getByText("Enter your business name.")).toBeVisible();
  await expect(page.getByText("Enter your industry or category.")).toBeVisible();
});

test("supports keyboard navigation and fits a mobile viewport", async ({ page }) => {
  await page.setViewportSize({ height: 667, width: 375 });
  await page.goto("/assessment?source=playwright");

  const businessName = page.getByLabel("Business name");
  await businessName.focus();
  await page.keyboard.press("Tab");
  await expect(page.getByLabel("Industry or category")).toBeFocused();

  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
