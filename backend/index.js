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
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

// fetchData();

// readFromFile();

// getFileStats();

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
