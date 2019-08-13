<template>
	<v-app>
		<navbar />

		<custom-toolbar />

		<v-content>
			<carousel />
		</v-content>

		<custom-footer />
	</v-app>
</template>

<script>
import CustomToolbar from '@/components/template/Toolbar'
import Nav from '@/components/template/Nav'
import Content from '@/components/widgets/Content'
import Footer from '@/components/template/Footer'
export default {
	components: {
		customToolbar: CustomToolbar,
		navbar: Nav,
		carousel: Content,
		customFooter: Footer
	}
}
</script>
