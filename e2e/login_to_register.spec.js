const { reloadApp } = require("detox-expo-helpers");

describe("Writting the register form", () => {
  beforeAll(async () => {
    await reloadApp();
  });

  it("should navigate to register", async () => {
    await element(by.id("goToRegister")).tap();
  });

  it("should fill the register data", async () => {
    await element(by.id("signUp_email_input")).tap();
    await element(by.id("signUp_email_input")).typeText("chris@gmail.com");
    await element(by.id("signUp_password_input")).tap();
    await element(by.id("signUp_password_input")).typeText("abc123");
    await element(by.id("signUp_repeat_password_input")).tap();
    await element(by.id("signUp_repeat_password_input")).typeText("abc123");

    await expect(element(by.id("signUp_email_input"))).toHaveText(
      "chris@gmail.com"
    );
    await expect(element(by.id("signUp_password_input"))).toHaveText("abc123");
    await expect(element(by.id("signUp_repeat_password_input"))).toHaveText(
      "abc123"
    );
  });
});
