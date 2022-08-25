import { createInertiaApp, Head, Link } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp, h } from 'vue'
import '../css/app.css'
import vuetify from '../plugins/vuetify'
import { loadFonts } from '../plugins/webfontloader'

export function resolvePageComponent(name, pages) {
	for (const path in pages) {
		if (path.endsWith(`${name.replace('.', '/')}.vue`)) {
			return typeof pages[path] === 'function' ? pages[path]() : pages[path]
		}
	}

	throw new Error(`Page not found: ${name}`)
}

loadFonts()

createInertiaApp({
	resolve(name) {
		return resolvePageComponent(name, import.meta.glob('../pages/**/*.vue'))
	},
	setup({ el, App, props, plugin }) {
		createApp({ render: () => h(App, props) })
			.use(plugin)
			.use(ElementPlus)
			.use(vuetify)
			.component('InertiaHead', Head)
			.component('InertiaLink', Link)
			.mount(el)
	},
})

InertiaProgress.init()
