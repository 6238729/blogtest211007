<template>
    <div id = "">
        <p>Header부분</p>
        
            
    </div>

    <div class="layout-topbar">	
		<ul class="layout-topbar-menu hidden lg:flex origin-top">
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-cog"></i>
					<span>Settings</span>
				</button>
			</li>
			<li>
				<button class="p-link layout-topbar-button">
					<i class="pi pi-user"></i>
					<span>Profile</span>
				</button>
			</li>
            
		</ul> 
	</div>
</template>
<script>



export default {
    components : {
        
    },
	data() {

		return {
            items1: [
                {
                    label: 'Home',
                    icon: 'pi pi-fw pi-home',
                    to: '/'
                },
                {
                    label: 'dashboard',
                    icon: 'pi pi-fw pi-comments',
                    to: '/dashboard'
                },
                {
                    label: 'detailchart',
                    icon: 'pi pi-fw pi-chart-line',
                    to: '/dchart'
                },
                {
                    label: 'alarm',
                    icon: 'pi pi-fw pi-clock',
                    to: '/alarm'
                },
                {
                    label: 'kpi',
                    icon: 'pi pi-fw pi-save',
                    to: '/kpi'
                },
            ],
            items2: [
                {
                    label: 'FileTranster',
                    icon: 'pi pi-fw pi-globe',
                    to: '/ftransfer'
                },
                {
                    label: 'history',
                    icon: 'pi pi-fw pi-calendar',
                    to: '/history'
                },
                {
                    label: 'management',
                    icon: 'pi pi-fw pi-compass',
                    to: '/manage'
                },
                {
                    label: 'configuration',
                    icon: 'pi pi-fw pi-cog',
                    to: '/config'
                }
            ],
        }
    },
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
        },
		onTopbarMenuToggle(event) {
            this.$emit('topbar-menu-toggle', event);
        }
    },
	computed: {
		// darkTheme() {
		// 	return this.$appState.theme.startsWith('saga');
		// }
	}
}
</script >

<style scoped lang="scss">
::v-deep(.tabMebuscss) {
    padding: 0.5rem ;
    align-items: center;
    justify-content: center;
    

}


</style>
