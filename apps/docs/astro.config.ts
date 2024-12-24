import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import gruvbox from "starlight-theme-gruvbox";

// https://astro.build/config
export default defineConfig({
	site: 'https://starlight-theme-gruvbox.otterlord.dev',
	integrations: [
		starlight({
			title: "Gruvbox",
			favicon: "/favicon.svg",
			social: {
				github: "https://github.com/TheOtterlord/starlight-theme-gruvbox",
			},
			customCss: [
				"@fontsource/inter/400.css",
				"@fontsource/inter/600.css",
				"./src/custom.css",
			],
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Install", slug: "guides/install" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
			plugins: [gruvbox()],
		}),
	],
});
