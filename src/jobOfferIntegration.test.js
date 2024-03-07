import tap from "tap";
import buildServer from "../src/server.js";
import { test } from "tap";

test("GET /:id", async (t) => {
  const server = await buildServer();
  const response = await server.inject({
    method: "GET",
    url: "/56023",
  });

  t.equal(response.statusCode, 200, "Status code should be 200");
  t.end();
});