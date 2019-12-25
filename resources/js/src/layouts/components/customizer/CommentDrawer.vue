<template>
    <div id="theme-customizer">
        <!-- <vs-button @click.stop="active=!active" color="primary" type="filled" class="customizer-btn" icon-pack="feather" icon="icon-settings"></vs-button> -->
        <vs-sidebar hidden-background position-right v-model="active" click-not-close class="items-no-padding">
            <div class="h-full">
                <div class="customizer-header mt-6 flex items-center justify-between px-6">
                    <div>
                        <h4>COMMENTS</h4>
                        <small>Comments & Task Reviews</small>
                    </div>
                    <feather-icon icon="XIcon" @click.stop="active = false" class="cursor-pointer"></feather-icon>
                </div>
                <vs-divider class="mb-0"></vs-divider>
                <VuePerfectScrollbar class="scroll-area--customizer pt-4 pb-6" :settings="settings">
                    <div class="px-6">
                        <ul ref="chatLog">
                            <li class="flex items-start" :class="{'flex-row-reverse': msg.isSent, 'mt-4': index}" v-for="(msg, index) in chatMsg" :key="index">
                                <vs-avatar size="40px" class="m-0 flex-shrink-0" :class="msg.isSent ? 'ml-3' : 'mr-3'"></vs-avatar>
                                <div class="msg relative bg-white shadow-md py-3 px-4 mb-2 rounded-lg max-w-md" :class="{'chat-sent-msg bg-primary-gradient text-white': msg.isSent, 'border border-solid d-theme-border-grey-light': !msg.isSent}">
                                    <span>{{ msg.msg }}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </VuePerfectScrollbar>
                <div class="customizer-footer mt-6 flex items-center justify-between px-6">
                    <vs-input class="w-full" />
                </div>
                <vs-divider class="mb-0"></vs-divider>
            </div>
        </vs-sidebar>
    </div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
    props: {
        object_id: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        commentsUrl: {
            type: String,
            required: true,
        },

    },
    watch: {
        active(val, oldVal) {
            if (val == false) {
                clearInterval(this.invterVal)
            }else{
                var self = this;
        this.invterVal = setInterval(function() {
            self.$store.dispatch('getComments', self.commentsUrl, self.type, self.object_id);
        }, 2000)
            }
            this.scrollToEnd()
        }
    },
    data() {
        return {
            invterVal: '',
            active: false,
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
            chatMsg: [
                { senderImg: 'avatar-s-2.png', msg: 'Cake sesame snaps cupcake gingerbread', isSent: false },
                { senderImg: 'avatar-s-5.png', msg: 'Apple pie pie jujubes chupa chups muffin', isSent: true },
                { senderImg: 'avatar-s-2.png', msg: 'Chocolate cake', isSent: false },
                { senderImg: 'avatar-s-5.png', msg: 'Donut sweet pie oat cake dragée fruitcake', isSent: true },
                { senderImg: 'avatar-s-2.png', msg: 'Liquorice chocolate bar jelly beans icing', isSent: false },
                { senderImg: 'avatar-s-2.png', msg: 'Liquorice chocolate bar jelly beans icing', isSent: false },
                { senderImg: 'avatar-s-2.png', msg: 'Liquorice chocolate bar jelly beans icing', isSent: false },
                { senderImg: 'avatar-s-2.png', msg: 'Liquorice chocolate bar jelly beans icing', isSent: false },
                { senderImg: 'avatar-s-2.png', msg: 'Liquorice chocolate bar jelly beans icing', isSent: false },
                { senderImg: 'avatar-s-5.png', msg: 'Pudding candy', isSent: true },
                { senderImg: 'avatar-s-5.png', msg: 'Pudding candy', isSent: true },
            ],
        }
    },
    created() {
        
    },
    computed: {
        hideScrollToTopLocal: {
            get() { return this.hideScrollToTop },
            set(val) { this.$emit('toggleHideScrollToTop', val) }
        },
    },
    methods: {
        updatePrimaryColor(color) {
            this.primaryColor = color;
            this.$vs.theme({ primary: color });
        },
        scrollToEnd() {
            setTimeout(() => {
                const container = this.$el.querySelector('.ps-container');
                container.scrollTop = container.scrollHeight;
            }, 0);
        }
    },
    components: {
        VuePerfectScrollbar,
    }
}

</script>
<style lang="scss">
#theme-customizer {
    .vs-sidebar {
        position: fixed;
        z-index: 52000;
        width: 400px;
        max-width: 90vw;
        @apply shadow-lg;
    }
}

.customizer-btn {
    position: fixed;
    top: 50%;
    right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    z-index: 50000;

    .vs-icon {
        animation: spin 1.5s linear infinite;
    }
}

.scroll-area--customizer {
    height: calc(88% - 5rem);
}

</style>
