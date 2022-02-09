const { expect } = require('chai');
const Digi24Page=  require('../pageObjects/digi24page')
const Digi24Utils={

    clickOnPolitica : async() => {
        const politica = await Digi24Page.politica;
        await politica.click();
        await browser.pause(2000);
    },
    clickOnMagazin : async() => {
        const magazin = await Digi24Page.magazin;
        const articol = await Digi24Page.articol; 
        var art = articol.getAttribute('href');
        await magazin.click();
        browser.url(art);
        browser.url('https://www.digi24.ro/magazin/stil-de-viata/animale/o-balta-a-devenit-piscina-pentru-animalele-salbatice-din-parcul-national-ceahlau-1501021')
        await browser.pause(2000);
     },
    clickOnMaiMulte : async() => {
        const maiMulte = await Digi24Page.maiMulte;
        await maiMulte.click();
        const educatie = await Digi24Page.educatie;
        await educatie.click();
        await browser.pause(2000);
    }
}
module.exports= Digi24Utils;