import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";
import session from "express-session";        // For user sessions
import passport from "passport";              // For authentication
import { Strategy } from "passport-local";    // For local authentication
import bcrypt from "bcrypt";                  // For password hashing

const app = express();
const port = 3000;
const saltRounds = 10;
env.config({ quiet: true }); // Load environment variables

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

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

app.get("/vault", (req, res) => {
    res.render("vault");  // Show vault (protection can be added later)
});

// Set view engine
app.set("view engine", "ejs");

// Start server
app.listen(port, () => {
    console.log(`Password Vault server running on http://localhost:${port}`);
});