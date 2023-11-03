const { test, expect } = require("@playwright/test");

test("my demo test", async function ({ page }) {
  console.log("my demo test");
  expect(10).toBe(10);
});

test("my demo skip test", async function ({ page }) {
  console.log("my demo skip test");
  expect(10.0).toBe(10.0);
  expect("sayaji".includes("saya")).toBeTruthy();
});
test("my only test", async function ({ page }) {
  console.log("my only test");
  expect("sayaji").toBe("sayaji");
  expect("sharannya".includes("sharu")).toBeFalsy();
});
