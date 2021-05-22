const Login = require('../pageobjects/login');
const Inventory = require('../pageobjects/inventory');
const Cart = require('../pageobjects/cart');
const inventory = require('../pageobjects/inventory');



describe('Cart Tests without login', () =>  {
	it('Should not enter the Inventory page if logged out', () => {
		Inventory.open();
		expect(Login.errorText).toHaveText("Epic sadface: You can only access '/inventory.html' when you are logged in.");
	});
});

describe('Cart Tests with login', () =>  {
  beforeAll("Open browser", () =>{
		Login.open();
		Login.login();
	})

	it('Add 3 items to cart', async () => {
		await Inventory.addItem(0);
		await Inventory.addItem(1);
		await Inventory.addItem(4);
		browser.pause(500);
		await expect(await (await Inventory.cartNumber).getText()).toBe("3");
	});

	it('Remove 2 items from cart', async () => {
		await Inventory.removeItem(0);
		await Inventory.removeItem(1);
		browser.pause(500);
		await expect(await (await Inventory.cartNumber).getText()).toBe("1");
	});

	it('Remove all from cart', () => {
		Inventory.removeItem(4);
		browser.pause(500);
		expect(Inventory.cartButton).not.toHaveChildren();
	});

	it('3 items added to cart are present in cart', () => {
		Inventory.addItem(0);
		Inventory.addItem(1);
		Inventory.addItem(4);
		browser.pause(1000);
		Inventory.cartButton.click();
		browser.pause(1000);
		expect(Cart.cartItems.length).toBe(3)
	});
	it('Remove an item in cart and return to inventory to check if the change propagated', () => {
		Inventory.removeItem(1);
		Cart.returnButton.click();
		expect(inventory.addItemSelector(1)).toExist();
	});
});