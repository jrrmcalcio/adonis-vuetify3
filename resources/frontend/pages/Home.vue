<template>
	<v-app>
		<v-main>
			<HelloWorld />
		</v-main>
	</v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
	name: 'Home',

	components: {
		HelloWorld,
	},

	data() {
		return {
			//
		}
	},
})
</script>
