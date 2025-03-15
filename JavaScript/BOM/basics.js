// Bom-------------------------------

// it is browaser object model provides interface to interact with browaser
// (unlike a DOM which  manipulates webpage on interactions )

// Browser features- navigation, location, history , screen properties


// window-------------------------------------------------------------------
// It is root of Bom 
// all such as DOM , Timer , Browser Specific ,methods are attched to window
//window.document --Accesses the document object (DOM).
//window.navigator -- provides details about the user's browser, OS, and capabilities.
//window.location  --
// window.history
// window.screen
// window.alert()
// window.prompt()
// window.confirm()
// window.setTimeout(()=>{},2000)
// window.setInterval(()=>{},1000)
// window.open()

//window.navigator -- provides details about the user's browser, OS, and capabilities.
// console.log(window.navigator)  // object of all properties and methods of navigator
// console.log(navigator.userAgent) //Returns the user-agent string (browser details).
// console.log(typeof(navigator.userAgent)) // string
// console.log(navigator.platform) // deprecated but return OS platform
// console.log(navigator.language) // return browser language settings
// console.log(navigator.onLine)   //  online status true or false
// console.log(navigator.geolocation) //  provides 

// if (navigator.userAgent.includes("Chrome")) {  // on string we can perform includes method
//     console.log("User is on Chrome");
//   } else {
//     console.log("User is on another browser");
//   }

// window .location -- allows you to read and manipulate the browser's  current URL

// console.log(window.location)// object
// console.log(location.href) // http://127.0.0.1:5500/JavaScript/BOM/bom.html
// console.log(location.hostname)//127.0.0.1
// console.log(location.pathname);//    /JavaScript/BOM/bom.html
// console.log(location.search); // if  http://127.0.0.1:5500/JavaScript/BOM/bom.html?anant ----- then---- anant
// console.log(location.hash)  //   if  http://127.0.0.1:5500/JavaScript/BOM/bom.html#section --- then --- #section

// location.assign("https://www.google.com/?authuser=0")  // Navigates to a new URL.
// locatioin.replace(" https://www.google.com/?authuser=0") // navigates to new url no back button
// location.reload()



