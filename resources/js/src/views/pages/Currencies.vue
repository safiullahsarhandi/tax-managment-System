<template>
    <div>
        <vx-card title="Currencies">
            <vs-table search pagination :data="[]">
                <template slot="thead">
                    <vs-th>Currency</vs-th>
                    <vs-th>Country</vs-th>
                    <vs-th>Symbol</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(tr,index) in data">
                        <vs-td>Currency</vs-td>
                        <vs-td>Country</vs-td>
                        <vs-td>Symbol</vs-td>
                        <vs-td>Actions</vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>
