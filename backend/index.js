import express from "express";
import { fileOperations } from "./storage.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

async function fetchData() {
  const apiBaseUrl = `https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1`;
  let alphaCategory = [];

  for (let i = 97; i <= 122; i++) {
    const apiAlpha = `&alpha=${String.fromCodePoint(i)}&page=1`;
    alphaCategory.push(apiAlpha);
  }

  const responsePromise = alphaCategory.map((alphaCat) => {
    fetch(apiBaseUrl + alphaCat);
  });

  try {
    if (!responseData.ok) {
      throw new Error("Could not fetch resource");
    }
    const responses = await Promise.all(responsePromise);

    const response = await Promise.all(
      responses.map((response) => response.json())
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}

app.get("/items", async (req, res) => {
  const data = await fileOperations();
  res.send(data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

export { fetchData };
