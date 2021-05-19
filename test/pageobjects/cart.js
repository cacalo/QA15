const Page = require('./page');

class Cart extends Page {

	get page () { return "cart.html"}
	get url () { return super.url+this.page}

	open () {
		return super.open(this.page);
	}
}

module.exports = new Cart();
