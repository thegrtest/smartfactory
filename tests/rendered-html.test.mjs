import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  return readFile(new URL("../dist/client/index.html", import.meta.url), "utf8");
}

test("exports the smart factory landing page", async () => {
  const html = await render();
  assert.match(
    html,
    /<title>WWB DATA AUTOMATION \| Smart factory installation for small manufacturers<\/title>/i,
  );
  assert.match(html, /Smart factory systems, installed for you/);
  assert.match(html, /Request a site assessment/);
  assert.match(html, /Hardware, software, and installation from one team/);
  assert.match(html, /SIMULATED DATA/);
  assert.match(html, /Training, documentation, and support are part of delivery/);
  assert.match(html, /Open service menu/);
  assert.match(html, /Switch to dark mode/);
  assert.match(html, /SERVICE INDEX \/ 00/);
  assert.match(html, /og-menu\.png/);
  assert.match(html, /mailto:hello@wwbdataautomation\.com/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("keeps identity configurable and engineering limits enforced", async () => {
  const [page, layout, config, menu, theme, packageJson, eslintConfig] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/site-config.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/industrial-menu.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/theme-toggle.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../eslint.config.mjs", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<HeroSection \/>/);
  assert.match(layout, /metadataBase: new URL\(siteConfig\.url\)/);
  assert.match(config, /NEXT_PUBLIC_SITE_URL/);
  assert.match(config, /NEXT_PUBLIC_CONTACT_EMAIL/);
  assert.match(menu, /window\.scrollY > 24/);
  assert.match(menu, /is-scrolled/);
  assert.match(theme, /wwbdataautomation-theme/);
  assert.match(theme, /aria-pressed/);
  assert.match(eslintConfig, /"max-lines"/);
  assert.match(eslintConfig, /max: 500/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
});
