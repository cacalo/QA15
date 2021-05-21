const Page = require('./page');

class Checkout3 extends Page {

	get page () { return "checkout-complete.html"}
	get url () { return super.url+this.page}

	get thankYouMessage () { return $("h2=THANK YOU FOR YOUR ORDER")}
	get backHome () { return $("#back-to-products")}

	open () {
		return super.open(this.page);
	}
}

module.exports = new Checkout3();
