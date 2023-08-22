import { createServer } from "http";
import { prisma } from "./prisma/prisma.js";

const app = createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  switch (req.url) {
    case "/":
      try {
        const events = await prisma.eventos.findMany();

        req.on("end", () => {
          res.statusCode = 200;
          res.end(JSON.stringify(events));
        });
      } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "Internal Server Error" }));
      }

    case "/criar":
      try {
        if (req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk;
          });

          req.on("end", async () => {
            try {
              const eventData = JSON.parse(body);
              const createdEvent = await prisma.eventos.create({
                data: eventData,
              });

              console.log(body);

              res.statusCode = 201;
              res.end(JSON.stringify(createdEvent));
            } catch (err) {
              console.error(err);
              res.statusCode = 400;
              res.end(JSON.stringify({ error: "Invalid Request Body" }));
            }
          });
        } else {
          res.statusCode = 405; // Method Not Allowed
          res.end(JSON.stringify({ error: "Method Not Allowed" }));
        }
      } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "Internal Server Error" }));
      }
  }
});

app.listen(8000, () => {
  console.log("Server running on port 3000");
});
