const Page = require('./page');

class Checkout2 extends Page {

	get page () { return "checkout-step-two.html"}
	get url () { return super.url+this.page}

	get prices () { return $$(".inventory_item_price")}

	get subtotal () {
		const subtotal = $(".summary_subtotal_label").getText();
		const parsedSubtotal = subtotal.slice(13)
		return parseFloat(parsedSubtotal)
	}

	get tax () {
		const tax = $(".summary_tax_label").getText();
		const parsedTax = tax.slice(6)
		return parseFloat(parsedTax);
	}

	get total () {
		const total = $(".summary_total_label").getText();
		const parsedTotal = total.slice(8)
		return parseFloat(parsedTotal)
	}

	get finishButton () { return $("#finish")}

	sumProductsPrices (){
		const prices = this.prices;
		let total = 0;
		prices.forEach(price => {
			const parsedPrice = parseFloat(price.getText().slice(1))
			total += parsedPrice;
		console.log("El total es " + total)
		return total;
		});
	}

	open () {
		return super.open(this.page);
	}
}

module.exports = new Checkout2();
