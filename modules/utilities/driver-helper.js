export const setDriver = () => {
    // here, we will set the driver
    console.log('DRIVER IS SET!');
};


export const getDriver = () => {
    // here, we will return the driver object
    console.log('DRIVER IS RETURNED!');
};

export const quitDriver = () => {
    console.log('DRIVER IS TERMINATED!')
};

export const browser = 'chrome';

export default function getInfo() {
    // this will return all the information about driver-helper
    console.log('DRIVER INFO!');
};
/*
If you would like to export these with CommonJS using module.exports
const driver = {
    setDriver,
    getDriver,
    quitDriver
};

module.exports = driver;
*/