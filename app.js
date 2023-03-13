import { franc } from "franc";
import { fileURLToPath } from "url";
import express from "express";
import langs from "langs";
import path from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "semantic/dist")));

// Base route
app.get("/", (req, res) => {
  res.render("index", { langName: null });
});

app.post("/", (req, res) => {
  const langCode = franc(req.body.phrase);
  if (langCode === "und") {
    res.render("index", {
      langName: "und",
    });
  } else {
    try {
      const langName = langs.where("3", langCode).name;
      res.render("index", { langName });
    } catch {
      res.render("index", {
        langName: "und",
      });
    }
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
