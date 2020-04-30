<template>
    <div>
        <vs-row>
            <vs-col vs-lg="12" vs-md="12" vs-sm="12">
                <vx-card>
                    <VuePerfectScrollbar v-if="allNotifications.length > 0" ref="mainSidebarPs" class="scroll-area--nofications-dropdown p-0 mb-10" :settings="settings">
                        <ul class="bordered-items">
                            <li @click="goToDestination(ntf)" v-for="(ntf,index) in allNotifications" :key="index" class="flex justify-between px-4 py-4 notification cursor-pointer">
                                <div class="flex items-start">
                                    <feather-icon :icon="ntf.is_checked?'EyeIcon':'EyeOffIcon'" :svgClasses="[ntf.is_checked?'text-primary':'text-dark', 'stroke-current mr-1 h-6 w-6']"></feather-icon>
                                    <div class="mx-2">
                                        <span class="font-medium block notification-title" :class="[ntf.is_checked?'text-primary':'text-dark']">{{ ntf.notification }}</span>
                                        <small :class="[{'text-dark':!ntf.is_checked}]">{{ ntf.description }}</small>
                                    </div>
                                </div>
                                <small class="mt-1 whitespace-no-wrap">{{ elapsedTime(ntf.created_at) }}</small>
                            </li>
                        </ul>
                    </VuePerfectScrollbar>
                    <vs-pagination @input="changePage" v-model="currentPage" :total="totalPages"></vs-pagination>
                    <vs-row>
                        <vs-col class="flex justify-center">
                            <h1>You dont have any notification yet!</h1>
                        </vs-col>
                    </vs-row>
                </vx-card>
            </vs-col>
        </vs-row>
    </div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {
            currentPage: 1,
            totalPages: 0,
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
        };
    },
    computed: {
        allNotifications() {
            return this.$store.state.allNotifications;
        },
        allNotificationsDetail() {
            return this.$store.state.allNotificationsDetail;
        }
        // ...mapState('rootState',['allNotifications','allNotificationsCount']),
    },
    methods: {
        goToDestination(notification) {
            // alert(notification.click_action);

            if (notification.click_action !== this.$route.path) {
                this.$store.dispatch('markAsRead', notification);
                this.$router.push(notification.click_action);
            }
        },
       async changePage(){
            var self = this;
        await this.$store.dispatch('getAllNotifications',{page : this.currentPage}).then(function() {
        });
        },
        elapsedTime(startTime) {
            let x = new Date(startTime);
            let now = new Date();
            var timeDiff = now - x;
            timeDiff /= 1000;

            var seconds = Math.round(timeDiff);
            timeDiff = Math.floor(timeDiff / 60);

            var minutes = Math.round(timeDiff % 60);
            timeDiff = Math.floor(timeDiff / 60);

            var hours = Math.round(timeDiff % 24);
            timeDiff = Math.floor(timeDiff / 24);

            var days = Math.round(timeDiff % 365);
            timeDiff = Math.floor(timeDiff / 365);

            var years = timeDiff;

            if (years > 0) {
                return years + (years > 1 ? ' Years ' : ' Year ') + 'ago';
            } else if (days > 0) {
                return days + (days > 1 ? ' Days ' : ' Day ') + 'ago';
            } else if (hours > 0) {
                return hours + (hours > 1 ? ' Hrs ' : ' Hour ') + 'ago';
            } else if (minutes > 0) {
                return minutes + (minutes > 1 ? ' Mins ' : ' Min ') + 'ago';
            } else if (seconds > 0) {
                return seconds + (seconds > 1 ? `${seconds} sec ago` : 'just now');
            }

            return 'Just Now'
        },
    },
    async created() {
        var self = this;
        await this.$store.dispatch('getAllNotifications',{page : 1}).then(function() {

            self.currentPage = self.allNotificationsDetail.current
            self.totalPages = self.allNotificationsDetail.total
        });


    },
    components: {
        VuePerfectScrollbar,
    }
}

</script>
