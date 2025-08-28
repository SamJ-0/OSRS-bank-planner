import express, { response } from "express";
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
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

app.get("/items", async (req, res) => {
  const data = await fetchData();
  res.send(data);
});
