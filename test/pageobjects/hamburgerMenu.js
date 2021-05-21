const Page = require('./page');

class Hamburger extends Page {

	get hamburgerOpenButton () { return "#react-burger-menu-btn"}
	get hamburgerCloseButton () { return "#react-burger-cross-btn"}

	get hamburgerMenuWrapper () { return "#bm-menu-wrap"}

	get allItemsButton () { return "#inventory_sidebar_link"}
	get aboutButton () { return "#about_sidebar_link"}
	get logoutButton () { return "#logout_sidebar_link"}
	get resetAppButton () { return "#reset_sidebar_link"}

	open () {
		this.hamburgerOpenButton.click();
	}

	close (){
		this.hamburgerCloseButton.click();
	}
}

module.exports = new Hamburger();