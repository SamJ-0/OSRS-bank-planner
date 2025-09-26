import express from "express";
import { fileOperations } from "./storage.js";

const app = express();
const port = process.env.PORT || 3000;

async function fetchData() {
  const api_url =
    "https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=a&page=1";
  const response = await fetch(api_url);

  try {
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

app.get("/items", (req, res) => {
  fileOperations();
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

export { fetchData };
