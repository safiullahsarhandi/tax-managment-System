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
                            <li class="flex items-start" :class="{'flex-row-reverse': commentedBy(msg.member_id), 'mt-4': index}" v-for="(msg, index) in comments" :key="index">
                                <vs-avatar size="40px" class="m-0 flex-shrink-0" :class="commentedBy(msg.member_id)? 'ml-3' : 'mr-3'"></vs-avatar>
                                <div class="msg relative bg-white shadow-md py-3 px-4 mb-2 rounded-lg max-w-md" :class="{'chat-sent-msg bg-primary-gradient text-white': commentedBy(msg.member_id), 'border border-solid d-theme-border-grey-light': !commentedBy(msg.member_id)}">
                                    <span>{{ msg.comment }}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </VuePerfectScrollbar>
                <div class="customizer-footer mt-6 flex items-center justify-between px-6">
                    <vs-input class="w-full" placeholder="Type Here" v-model="textMsg" @keydown.enter="sendComment($event)" />
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
            } else {
                var self = this;
                this.invterVal = setInterval(function() {
                    let data = {
                        'path': self.commentsUrl,
                        'type': self.type,
                        'object_id': self.object_id
                    };
                    self.$store.dispatch('getComments', data);
                }, 2000)
            }
            this.scrollToEnd()
        }
    },
    data() {
        return {
            invterVal: '',
            active: false,
            textMsg: '',
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
        let data = {
            'path': this.commentsUrl,
            'type': this.type,
            'object_id': this.object_id
        };
        this.$store.dispatch('getComments', data);
    },
    computed: {
        hideScrollToTopLocal: {
            get() { return this.hideScrollToTop },
            set(val) { this.$emit('toggleHideScrollToTop', val) }
        },
        userType() {
            return this.$store.getters.userType;
        },
        comments() {
            return this.$store.state.comments;
        },
    },
    methods: {
        commentedBy(val) {
            if (localStorage.getItem('admin') == val) {
                return true;
            } else {
                return false;
            }
            // return  this.$store.getters.commentedBy;
        },
        sendComment(e) {
            let data = {
                comment: e.target.value,
                object_id: this.object_id,
                type: this.type,
                scrollToEnd: this.scrollToEnd,
                userType: this.userType,
                loginUser: localStorage.getItem('admin'),
            };

            this.$store.dispatch('saveComment', data)
        },
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
