const nodeMailer = require("nodemailer");

function sendMail(data) {
  let parsedData = JSON.stringify(data);
  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "akagamishanks010@gmail.com",
      pass: "myn@me!$M@ru",
    },
  });

  const mailOptions = {
    from: "sender@email.com",
    to:
      "shikacocclasher@gmail.com,kotla.raghudharahasreddy@gmail.com,nagarjunreddych7@gmail.com,manideepyadav359@gmail.com",
    subject: `Mail from ${data.page} page`,
    html: `<h1>Stopla</h1><h2>${parsedData}</h2>`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log("this error is from transporter" + err);
        reject(err);
      } else {
        console.log(info.messageId);
        resolve("mail sent");
      }
    });
  });
}

module.exports = sendMail;
