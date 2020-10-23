package com.e2eTest.automation.addUsers.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class ConfigUsersPage {

	WebDriver driver;

	public ConfigUsersPage(WebDriver driver) {

		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	final static String PIM_MODULE_ID = "menu_pim_viewPimModule";
	final static String BTN_ADD_ID = "btnAdd";
	final static String FIRST_NAME_ID = "firstName";
	final static String LAST_NAME_ID = "lastName";
	final static String BTN_SAVE_ID = "btnSave";

	/* @FindBy */
	@FindBy(how = How.ID, using = PIM_MODULE_ID)
	public static WebElement pimModule;

	@FindBy(how = How.ID, using = BTN_ADD_ID)
	public static WebElement btnAdd;

	@FindBy(how = How.ID, using = FIRST_NAME_ID)
	public static WebElement firstName;

	@FindBy(how = How.ID, using = LAST_NAME_ID)
	public static WebElement lastName;

	@FindBy(how = How.ID, using = BTN_SAVE_ID)
	public static WebElement bntSave;

	/* Methods */
	public void pimModule() {

		pimModule.click();

	}

	public void btnAdd() {

		btnAdd.click();
	}

	public void firstName() {

		firstName.sendKeys("Mouadh");
	}

	public void lastName() {

		lastName.sendKeys("Ghnimi");
	}

	public void bntSave() {

		bntSave.click();
	}

}
