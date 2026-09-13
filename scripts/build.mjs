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

for (const asset of [
  "food-images.css",
  "favicon.svg",
  "social-preview.png",
]) {
  await copyFile(
    join(projectRoot, "assets", asset),
    join(outputDirectory, "assets", asset)
  );
}

console.log(`Production build created at ${outputDirectory}`);
