const Login = require('../pageobjects/login');
const Products = require('../pageobjects/products');


describe('Cart Tests without login', () =>  {
	it('Should not enter the products page if logged out', async () => {
		await Products.open();
		await expect(await Login.loggedOutInventoryErrorMessage).toExist();
		await browser.pause(5000)
		//await browser.close();
	});
});

describe('Cart Tests with login', () =>  {
  beforeAll("Open browser", () =>{
		Login.open();
		Login.login();
	})

	it('Add 3 items to cart', async () => {
		await Products.addItem(0);
		await Products.addItem(1);
		await Products.addItem(4);
		await browser.pause(500);
		await expect(await (await Products.cartNumber).getText()).toBe("3");
	});

	it('Remove 2 items from cart', async () => {
		await Products.removeItem(0);
		await Products.removeItem(1);
		await browser.pause(500);
		await expect(await (await Products.cartNumber).getText()).toBe("1");
	});

	it('Remove all from cart', async () => {
		await Products.removeItem(4);
		await browser.pause(500);
		await expect(await (await Products.cartNumber).not.toExist()).toBe("1");
	});
});