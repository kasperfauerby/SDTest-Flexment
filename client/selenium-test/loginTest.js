const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
require("chromedriver");

async function login(){
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("http://localhost:3000/tasks");

    await driver.findElement(By.name('login')).click();

    //await driver.findElement
}