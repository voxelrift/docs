// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeBlack from 'starlight-theme-black'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [
				starlightThemeBlack({
					navLinks: [{
						label: 'Mods',
						link: '/mods/list',
					}],
					footerText:
						'Docs by [VoxelRift](https://voxelrift.gg)'

				})
			],
			title: 'VoxelRift Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/voxelrift' }],
			sidebar: [
				{
					label: 'Mods',
					items: [
						{ label: 'List', slug: 'mods/list' },
						{ label: 'Essential Commands', slug: 'mods/essentials' },
					],
				}
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
