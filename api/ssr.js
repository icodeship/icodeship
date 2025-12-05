import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { render } from "../dist/server/entry-server.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default async function handler(req, res) {
  try {
    // Correct Vite client index path
    const indexPath = path.join(__dirname, "../dist/client/index.html");
    let template = fs.readFileSync(indexPath, "utf-8");

    const helmetContext = {};
    const appHtml = await render(req.url, helmetContext);

    let html = template.replace("<!--app-html-->", appHtml);

    // Optional: Helmet injection if needed
    if (helmetContext.helmet) {
      html = html.replace("</head>", `${helmetContext.helmet.title.toString()}</head>`);
    }

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(html);
  } catch (error) {
    console.error("SSR ERROR:", error);
    res.status(500).send("SSR Error");
  }
}
