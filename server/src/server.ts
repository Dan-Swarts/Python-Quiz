import express from "express";
// import path from 'node:path';
import db from "./config/connection.js";
import routes from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves static files in the entire client's dist folder
app.use(express.static("../client/dist"));

app.use(routes);

if (process.env.MONGODB_URI) {
  db.once("open", () => {
    app.listen(PORT, () =>
      console.log(`🌍 Now listening on localhost:${PORT}`)
    );
  });
} else {
  app.listen(PORT, () =>
    console.log(`❌ No database attached: listening on localhost:${PORT}`)
  );
}
