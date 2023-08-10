const puppeteer = require('puppeteer');

(async () => {

  const RED_COLORS = [1,2,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]
  const BLACK_COLORS = []

  const START_BUTTON = {
    'X':1298,
    'Y':682
  }
  const RED_BET = {
    'X':1010,
    'Y':353
  }
  const SHIP = {
    'X':807,
    'Y':675
  }

  const RESULT_IMAGE = {
    'X':576,
    'Y':126
  }

  

  //RESULT_IMAGE

  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: false,
   // executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox','--disable-infobars','--window-size=1920,1080',],
    ignoreDefaultArgs: ['--enable-automation' , '--disable-extensions']

  });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0); 
  // Navigate the page to a URL
  await page.goto('https://www.grandx.com/');

 

  let search_icon = await page.$x('/html/body/div[2]/div[3]/div[1]/ul/li[1]/div/img');
  await search_icon[0].click();

  let Game = await page.$x('/html/body/div[2]/div[3]/div[1]/section[4]/nav/div/div[173]/a')
  await Game[0].click();

  
  setTimeout(async() => {
    let frame = await page.$('#gameframe');
    let BOX = await frame.boundingBox()
    let CENTER_POINT = await frame.clickablePoint()
    console.log(BOX)
    console.log(CENTER_POINT)

// CDPElementHandle { handle: CDPJSHandle {} }
// { x: 363.734375, y: 100, width: 1176, height: 661.5 }
// { x: 951.734375, y: 430.75 }



   // await page.mouse.click(786,730)
  }, 100000);

  
 // Find the iframe
 

 // Find its coordinates

// X = 786
// Y = 730
  

 //await browser.close();

//   await page.mouse.click(1024,469)


})();


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}