<template>
	<div id="app">
		<router-view :key="$route.fullPath"></router-view>
	</div>
</template>

<script>
import themeConfig from '@/../themeConfig.js'
export default {
    watch: {
        '$store.state.theme'(val) {
            this.toggleClassInBody(val);
        }
    },
    methods: {
        toggleClassInBody(className) {
            if (className == 'dark') {
                if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
                document.body.classList.add('theme-dark');
            } else if (className == 'semi-dark') {
                if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                document.body.classList.add('theme-semi-dark');
            } else {
                if (document.body.className.match('theme-dark')) document.body.classList.remove('theme-dark');
                if (document.body.className.match('theme-semi-dark')) document.body.classList.remove('theme-semi-dark');
            }
        }
    },
    created(){
        var self = this;
        setTimeout(function(){
            self.$messaging.onMessage(notification => {
            // self.$vs.notify(notification);
            self.$store.dispatch('getNotifications');
        });
        })
    },
    mounted() {
        this.toggleClassInBody(themeConfig.theme)
    },
}
</script>
