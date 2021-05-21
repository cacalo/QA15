const Login = require('../pageobjects/login');
const Inventory = require('../pageobjects/inventory');


describe('Login Tests', () => {
  beforeAll("Open browser", () =>{
		Login.open();
	})

	it('Should not login with invalid credentials: Wrong username and wrong password', async () => {
		await Login.login('wrong_user', 'secret_sauce');
	  (await Login.loginErrorMessage).waitForDisplayed({ timeout: 1000 });
	});

	it('Should not login with invalid credentials: Right username and wrong password', async () => {
		await Login.login(undefined, 'wrong_password');
	  (await Login.loginErrorMessage).waitForDisplayed({ timeout: 1000 });
	});

	it('Should not login with invalid credentials: Wrong username and right password', async () => {
		await Login.login('wrong_user', undefined);
	  (await Login.loginErrorMessage).waitForDisplayed({ timeout: 1000 });
	});

	it('Should login with valid credentials', async () => {
		await Login.login();
    await expect(await browser.getUrl()).toBe(Inventory.url);
	});
});


