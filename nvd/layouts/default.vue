<template>
	<v-app>
		<core-app-bar />
		<core-drawer />
		<core-view />
		<!-- <core-footer /> -->
	</v-app>
</template>

<script>
export default {
	props: {
		source: String,
	},
	data: () => ({
		drawer: null,
	}),
	components: {
		CoreDrawer: () => import('@/components/core/Drawer'),
		CoreAppBar: () => import('@/components/core/AppBar'),
		CoreView: () => import('@/components/core/View'),
		// CoreFooter: () => import('@/components/core/Footer'),
	},
};
</script>
