const Login = require('../pageobjects/login');
const Footer = require('../pageobjects/footer');


describe('Footer Tests', () => {
  beforeAll("Open browser", () =>{
		Login.open();
		Login.login();
	})

	it('Facebook link should be correct', () => {
		expect(Footer.facebookButton).toExist();
	});

	it('Twitter link should be correct', () => {
		expect(Footer.twitterButton).toExist();
	});

	it('LinkedIn link should be correct', () => {
		expect(Footer.linkedinButton).toExist();
	});

	it('The copyright year should be correct', () => {
		expect(Footer.copy).toHaveTextContaining("2021");
	});
});