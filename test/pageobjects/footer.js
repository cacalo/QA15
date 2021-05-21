const Page = require('./page');

class Footer extends Page {

	get twitterButton () { return $(".social_twitter")}
	get facebookButton () { return $(".social_facebook")}
	get linkedinButton () { return $(".social_linkedin")}

	get copy () { return $(".footer_copy")}
}

module.exports = new Footer();
