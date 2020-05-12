const { reloadApp } = require("detox-expo-helpers");

describe("Writting the signUp form", () => {
  beforeAll(async () => {
    await reloadApp();
  });

  it("should navigate to register", async () => {
    await element(by.id("goToRegister")).tap();
  });

  it("should write a email", async () => {
    await element(by.id("signUp_email_input")).tap();
    await element(by.id("signUp_email_input")).typeText("chris@gmail.com");
    await expect(element(by.id("signUp_email_input"))).toHaveText(
      "chris@gmail.com"
    );
  });

  it("should write a password", async () => {
    await element(by.id("signUp_password_input")).tap();
    await element(by.id("signUp_password_input")).typeText("abc123");
    await expect(element(by.id("signUp_password_input"))).toHaveText("abc123");
  });

  it("should write a repeat password", async () => {
    await element(by.id("signUp_repeat_password_input")).tap();
    await element(by.id("signUp_repeat_password_input")).typeText("abc123");
    await expect(element(by.id("signUp_repeat_password_input"))).toHaveText(
      "abc123"
    );
  });
});
