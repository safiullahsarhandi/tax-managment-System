<template>
    <div>
        <vx-card title="List of Officers">
            <vs-table search pagination :data="[]">
                <template slot="thead">
                    <vs-th>#</vs-th>
                    <vs-th>Name</vs-th>
                    <vs-th>Phone #</vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th>Address</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(tr,index) in data">
                        <vs-td>#</vs-td>
                        <vs-td>Name</vs-td>
                        <vs-td>Phone #</vs-td>
                        <vs-td>Email</vs-td>
                        <vs-td>Address</vs-td>
                        <vs-td>Actions</vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>
