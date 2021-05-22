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

	it('Should not login with invalid credentials: Empty username and right password', async () => {
		await (await Login.inputUsername).clearValue();
		await (await Login.inputPassword).setValue("anyPassword");
	  (await Login.loginEmptyUsernameMessage).waitForDisplayed({ timeout: 1000 });
	});

	it('Should not login with invalid credentials: Right username and empty password', async () => {
		await (await Login.inputUsername).setValue("anyUsername");
		await (await Login.inputPassword).clearValue();
	  (await Login.loginEmptyPasswordMessage).waitForDisplayed({ timeout: 1000 });
	});

	it('Should not login a locked out user', async () => {
		await Login.login('locked_out_user', undefined);
	  (await Login.loginLockedUser).waitForDisplayed({ timeout: 1000 });
	});

	it('Should login with valid credentials', async () => {
		await Login.login();
    await expect(await browser.getUrl()).toBe(Inventory.url);
	});
});


