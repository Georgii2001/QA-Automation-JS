 Digi24Page= require('../pageObjects/digi24page')
const Digi24Utils=require('../utils/digi24utils')
describe('Go to Digi24 page', () =>{
    it ('Open page', async()=>{
        Digi24Page.open();
        await browser.pause(2000);
        await Digi24Utils.clickOnPolitica();
        await browser.pause(9000);

    })
    it.only('Homework test', async()=>{
        Digi24Page.open();
        await browser.pause(2000);
        await Digi24Utils.clickOnMagazin();
        await browser.pause(5000);
        await Digi24Utils.clickOnMaiMulte();

    })
    
})