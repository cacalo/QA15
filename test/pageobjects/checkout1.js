const Page = require('./page');
const Inventory = require('../pageobjects/inventory');
const Cart = require('../pageobjects/cart');


class Checkout1 extends Page {

	get page () { return "checkout-step-one.html"}
	get url () { return super.url+this.page}

	get firstNameInput () { return $("#first-name")}
	get lastNameInput () { return $("#last-name")}
	get zipcodeInput () { return $("#postal-code")}

	get continueButton () { return $("#cancel")}
	get continueButton () { return $("#continue")}

	get errorText () { return $('.error-message-container h3') }



	getToCheckout(){
		Inventory.addItem(0);
		Inventory.addItem(1);
		Inventory.addItem(4);
		browser.pause(1000);
		Inventory.cartButton.click();
		browser.pause(500);
		Cart.checkoutButton.click()
		browser.pause(500);
	}

	completeFields(firstName,lastName,zipcode) {
		this.firstNameInput.setValue(firstName);
		this.lastNameInput.setValue(lastName);
		this.zipcodeInput.setValue(zipcode);
		this.continueButton.click();
	}

	open () {
		return super.open(this.page);
	}
}

module.exports = new Checkout1();
