import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	base: "/PictureSorter/",
	plugins: [sveltekit()]
};

export default config;
