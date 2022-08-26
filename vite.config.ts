import adonis from '@91codes/adonis-vite/build/plugins/adonis'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
	plugins: [
		vue(),
		vuetify({ autoImport: true }),
		adonis({ input: 'resources/frontend/entrypoints/main.js' }),
	],
})
