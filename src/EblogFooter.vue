<template>
	<div class="layout-footer">
		<img alt="Logo" src='' height="20" class="mr-2" />
        <!-- <img alt="Logo" :src="darkTheme ? 'images/logo-dark.svg' : 'images/logo-white.svg'" height="20" class="mr-2" /> -->
		by
		<span class="font-medium ml-2">Elfinos</span>
	</div>
</template>

<script>
	export default {
		name: "AppFooter",
		computed: {
			// darkTheme() {
			// 	return this.$appState.theme.startsWith('saga');
			// }
		}
	}
</script>

<style lang="scss" scoped>
.layout-footer {
    transition: margin-left .2s;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    border-top: 1px solid var(--surface-border);
}

</style>