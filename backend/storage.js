import { existsSync } from "node:fs";
import { writeFile, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { fetchData } from "./index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileOperations = async () => {
  const filePath = path.join(__dirname, "item_db", "itemStorage.json");

  try {
    const currentDate = Date.now();
    const apiRefreshInterval = 2;
    const dayInMs = 86400000;
    let getFileStats;
    let fileLastModified;
    let fileSize;
    let fileAgeInMs;
    let timeDifference;

    let apiCall;
    let readFileResults;

    if (!existsSync(filePath)) {
      apiCall = JSON.stringify(await fetchData());
      await writeFile(filePath, apiCall);
      console.log("File written");
    } else {
      getFileStats = await stat(filePath);
      fileLastModified = getFileStats.mtime;
      fileSize = getFileStats.size;
      fileAgeInMs = currentDate - fileLastModified;
      timeDifference = fileAgeInMs / dayInMs;
    }

    if (timeDifference >= apiRefreshInterval || fileSize === 0) {
      apiCall = JSON.stringify(await fetchData());
      await writeFile(filePath, apiCall);
      console.log("Api called and file written");
    } else if (timeDifference < apiRefreshInterval) {
      console.log("File read");
      readFileResults = await readFile(filePath, "utf8");
      return readFileResults;
    }
  } catch (error) {
    console.error(error);
  }
};

process.on("uncaughtException", (error) => {
  console.error(`There was an uncaught error: ${error}`);
  process.exit(1);
});

export { fileOperations };
