import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
}

export default mongoose.connection;
