import fs from "node:fs/promises";
import path from "node:path";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

const buildDir = path.resolve("build");
const indexPath = path.join(buildDir, "index.html");

const routeMeta = {
  home: {
    title: `${SITE_NAME} - Premium Roblox Script Hub`,
    description: `${SITE_NAME} is a premium Roblox script hub supporting Grace, Build a Boat for Treasure, Murder Mystery 2, and more.`,
    keywords: `${SITE_NAME}, lumin, roblox, script hub, best roblox script, working roblox script 2025, tower of hell script, grace script, build a boat script, murder mystery 2 script, rivals script`,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/brand/icon.png`,
  },
  buy: {
    title: `Get Your Key - ${SITE_NAME}`,
    description: `Get free or premium access to ${SITE_NAME}, a premium Roblox script hub with support for Grace, Build a Boat for Treasure, Murder Mystery 2, and more.`,
    keywords: `${SITE_NAME} key, lumin key system, roblox script key, free roblox script access, lumin premium`,
    url: `${SITE_URL}/purchase/`,
    image: `${SITE_URL}/brand/icon.png`,
  },
  "buy/robux": {
    title: `Buy with Robux - ${SITE_NAME}`,
    description: `Purchase ${SITE_NAME} access using Robux on the Roblox catalog.`,
    keywords: `${SITE_NAME} robux, buy lumin robux, roblox catalog lumin`,
    url: `${SITE_URL}/purchase/robux/`,
    image: `${SITE_URL}/brand/icon.png`,
  },
};

const defaultRoutes = ["privacy", "tos", "milenium-preview"];

function injectMeta(html, { title, description, keywords, url, image }) {
  // Extract vite-injected asset tags (script modules + stylesheet links)
  const assetTags = (
    html.match(
      /<script[^>]*crossorigin[^>]*><\/script>|<link[^>]*crossorigin[^>]*>/g,
    ) || []
  ).join("\n    ");

  const newHead = `<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="icon" type="image/png" href="/brand/icon.png" />
    <link rel="apple-touch-icon" href="/brand/icon.png" />
    <title data-rh="true">${title}</title>
    ${assetTags}
    <meta data-rh="true" name="description" content="${description}" />
    <meta data-rh="true" name="keywords" content="${keywords}" />
    <meta data-rh="true" name="author" content="${SITE_NAME}" />
    <meta data-rh="true" name="robots" content="index, follow" />
    <meta data-rh="true" name="theme-color" content="#f8bfd4" />
    <link data-rh="true" rel="canonical" href="${url}" />
    <meta data-rh="true" property="og:type" content="website" />
    <meta data-rh="true" property="og:url" content="${url}" />
    <meta data-rh="true" property="og:site_name" content="${SITE_NAME}" />
    <meta data-rh="true" property="og:locale" content="en_US" />
    <meta data-rh="true" property="og:title" content="${title}" />
    <meta data-rh="true" property="og:description" content="${description}" />
    <meta data-rh="true" property="og:image" content="${image}" />
    <meta data-rh="true" property="og:image:alt" content="${SITE_NAME} logo" />
    <meta data-rh="true" name="twitter:card" content="summary" />
    <meta data-rh="true" name="twitter:url" content="${url}" />
    <meta data-rh="true" name="twitter:title" content="${title}" />
    <meta data-rh="true" name="twitter:description" content="${description}" />
    <meta data-rh="true" name="twitter:image" content="${image}" />
    <meta data-rh="true" name="twitter:image:alt" content="${SITE_NAME} logo" />
  </head>`;

  return html.replace(/<head>[\s\S]*?<\/head>/, newHead);
}

async function main() {
  const indexHtml = await fs.readFile(indexPath, "utf8");

  // Patch root index.html with home page meta
  await fs.writeFile(indexPath, injectMeta(indexHtml, routeMeta.home));

  const { home: _home, ...subRoutes } = routeMeta;

  await Promise.all([
    ...defaultRoutes.map(async (route) => {
      const routeDir = path.join(buildDir, route);
      await fs.mkdir(routeDir, { recursive: true });
      await fs.writeFile(
        path.join(routeDir, "index.html"),
        injectMeta(indexHtml, routeMeta.home),
      );
    }),
    ...Object.entries(subRoutes).map(async ([route, meta]) => {
      const routeDir = path.join(buildDir, route);
      await fs.mkdir(routeDir, { recursive: true });
      await fs.writeFile(
        path.join(routeDir, "index.html"),
        injectMeta(indexHtml, meta),
      );
    }),
  ]);
}

main().catch((error) => {
  console.error("Failed to generate static route entry points.");
  console.error(error);
  process.exitCode = 1;
});
