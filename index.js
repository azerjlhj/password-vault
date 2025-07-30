import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";
import session from "express-session";        // For user sessions
import passport from "passport";              // For authentication
import { Strategy } from "passport-local";    // For local authentication
import bcrypt from "bcrypt";                  // For password hashing

dotenv.config({ quiet: true }); // Load environment variables

const app = express();
const port = 3000;

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

app.get("/", (req, res) => {
    res.render("home");     
});

app.get("/login", (req, res) => {
    res.render("login");    
});

app.get("/register", (req, res) => {
    res.render("register"); 
});

// Set view engine
app.set("view engine", "ejs");

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Start server
app.listen(port, () => {
    console.log(`Password Vault server running on http://localhost:${port}`);
});