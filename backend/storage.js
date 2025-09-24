import { existsSync } from "node:fs";
import { writeFile, readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileOperations = async () => {
  const currentDate = Date.now();
  try {
    const getFileStats = await stat(
      path.join(__dirname, "item_db", "itemStorage.json")
    );
    const fileLastModified = getFileStats.mtime;

    const timeElapsed = currentDate - fileLastModified;

    console.log(timeElapsed);

    const readFromFile = await readFile(
      path.join(__dirname, "item_db", "itemStorage.json"),
      "utf8"
    );
    console.log(readFromFile);

    if (
      !existsSync(path.join(__dirname, "item_db", "itemStoragePromise.json"))
    ) {
      const writeToFile = await writeFile(
        path.join(__dirname, "item_db", "itemStoragePromise.json"),
        readFromFile
      );
    } else {
      console.log("The file exists");
    }
  } catch (error) {
    console.error(error);
  }
  console.log(currentDate);
};

fileOperations();

// const getFileStats = () => {
//   stat(path.join(__dirname, "item_db", "itemStorage.json"), (error, stats) => {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log("Stats object for: example_file.txt");
//       console.log(stats);

//       console.log("Path is file:", stats.isFile());
//       console.log("File last modified:", stats.mtime);
//     }
//   });
// };

// const writeToFile = () => {
//   writeFile(path.join(__dirname, "item_db", "itemStorage1.json"), "This is test data", (error) => {
//   if (error) {
//     throw error;
//   }
//   console.log("Write complete");
// });
// };

// const readFromFile = () => {
//   readFile(path.join(__dirname, "item_db", "itemStorage.json"), "utf8", (error, data) => {
//     if (error) {
//       throw error;
//     }
//     console.log(data);
//   });
// };

process.on("uncaughtException", (error) => {
  console.error(`There was an uncaught error: ${error}`);
  process.exit(1);
});

export { fileOperations };
