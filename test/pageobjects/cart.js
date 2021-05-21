const Page = require('./page');

class Cart extends Page {

	get page () { return "cart.html"}
	get url () { return super.url+this.page}

	get cartItems () { return $$(".cart_item")}
	get checkoutButton () { return $("#checkout")}
	get returnButton() {return $("#continue-shopping")}

	open () {
		return super.open(this.page);
	}
}

module.exports = new Cart();
