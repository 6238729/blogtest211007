<template>
	<div :class="containerClass" @click="onWrapperClick">
        <EblogTopBar @menu-toggle="onMenuToggle" />
        <div class="layout-sidebar" @click="onSidebarClick">
            <EblogMenu :model="menu" @menuitem-click="onMenuItemClick" />
        </div>

        <div class="layout-main-container">
            <div class="layout-main">
                <router-view />
            </div>
            <EblogFooter />
        </div>

		<EblogConfig :layoutMode="layoutMode" :layoutColorMode="layoutColorMode" @layout-change="onLayoutChange" @layout-color-change="onLayoutColorChange" />
        <transition name="layout-mask">
            <div class="layout-mask p-component-overlay" v-if="mobileMenuActive"></div>
        </transition>
	</div>
</template>



<script>
import EblogTopBar from './EblogTopBar.vue';
import EblogMenu from './EblogMenu.vue';
import EblogConfig from './EblogConfig.vue';
import EblogFooter from './EblogFooter.vue';

export default {
   
    components: {
        'EblogTopBar': EblogTopBar,
        'EblogMenu': EblogMenu,
        'EblogConfig': EblogConfig,
        'EblogFooter': EblogFooter,
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
