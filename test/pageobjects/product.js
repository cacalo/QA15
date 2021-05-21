const Inventory = require('./inventory');
const Page = require('./page');

class Product extends Page {

	get page () { return "inventory.html"}
	get url () { return super.url+this.page}

	get cartNumber () { return $('.shopping_cart_badge')}
	get cartButton () { return $('.shopping_cart_link')}


	open () {
		return super.open(this.page);
	}
}

module.exports = new Product();