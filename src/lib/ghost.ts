
import GhostContentAPI from "@tryghost/content-api";

const url = process.env.GHOST_API_URL;
const key = process.env.GHOST_CONTENT_API_KEY;

if (!url || !key) {
  throw new Error("Missing Ghost API environment variables.");
}

export const ghost = new GhostContentAPI({
  url,
  key,
  version: "v6.0",
});
