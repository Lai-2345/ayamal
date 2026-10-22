import { readFileSync } from "node:fs";
import path from "node:path";
import SiteMarkup from "../../SiteMarkup";

export const dynamic = "force-static";

export default function EnglishHome() {
  const html = readFileSync(path.join(process.cwd(), "app/site-content.en.html"), "utf8");
  return <SiteMarkup html={html} locale="en" />;
}
