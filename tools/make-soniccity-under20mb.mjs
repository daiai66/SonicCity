import { readFileSync, writeFileSync, statSync } from "node:fs";

const input = "SonicCity.html";
const output = "SonicCity_under20mb.html";

const replacements = [
  { path: "assets/city-sound-mart-hero.png", mime: "image/png" },
  { path: "assets/textures/earth-nightmap-baked-visible-4096.jpg", mime: "image/jpeg" },
  { path: "assets/textures/earth-black-ocean-blue-land-lights-4096.jpg", mime: "image/jpeg" },
  { path: "assets/textures/earth-night-lights-glow-4096.png", mime: "image/png" },
  { path: "assets/textures/earth-nightmap-baked-visible-4096.jpg", mime: "image/jpeg" },
];

const html = readFileSync(input, "utf8");
let index = 0;

const replaced = html.replace(/data:([^;"')]+);base64,([A-Za-z0-9+/=]+)/g, () => {
  const asset = replacements[index];
  if (!asset) {
    throw new Error(`No replacement configured for embedded asset ${index + 1}`);
  }
  index += 1;
  const data = readFileSync(asset.path).toString("base64");
  return `data:${asset.mime};base64,${data}`;
});

writeFileSync(output, replaced, "utf8");

console.log(JSON.stringify({
  input,
  output,
  embeddedAssetsReplaced: index,
  inputBytes: statSync(input).size,
  outputBytes: statSync(output).size,
  outputMiB: Number((statSync(output).size / 1024 / 1024).toFixed(2)),
  replacements: replacements.map((asset) => ({
    path: asset.path,
    bytes: statSync(asset.path).size,
  })),
}, null, 2));
