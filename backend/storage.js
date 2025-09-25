import { existsSync } from "node:fs";
import { writeFile, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const readFromFile = "Abyssal whip";

const fileOperations = async () => {
  const filePath = path.join(__dirname, "item_db", "itemStoragePromise.json");

  try {
    const currentDate = Date.now();
    const apiRefreshInterval = 2;
    const dayInMs = 86400000;
    let getFileStats;
    let fileLastModified;
    let fileSize;
    let fileAgeInMs;
    let timeDifference;

    if (!existsSync(filePath)) {
      const writeToFile = await writeFile(filePath, readFromFile);
      console.log("File written");
    } else {
      getFileStats = await stat(filePath);
      fileLastModified = getFileStats.mtime;
      fileSize = getFileStats.size;
      fileAgeInMs = currentDate - fileLastModified;
      timeDifference = fileAgeInMs / dayInMs;
    }

    if (timeDifference < apiRefreshInterval) {
      const readFromFile = await readFile(filePath, "utf8");
      console.log(readFromFile);
    } else if (timeDifference >= apiRefreshInterval || fileSize === 0) {
      await writeFile(filePath, readFromFile);
      console.log("API called and file written");
    } else {
      console.log("Issue with time difference");
    }
  } catch (error) {
    console.error(error);
  }
};

fileOperations();

process.on("uncaughtException", (error) => {
  console.error(`There was an uncaught error: ${error}`);
  process.exit(1);
});

export { fileOperations };
