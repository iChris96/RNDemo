const { reloadApp } = require("detox-expo-helpers");

describe("Writting a email and password", () => {
  beforeAll(async () => {
    await reloadApp();
  });

  it("should write a email and password", async () => {
    await element(by.id("emailInput")).tap();
    await element(by.id("emailInput")).typeText("chris@gmail.com");
    await expect(element(by.id("emailInput"))).toHaveText("chris@gmail.com");
  });

  it("should write a password", async () => {
    await element(by.id("passwordInput")).tap();
    await element(by.id("passwordInput")).typeText("abc123");
    await expect(element(by.id("passwordInput"))).toHaveText("abc123");
  });
});
