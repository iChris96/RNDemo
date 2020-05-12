const { reloadApp } = require("detox-expo-helpers");

describe("Writting the signIn form", () => {
  beforeAll(async () => {
    await reloadApp();
  });

  it("should write a email", async () => {
    await element(by.id("signIn_email_input")).tap();
    await element(by.id("signIn_email_input")).typeText("chris@gmail.com");
    await expect(element(by.id("signIn_email_input"))).toHaveText(
      "chris@gmail.com"
    );
  });

  it("should write a password", async () => {
    await element(by.id("signIn_password_input")).tap();
    await element(by.id("signIn_password_input")).typeText("abc123");
    await expect(element(by.id("signIn_password_input"))).toHaveText("abc123");
  });
});
