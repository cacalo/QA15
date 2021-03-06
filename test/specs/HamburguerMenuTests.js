const Login = require('../pageobjects/login');
const HamburgerMenu = require('../pageobjects/hamburgerMenu');
const Inventory = require('../pageobjects/inventory');

describe('Hamburguer Menu Tests', () => {
  beforeAll("Open browser", () =>{
		Login.open();
		Login.login();
		browser.pause(1000)
	})

	it("The hamburger menu should appear hidden", () => {
		expect(HamburgerMenu.hamburgerMenuWrapper).toHaveAttr("hidden")
	});

	it("The hamburger icon should open the hamburger menu", () => {
		HamburgerMenu.hamburgerOpenButton.click();
		browser.pause(1000);
		expect(HamburgerMenu.hamburgerMenuWrapper).not.toHaveAttr("hidden")
	});

	it("The hamburger menu X button should close the hamburger menu", () => {
		HamburgerMenu.hamburgerCloseButton.click();
		expect(HamburgerMenu.hamburgerMenuWrapper).toHaveAttr("hidden")
	});

	it('"All items" link should go to the inventory', () => {
		HamburgerMenu.hamburgerOpenButton.click();
		browser.pause(1000)
		HamburgerMenu.allItemsButton.click();
		expect(browser.getUrl()).toBe(Inventory.url)
	});

	it("'About' link should take you to the developer's site", () => {
		expect(HamburgerMenu.aboutButton).toHaveHref("https://saucelabs.com/")
	});

	it('"Reset app state" button should remove everything from the cart', () => {
		Inventory.addItem(0);
		Inventory.addItem(1);
		browser.pause(1000);
		HamburgerMenu.resetAppButton.click();
		expect(Inventory.cartButton).not.toHaveChildren();
	});

	it('"Logout" link should go to the inventory', () => {
		HamburgerMenu.logoutButton.click();
		expect(browser).toHaveUrl(Login.url)
	});

});