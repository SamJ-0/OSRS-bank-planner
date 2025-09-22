import express, { response } from "express";
import { writeFile } from "fs";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

fetchData();

async function fetchData() {
  const response = await fetch(
    "https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=a&page=1"
  );

  try {
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

app.get("/items", async (req, res) => {
  const data = await fetchData();

  const jsonData = JSON.stringify(data, null, 2);

  writeFile("itemStorage.json", jsonData, "utf8", (error) => {
    if (error) {
      console.log("Error writing to file", error);
    } else {
      console.log("Data written to file");
    }
  });
  res.send(data);
});
