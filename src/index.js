import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import urlRoutes from './routes/urlRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

mongoose
    .connect(process.env.MONGO_URI, {
        dbName: 'URL_Shortener_Project',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Mongodb Connected'))
    .catch((error) => console.log(error));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
    res.render('server', { shortUrl: null });
});

// Use the routes
app.use('/', urlRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));