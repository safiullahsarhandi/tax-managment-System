<template>
    <div>
        <vx-card title="Exchange Rates">
            <vs-table :data="rates">
                <template slot="thead">
                    <vs-th>
                        Salary Rate
                    </vs-th>
                    <vs-th>
                        Average Rate
                    </vs-th>
                    <vs-th>
                        Annual Rate
                    </vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :data="data">
                        <vs-td :data="tr" :key="index" v-for="(tr, index) in data">
                          {{tr}}
                        <template slot="edit">
                          <vs-input v-model="data[index]" class="inputx" placeholder="Email"/>
                        </template>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>
<script>
export default {
    data: () => ({

        rates: {
            salary_rate: '19',
            average_rate: '10',
            annual_rate: '5',

        }
    }),
}

</script>
<style scoped>
.vs-con-table .vs-con-tbody .vs-table--tbody-table .vs-table--thead th {
    width: 10px;
}

</style>
