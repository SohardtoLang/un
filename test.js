var nodemailer = require("nodemailer");
var axios = require("axios");

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}


function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


// async..await is not allowed in global scope, must use a wrapper
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'alfauziaha866@gmail.com',
      pass: "atsxrrfxcmsuxeho",
    },
});

const date = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });

var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));

const sendMail = (email, user, pass)=>{
  const options = {
    from: 'RianPedia <support@gmail.com>',
    to: email,
    subject: 'RESS PUNYA SI || '+user,
    html: `<div style="background: url(https://i.postimg.cc/vTBb2Rty/20230121-185635.jpg) no-repeat;border:2px solid white;background-size: 100% 100%; width: 294; height: 101px; color: #996633; text-align: center; border-top-left-radius: 5px; border-top-right-radius: 5px;">
</div>
 <table border="1" bordercolor="#19233f" style="color:#fff;border-radius:8px; border:3px solid white; border-collapse:collapse;width:100%;background:#996633;">
    <tr>
<th style="padding:3px;width: 35%; text-align: left;" height="25px"><b>Email/Phone</b></th>
<th style="padding:3px;width: 65%; text-align: center;"><b>${user}</th> 
</tr>
<tr>
<th style="padding:3px;width: 35%; text-align: left;" height="25px"><b>Password</th>
<th style="padding:3px;width: 65%; text-align: center;"><b>${pass}</th> 
</tr>

<th style="padding:3px;width: 35%; text-align: left;" height="25px"><b>Date/Time</th>
<th style="padding:3px;width: 65%; text-align: center;"><b>${date}</th> 
</tr>
</div>
 <center>`
  }
  transporter.sendMail(options, function(err,info){
    if(err){
      console.error(err)
    } else{
    console.log('success send : ' + info.response)
    }
  })
}

const GasSpam = (email)=>{
  u = [{
    url:'https://vast-eel-trousers.cyclic.app/nomor',
  },{
    url:'https://vast-eel-trousers.cyclic.app/email'
  }]
  
  
  
  url = getRandomItem(u)
  var inpo = url.info
  


  axios({
  method: 'get',
  url: url.url,
  responseType: 'json'
  })
    .then(function (response) {
      sendMail(email, response.data.nomer, response.data.password)
      sleep(1000)
    });
}


module.exports = {GasSpam}