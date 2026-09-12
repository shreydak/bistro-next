import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = join(projectRoot, "dist");

if (!outputDirectory.startsWith(`${projectRoot}${sep}`)) {
  throw new Error("Refusing to build outside the project directory.");
}

await mkdir(outputDirectory, { recursive: true });
await mkdir(join(outputDirectory, "assets"), { recursive: true });

for (const file of ["index.html", "styles.css", "app.js"]) {
  await copyFile(join(projectRoot, file), join(outputDirectory, file));
}

await copyFile(
  join(projectRoot, "assets", "food-images.css"),
  join(outputDirectory, "assets", "food-images.css")
);
console.log(`Production build created at ${outputDirectory}`);
