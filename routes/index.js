const express = require("express");
const router = express.Router();
const path = require("path");
const { check, validationResult } = require("express-validator");

const insertData = require("../model/insertDataInDB");
const sendMail = require("../model/sendMailNodemailer");

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/about", (req, res) => {
  res.render("about");
});
router.get("/products", (req, res) => {
  res.render("products");
});
router.get("/contact", (req, res) => {
  res.render("contact", { helpers: {} });
});
router.get("/buy", (req, res) => {
  res.render("buy", { helpers: {} });
});
router.get("/sell", (req, res) => {
  res.render("sell", { helpers: {} });
});
router.get("/blog", (req, res) => {
  res.send("Comming soon");
});

let sanatizedContactInput = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Please Enter your name")
    .trim()
    .escape(),
  check("number")
    .isLength({ min: 10 })
    .withMessage("Please enter a valid number")
    .trim()
    .escape(),
  check("mail")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),
  check("subject").trim().escape(),
  check("message").escape(),
];

router.post("/contact", sanatizedContactInput, (req, res) => {
  const errors = validationResult(req);
  console.log(errors.mapped());

  let data = {
    page: "contact",
    name: req.body.name,
    number: req.body.number,
    mail: req.body.mail,
    subject: req.body.subject,
    message: req.body.message,
  };
  console.log("sanatized data :" + JSON.stringify(data));
  data = JSON.parse(JSON.stringify(data));
  console.log("no errors");

  sendMail(data)
    .then((result) => {
      console.log(result);
      res.render("contact", {
        helpers: {
          response: true,
          type: "success",
          removeLoadingScreen: "hide",
          showFlashAlert: "show",
          flashMessage:
            "Thank you for your intrest, We will get back to you shortly.",
        },
      });
    })
    .catch((error) => {
      res.render("contact", {
        helpers: {
          response: true,
          type: "failed",
          removeLoadingScreen: "hide",
          showFlashAlert: "show",
          flashMessage:
            "Error occured while sending mail, Please send your query to: fallback@mail.com   ",
        },
      });
    });

  // insertData(data)
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
});

let sanatizedBuyInput = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Please Enter your name")
    .trim()
    .escape(),
  check("number")
    .isLength({ min: 10 })
    .withMessage("Please enter a valid number")
    .trim()
    .escape(),
  check("mail")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),
  check("pincode").trim().escape(),
  check("city").trim().escape(),
];

router.post("/buy", sanatizedBuyInput, (req, res) => {
  const errors = validationResult(req);
  console.log(errors.mapped());

  let data = {
    page: "buy",
    name: req.body.name,
    number: req.body.number,
    mail: req.body.mail,
    pincode: req.body.pincode,
    city: req.body.city,
  };
  console.log("sanatized data :" + JSON.stringify(data));
  data = JSON.parse(JSON.stringify(data));
  console.log("no errors");

  sendMail(data)
    .then((result) => {
      console.log(result);
      res.render("buy", {
        helpers: {
          response: true,
          type: "success",
          removeLoadingScreen: "hide",
          showFlashAlert: "show",
          flashMessage:
            "Thank you for your intrest, We will get back to you shortly.",
        },
      });
    })
    .catch((error) => {
      res.render("buy", {
        helpers: {
          response: true,
          type: "failed",
          removeLoadingScreen: "hide",
          showFlashAlert: "show",
          flashMessage:
            "Error occured while sending mail, Please send your query to: fallback@mail.com   ",
        },
      });
    });

  // insertData(data)
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
});

let sanatizedSellInput = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Please Enter your name")
    .trim()
    .escape(),
  check("number")
    .isLength({ min: 10 })
    .withMessage("Please enter a valid number")
    .trim()
    .escape(),
  check("mail")
    .isEmail()
    .withMessage("Please enter a valid email address")
    .normalizeEmail(),
  check("pincode").trim().escape(),
  check("city").trim().escape(),
];

router.post("/sell", sanatizedSellInput, (req, res) => {
  const errors = validationResult(req);
  console.log(errors.mapped());

  let data = {
    page: "sell",
    name: req.body.name,
    number: req.body.number,
    mail: req.body.mail,
    pincode: req.body.pincode,
    city: req.body.city,
  };
  console.log("sanatized data :" + JSON.stringify(data));
  data = JSON.parse(JSON.stringify(data));
  console.log("no errors");

  sendMail(data)
    .then((result) => {
      console.log(result);
      res.render("buy", {
        helpers: {
          response: true,
          type: "success",
          removeLoadingScreen: "hide",
          showFlashAlert: "show",
          flashMessage:
            "Thank you for your intrest, We will get back to you shortly.",
        },
      });
    })
    .catch((error) => {
      res.render("buy", {
        helpers: {
          response: true,
          type: "failed",
          removeLoadingScreen: "hide",
          showFlashAlert: "show",
          flashMessage:
            "Error occured while sending mail, Please send your query to: fallback@mail.com   ",
        },
      });
    });

  // insertData(data)
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
});

module.exports = router;
