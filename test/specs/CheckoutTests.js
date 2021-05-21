const Login = require('../pageobjects/login');
const Inventory = require('../pageobjects/inventory');
const Cart = require('../pageobjects/cart');
const Checkout1 = require('../pageobjects/checkout1');
const Checkout2 = require('../pageobjects/checkout2');
const Checkout3 = require('../pageobjects/checkout3');

describe('Checkout Tests without login', () =>  {
	it('Should not enter the checkout1 page if logged out', () => {
		Checkout1.open();
		expect(Login.errorText).toHaveText("Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.");
	});
	it('Should not enter the checkout2 page if logged out', () => {
		Checkout2.open();
		expect(Login.errorText).toHaveText("Epic sadface: You can only access '/checkout-step-two.html' when you are logged in.");
	});
	it('Should not enter the checkout3 page if logged out', () => {
		Checkout3.open();
		expect(Login.errorText).toHaveText("Epic sadface: You can only access '/checkout-complete.html' when you are logged in.");
	});
});

describe('Cart Tests with login', () =>  {
  beforeAll("Get to Checkout 1", () =>{
		Login.open();
		Login.login();
		Checkout1.getToCheckout();
	})

	/*it('Continue without completing first name', () => {
		Checkout1.completeFields("","User","3200")
		expect(Checkout1.errorText).toHaveText("Error: First Name is required")
	});*/
	it('Continue without completing last name', () => {
		Checkout1.completeFields("Test","","3200")
		expect(Checkout1.errorText).toHaveText("Error: Last Name is required")
	});
	/*it('Continue without completing zip code', () => {
		Checkout1.completeFields("Test","User","")
		expect(Checkout1.errorText).toHaveText("Error: Postal Code is required")
	});*/
	it('Continue successfully to checkout 2', () => {
		Checkout1.completeFields("Test","User","32X0")
		expect(browser).toHaveUrl(Checkout2.url)
	});

	describe('Checkout 2 tests', () =>  {
		beforeAll("Get to Checkout 2", () =>{
			Login.open();
			Login.login();
			Checkout1.getToCheckout();
			Checkout1.completeFields("Test","User","3200")
		})

		it('Check that all items are in list', () => {
			expect(Checkout2.prices.length).toBe(parseInt(Inventory.cartNumber.getText()))
		});
		it('Check that "Item total" is correct', () => {
			console.log(Checkout2.sumProductsPrices() + " AAAAAAAAAAAAAA")
			expect(Checkout2.subtotal).toEqual(Checkout2.sumProductsPrices())
		});
		it('Check that "Tax" is correct', () => {
			expect(Checkout2.tax).toBe(Math.round(Checkout2.subtotal*.08*100)/100) //Round to 2 decimals
		});
		it('Check that "Total" is correct', () => {
			expect(Checkout2.total).toBe(Checkout2.subtotal+Checkout2.tax)
		});
	});

	describe('Checkout 3 tests', () =>  {
		beforeAll("Get to Checkout 3", () =>{
			Login.open();
			Login.login();
			Checkout1.getToCheckout();
			Checkout1.completeFields("Test","User","3200")
			Checkout2.finishButton.click();
		});
		it('Check that we are on checkout 3', () => {
			expect(browser).toHaveUrl(Checkout3.url);
		});
		it('Check that the "Thank you" message exists', () => {
			expect(Checkout3.thankYouMessage).toExist()
		});
		it('Check that "Back Home" button takes you home', () => {
			Checkout3.backHome.click();
			expect(browser).toHaveUrl(Inventory.url) //I cannot test it with href because it is a js button.
		});
	});
});