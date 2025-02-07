import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { urlShort, getOriginalUrl } from "./src/controllers/urlController.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ;

app.use(express.urlencoded({ extended: true }));

mongoose
    .connect(process.env.MONGO_URI, {
        dbName: 'URL_Shortener_Project',
    })
    .then(() => console.log('Mongodb Connected'))
    .catch((error) => console.log(error));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public"))); 
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "src", "views"));

app.get('/', (req, res) => {
    res.render('server', { shortUrl: null });
});

// handle url submission
  app.post("/shorten", urlShort);

// redirect to original url using short url
  app.get("/:shortCode", getOriginalUrl);

app.listen(port, () =>  console.log(`Server is running on port ${port}`));
