const puppeteer=require("puppeteer");
const { createClient } =require("@supabase/supabase-js");

const supabase = createClient('https://iiusrsmhivrdravaahxf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlpdXNyc21oaXZyZHJhdmFhaHhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1ODc4MTcsImV4cCI6MjAyNDE2MzgxN30.Zn2Esf3MiOJYJBKnyIQiKFytpjPnCMdcNPhtyzTtNr8');
const tableName = 'restaurant';
// const tableNameSeries = 'series';


    (async () => {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto("https://www.tripadvisor.in/Restaurants-g297612-Surat_Surat_District_Gujarat.html");
       
        
        const grabdata = await page.evaluate(() => {
         
            const img =  document.querySelectorAll('img')
            const title = document.querySelectorAll('a.BMQDV._F.Gv.wSSLS.SwZTJ.FGwzt.ukgoS');
            const type= document.querySelectorAll('div.OvkNT.RPbii.FGSTQ > span.HLTMv > span.YECgr');
            const description =  document.getElementsByClassName('tvdtW')
            const data=[];
           for (let index = 9; index < 35; index++) {
            const rating = Math.floor(Math.random() * 5) + 1;
            const typeIndex = index % 2 === 0 ? index : index - 1;
            data.push({
                img:img[index].src,
                name:title[index+5].textContent,
                description:description[index].textContent,
                rating: rating,
                type: type[typeIndex].textContent,
                cityId:"6b1be832-cee2-4d4b-90ab-ab12fd53653a"

            });
            };
            return data;
        
        });
        console.log(grabdata)

        const { data, error } = await supabase
  .from(tableName)
  .insert(grabdata);
        console.log(grabdata);

        if (error) {
            console.error('Error inserting data:', error);
          } else {
            console.log('Data inserted successfully:', data);
          }
          await browser.close();
})();













// const puppeteer=require("puppeteer");
// // const { createClient } =require("@supabase/supabase-js");

// // const supabase = createClient('https://tnwujkrubiwxbffuqmyw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRud3Vqa3J1Yml3eGJmZnVxbXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1MjE2MzksImV4cCI6MjAxMDA5NzYzOX0.Fs1ufvT5hWNGJERridQkJqui2CURmUrLbXW5c_43Wgo');
// const tableName = 'movie';
// const tableNameSeries = 'series';


//     (async () => {
//         const browser = await puppeteer.launch({ headless: false });
//         const page = await browser.newPage();
//         await page.goto("https://swiggy.com/restaurants/punjabi-rasoi-malviya-nagar-jaipur-744977");
       
        
//         const grabdata = await page.evaluate(() => {
         
//             const img = document.querySelectorAll('img.styles_itemImage__3CsDL')
//             // const title = document.querySelectorAll('a.BMQDV._F.Gv.wSSLS.SwZTJ.FGwzt.ukgoS');
//             // const type= document.querySelectorAll('div.OvkNT.RPbii.FGSTQ > span.HLTMv > span.YECgr');
//             // const description =  document.getElementsByClassName('tvdtW')
//             const data=[];
//             for (let index = 0; index < 40; index++) {
//                 const rating = Math.floor(Math.random() * 5) + 1;
//                 const typeIndex = index % 2 === 0 ? index : index - 1;
//                 data.push({
//                     img: (img[index]).src,
//                     // title:title[index+5].textContent,
//                     // description:description[index].textContent,
//                     rating: rating,
//                     // type: type[typeIndex].textContent
//                 });
//             };
//             return data;
        
//         });
//         console.log(grabdata)
// //         const { data, error } = await supabase
// //   .from(tableName)
// //   .insert(grabdata);
// //         console.log(grabdata);

//         // if (error) {
//         //     console.error('Error inserting data:', error);
//         //   } else {
//         //     console.log('Data inserted successfully:', data);
//         //   }
//           await browser.close();
// })();


















// const city=["Jaipur","Udaipur","Mumbai","Kolkata","Ahmedabad","New Delhi","Chennai","Pune","Jodhpur","Surat"]

// async function saveCities() {
//     for (let i=0;i<city.length;i++){
//         const newCity =  myDataSource.getRepository(City).create({cityName:city[i]})
//         const savedCity = await myDataSource.getRepository(City).save(newCity);
//     }
// }

// saveCities().catch(console.error);