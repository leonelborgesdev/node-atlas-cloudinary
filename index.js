import app from "./app.js";
import { conectToDb } from "./utils/mongoose.js";

async function main() {
  await conectToDb();
  app.listen(3000);
  console.log("Server is running on port", 3000);
}
main();
