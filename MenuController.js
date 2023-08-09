const express = require("express");
const router = express.Router();
const ejs = require("ejs");
const path = require("path");

router.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

router.get("/menu1", (req, res) => {
  const data = {
    title: "Menu 1",
    items: ["Item 1", "Item 2", "Item 3"],
  };

  if (req.xhr) {
    renderMenu(data, (html) => {
      res.setHeader("Content-Type", "text/html");
      res.send(html);
    });
  } else {
    res.redirect("/")
  }
});

router.get("/menu2", (req, res) => {
  const data = {
    title: "Menu 2",
    items: ["Item A", "Item B", "Item C", "Item D"],
  };

  if (req.xhr) {
    renderMenu(data, (html) => {
      res.setHeader("Content-Type", "text/html");
      res.send(html);
    });
  } else {
    res.redirect("/")
  }
});

module.exports = router;

function renderMenu(data, callback) {
  const menuTemplatePath = path.join(__dirname, "views", "menu.ejs");
  ejs.renderFile(menuTemplatePath, data, {}, (err, html) => {
    if (err) {
      console.error("Error rendering menu template:", err);
      return callback("Error rendering menu");
    }
    callback(html);
  });
}
