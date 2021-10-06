<template>
	<div class="layout-menu-container">
		<AppSubmenu :items="model" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick" />
		<a href="https://www.primefaces.org/primeblocks-vue" class="block mt-3">
			<!-- <img alt="primeblocks" :src="darkTheme ? 'images/banner-primeblocks.png' : 'images/banner-primeblocks-dark.png'" class="w-full" /> -->
		</a>
	</div>
</template>

<script>
// import AppSubmenu from './AppSubmenu';

export default {
}
</script>

<style scoped>

</style>