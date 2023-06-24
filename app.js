"use strict";
require('dotenv').config();

const express = require("express");
const mime = require("mime");
const getCurrentDate = require("./date");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

mongoose.connect(`mongodb+srv://mehdiabdolnabizadeh:${process.env.MONGODB_PASSWORD}@clusterofmine.qb3vewe.mongodb.net/2DoLeastDB`, { useNewUrlParser: true })

  .then(() => {
    console.log("Connected to the MongoDB database successfully");
    app.listen(port, () => {
      console.log(`Server is happily working on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to the MongoDB database:", error);
  });

const itemSchema = new mongoose.Schema({
  id: Number,
  text: String,
  checked: Boolean,
});

const workItemSchema = new mongoose.Schema({
  id: Number,
  text: String,
  checked: Boolean,
});

const Item = mongoose.model("Item", itemSchema);
const WorkItem = mongoose.model("WorkItem", workItemSchema);

app.set("view engine", "ejs");

app.use(
  "/public",
  express.static("public", {
    setHeaders: (res, path) => {
      res.setHeader("Content-Type", mime.getType(path));
    },
  })
);

app.use(express.urlencoded({ extended: true }));

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/", async (req, res) => {
  try {
    const currentDay = getCurrentDate();
    const items = await Item.find();

    res.render("list", { listTitle: currentDay, items: items });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/", async (req, res) => {
  let item = req.body.newItem;
  if (item.trim() !== "") {
    if (req.body.list === "Work List") {
      await WorkItem.create({ id: generateItemId(), text: item, checked: false });
      res.redirect("/work");
    } else {
      await Item.create({ id: generateItemId(), text: item, checked: false });
      res.redirect("/");
    }
  } else {
    res.redirect("/");
  }
});

app.get("/work", async (req, res) => {
  try {
    const workItems = await WorkItem.find();

    res.render("list", { listTitle: "Work List", items: workItems });
  } catch (error) {
    console.error("Error fetching work items:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/work", async (req, res) => {
  let item = req.body.newItem;
  if (item.trim() !== "") {
    await WorkItem.create({ id: generateItemId(), text: item, checked: false });
  }
  res.redirect("/work");
});

app.post("/crossoff", async (req, res) => {
  const itemId = parseInt(req.body.itemId);
  const listName = req.body.listName;

  if (listName === "Work List") {
    await WorkItem.deleteOne({ id: itemId });
    res.redirect("/work");
  } else {
    await Item.deleteOne({ id: itemId });
    res.redirect("/");
  }
});

function generateItemId() {
  return Math.floor(Math.random() * 1000000);
}
