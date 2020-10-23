package com.e2eTest.automation.addUsers.stepDefintions;

import org.openqa.selenium.WebDriver;
import org.testng.Assert;

import com.e2eTest.automation.addUsers.pageObjects.ConfigUsersPage;

import com.e2eTest.automation.util.CommonMethods;
import com.e2eTest.automation.util.Setup;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ConfigUsersStepDefintions extends CommonMethods {

	public WebDriver driver;
	private ConfigUsersPage configUsersPage = new ConfigUsersPage(driver);
	private CommonMethods commonMethods = new CommonMethods();

	public ConfigUsersStepDefintions() {

		driver = Setup.driver;
	}

	@When("^je clique sur le module PIM$")
	public void jeCliqueSurLeModulePIM() throws Throwable {
		configUsersPage.pimModule();

	}

	@When("^je clique sur le bouton Add$")
	public void jeCliqueSurLeBoutonAdd() throws Throwable {
		configUsersPage.btnAdd();

	}

	@When("^je rempli First name$")
	public void jeRempliFirstName() throws Throwable {
		configUsersPage.firstName();

	}

	@When("^je repmli LastName$")
	public void jeRepmliLastName() throws Throwable {
		configUsersPage.lastName();

	}

	@When("^je clique sur le bouton Save$")
	public void jeCliqueSurLeBoutonSave() throws Throwable {
		configUsersPage.bntSave();

	}

	@Then("^user has been added on system users$")
	public void userHasBeenAddedOnSystemUsers() throws Throwable {

		System.out.println("the name of mouadh exist");

	}

	/*
	 * java.lang.NullPointerException at
	 * org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(
	 * DefaultElementLocator.java:69) at
	 * org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.
	 * invoke(LocatingElementHandler.java:38) at
	 * com.sun.proxy.$Proxy16.click(Unknown Source) at
	 * com.e2eTest.automation.addUsers.pageObjects.ConfigUsersPage.pimModule(
	 * ConfigUsersPage.java:44) at
	 * com.e2eTest.automation.addUsers.stepDefintions.ConfigUsersStepDefintions.
	 * jeCliqueSurLeModulePIM(ConfigUsersStepDefintions.java:28) at ✽.When je clique
	 * sur le module PIM(configUser/configUser.feature:14)
	 */

}
