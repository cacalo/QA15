module.exports = class Page {

	get url () { return "https://www.saucedemo.com/"}

	open (path) {
		return browser.url(`https://www.saucedemo.com/${path}`)
	}
}
