import type { StarlightPlugin } from "@astrojs/starlight/types";
import { ExpressiveCodeTheme } from "astro-expressive-code";
import fs from 'node:fs'

const light = ExpressiveCodeTheme.fromJSONString(fs.readFileSync(new URL("./styles/shiki/gruvbox-light-medium.jsonc", import.meta.url), 'utf-8'))
const dark = ExpressiveCodeTheme.fromJSONString(fs.readFileSync(new URL("./styles/shiki/gruvbox-dark-medium.jsonc", import.meta.url), 'utf-8'))

export default function createPlugin(): StarlightPlugin {
	return {
		name: "starlight-theme-gruvbox",
		hooks: {
			setup: ({ config, updateConfig }) => {
				updateConfig({
					customCss: [
						...(config.customCss ?? []),
						"starlight-theme-gruvbox/styles/theme.css",
					],
					expressiveCode: {
						themes: [light, dark],
					},
				});
			},
		},
	};
}
