package com.e2eTest.automation.authentification.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class AuthentificationPage {

	WebDriver driver;

	public AuthentificationPage(WebDriver driver) {

		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	final static String USER_NAME_ID = "txtUsername";
	final static String USER_PASSWORD_ID = "txtPassword";
	final static String BUTTON_LOGIN_ID = "btnLogin";
	final static String WELCOME_ID = "welcome";
	final static String MODULE_BUZZ_ID = "menu_buzz_viewBuzz";
	final static String MODULE_TIME_ID = "menu_time_viewTimeModule";

	/* @FindBy */
	@FindBy(how = How.ID, using = USER_NAME_ID)
	public static WebElement userName;
	@FindBy(how = How.ID, using = USER_PASSWORD_ID)
	public static WebElement txtPassword;
	@FindBy(how = How.ID, using = BUTTON_LOGIN_ID)
	public static WebElement btnLogin;
	@FindBy(how = How.ID, using = WELCOME_ID)
	public static WebElement welcome;
	
	@FindBy(how = How.ID, using = MODULE_BUZZ_ID)
	public static WebElement buzz;
	@FindBy(how = How.ID, using = MODULE_TIME_ID)
	public static WebElement time;

	/* Methods */
	public void sendUserName() {

		userName.sendKeys("Admin");

	}

	public void sendUserPassword() {

		txtPassword.sendKeys("admin123");

	}

	public void clickLoginButton() {

		btnLogin.click();
	}
	public void clickModuleBuzz() {
		buzz.click();
	}

	public void clickModuleTime() {
		time.click();
	}

}
