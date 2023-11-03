const { test, expect } = require("@playwright/test");

test("my demo test", async function ({ page }) {
  console.log("my demo test");
});

test.skip("my demo skip test", async function ({ page }) {
  console.log("my demo skip test");
});
test.only("my only test", async function ({ page }) {
  console.log("my only test");
});
