import Hapi from "@hapi/hapi";
import dotenv from "dotenv";
dotenv.config();
import { completeShoppingAssistant } from "./completions/shoppingAssistant";

async function main() {
  const server = Hapi.server({
    port: 3008,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: async (req, h) => {
      try {
        return await completeShoppingAssistant("Sandy", "I'm looking for a smart watch", ["athletic", "casual", "running"])
      } catch (err) {
        console.log(err)
      }

    },
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
}

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

void main();

export {};
