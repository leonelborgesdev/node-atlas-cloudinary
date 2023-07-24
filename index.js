import app from "./app.js";
import { conectToDb } from "./utils/mongoose.js";
import { config } from "dotenv";
config();

async function main() {
  const PORT = process.env.PORT | 3000;
  await conectToDb();
  app.listen(PORT);
  console.log("Server is running on port", PORT);
}
main();
