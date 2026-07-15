import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";

const input = "SonicCity.html";
const output = "SonicCity_compressed.html";
const assetDir = "soniccity_compressed_assets";

const mimeToExt = new Map([
  ["image/jpeg", ".jpg"],
  ["image/jpg", ".jpg"],
  ["image/png", ".png"],
  ["image/webp", ".webp"],
  ["image/gif", ".gif"],
  ["image/svg+xml", ".svg"],
  ["audio/mpeg", ".mp3"],
  ["audio/mp3", ".mp3"],
  ["audio/wav", ".wav"],
  ["audio/ogg", ".ogg"],
]);

mkdirSync(assetDir, { recursive: true });

const html = readFileSync(input, "utf8");
let index = 0;
const assets = [];

const replaced = html.replace(/data:([^;"')]+);base64,([A-Za-z0-9+/=]+)/g, (match, mime, data) => {
  index += 1;
  const ext = mimeToExt.get(mime) || extname(mime) || ".bin";
  const filename = `asset-${String(index).padStart(2, "0")}${ext}`;
  const filePath = join(assetDir, filename);
  const bytes = Buffer.from(data, "base64");
  writeFileSync(filePath, bytes);
  assets.push({ filename, mime, bytes: bytes.length, originalChars: match.length });
  return `${assetDir}/${filename}`;
});

writeFileSync(output, replaced, "utf8");

const report = {
  input,
  output,
  inputBytes: Buffer.byteLength(html),
  outputBytes: Buffer.byteLength(replaced),
  exportedAssets: assets,
};

console.log(JSON.stringify(report, null, 2));
