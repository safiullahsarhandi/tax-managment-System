<template>
    <div>
        <vx-card title="List of Taxes" subtitle="The List of Taxes contains currently assigned taxes of customer Or those which are delivered succesfully">
            <vs-table search pagination :data="[]">
                <template slot="thead">
                    <vs-th>Title</vs-th>
                    <vs-th>Description</vs-th>
                    <vs-th>Company</vs-th>
                    <vs-th>Supervisor</vs-th>
                    <vs-th>No. of Officers</vs-th>
                    <vs-th>Status</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(tr,index) in data">
                        <vs-td>Title</vs-td>
                        <vs-td>Description</vs-td>
                        <vs-td>Company</vs-td>
                        <vs-td>Supervisor</vs-td>
                        <vs-td>No. of Officers</vs-td>
                        <vs-td>Status</vs-td>
                        <vs-td>Actions</vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>
