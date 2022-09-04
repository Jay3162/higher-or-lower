// const http = require('http');

// const functionCall = () => {
//     const apiKey = '3679AC90F8E7123E9E8DB10AA800EB90';
//     http
//         .get('http://cdn.dota2.com/apps/dota2/images/heroes/invoker_sb.png',
//         {'authorization': apiKey},
//         (resp) => {
//             let data = ""
//             resp.on(data, (chunk) => {
//                 data += chunk;
//             });
//             resp.on("end", () => {
//                 let url = JSON.parse(data).hdurl;
//                 console.log(url)
//             })
//         }
//         )
//         .on("error", (err) => {
//             console.log("error" + err.message)
//         })
// }

