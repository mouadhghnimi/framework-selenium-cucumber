package com.e2eTest.automation.authentification.stepDefintions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.e2eTest.automation.authentification.pageObjects.AuthentificationPage;
import com.e2eTest.automation.util.Setup;
import com.e2eTest.automation.util.CommonMethods;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthentificationStepDefintion extends CommonMethods {

	public WebDriver driver;
	private AuthentificationPage authentificationpage = new AuthentificationPage(driver);
	private CommonMethods commonMethods = new CommonMethods();

	public AuthentificationStepDefintion() {

		driver = Setup.driver;
	}

	@Given("^je ouvre l application OrangeHRM$")
	public void jeOuvreLApplicationOrangeHRM() throws Throwable {

		commonMethods.readFromConfigFile();
		logger.info("je ouvre l application OrangeHRM$");

		String url = "https://opensource-demo.orangehrmlive.com/";
		driver.get(url);

	}

	@When("^je saisie userName$")
	public void jeSaisieUserName() throws Throwable {
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationpage.sendUserName();
		logger.info("^je saisie userName$");

	}

	@When("^je saisie le mot de passe$")
	public void jeSaisieLeMotDePasse() throws Throwable {
		authentificationpage.sendUserPassword();
		logger.info("^je saisie le mot de passe$");

	}

	@When("^je clique sur le bouton login$")
	public void jeCliqueSurLeBoutonLogin() throws Throwable {
		authentificationpage.clickLoginButton();
		logger.info("^je clique sur le bouton login$");

	}

	@Then("^redirection vers la page Home$")
	public void redirectionVersLaPageHome() throws Throwable {

		String welcome = AuthentificationPage.welcome.getText();
		Assert.assertTrue(welcome.contains("Welcome"));
		logger.info("^redirection vers la page Home$");

	}

}
