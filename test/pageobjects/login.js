const Page = require('./page');

class Login extends Page {

	get inputUsername () { return $('#user-name') }
	get inputPassword () { return $('#password') }
	get btnSubmit () { return $('#login-button') }
	get errorText () { return $('.error-message-container h3') }
	get loginErrorMessage () { return $("h3=Epic sadface: Username and password do not match any user in this service")}
	get loggedOutInventoryErrorMessage () { return $("h3=Epic sadface: You can only access '/inventory.html' when you are logged in.")}


	get correctUsername () { return "standard_user" }
	get correctPassword () { return "secret_sauce" }

	async login (username = this.correctUsername, password = this.correctPassword) {
		await (await this.inputUsername).setValue(username);
		await (await this.inputPassword).setValue(password);
		await (await this.btnSubmit).click();
	}

	open () {
		return super.open("");
	}
}

module.exports = new Login();
