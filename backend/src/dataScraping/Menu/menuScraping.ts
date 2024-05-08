// const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

const menuData = async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.zomato.com/udaipur/rootage-restaurant-and-lounge-city-centre/order')

    await page.waitForSelector('.sc-bnOsYM dOMJaJ')

    const html = await page.content();

    const $ = cheerio.load(html);

    $('.sc-bnOsYM dOMJaJ').each((index: any, element: any) => {
      const categoryTitle = $(element).find('.sc-1hp8d8a-0 sc-bzlMTP cICSBM').text()
    })

  } catch (error) {
    console.log(error);
  }
};
