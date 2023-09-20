//import {setDriver, getDriver, quitDriver, browser} from './driver-helper.js'; // this is how you can import functions or variables individually
import * as driver from './driver-helper.js';
//import getInfo from './driver-helper.js';



function validateHomePage() {
    driver.setDriver();
    driver.getDriver();
    //Validate all your script
    driver.quitDriver();
}

validateHomePage();

console.log(driver.browser);