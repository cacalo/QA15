const Page = require('./page');

class Inventory extends Page {

	get page () { return "inventory.html"}
	get url () { return super.url+this.page}

	get add () { return "#add-to-cart-"}
	get remove () { return "#remove-"}
	get items () { return ["sauce-labs-backpack","sauce-labs-bike-light","sauce-labs-bolt-t-shirt",
"sauce-labs-fleece-jacket", "sauce-labs-onesie", "test.allthethings()-t-shirt-(red)"]}
	get cartNumber () { return $('.shopping_cart_badge')}
	get cartButton () { return $('.shopping_cart_link')}

	addItemSelector (i=0) {	return $(this.add+this.items[i]) }
	removeItemSelector (i=0) { return $(this.remove+this.items[i]) }

	async addItem (i=0) {
		let item = await $(this.add+this.items[i])
		item.click()
	}

	async removeItem (i=0) {
		let item = await $(this.remove+this.items[i])
		item.click()
	}

	open () {
		return super.open(this.page);
	}
}

module.exports = new Inventory();