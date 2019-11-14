<template>
    <div>
        <vx-card title="Customers">
            <vs-table search pagination :data="[]">
                <template slot="thead">
                    <vs-th>Name(English)</vs-th>
                    <vs-th>Name(Khmer)</vs-th>
                    <vs-th>Industy / Sector</vs-th>
                    <vs-th>Tax ID</vs-th>
                    <vs-th>TIN # </vs-th>
                    <vs-th>Email</vs-th>
                    <vs-th>Tel</vs-th>
                    <vs-th>Actions</vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="index" v-for="(tr,index) in data">
                        <vs-td>Name(English)</vs-td>
                        <vs-td>Name(Khmer)</vs-td>
                        <vs-td>Industy / Sector</vs-td>
                        <vs-td>Tax ID</vs-td>
                        <vs-td>TIN # </vs-td>
                        <vs-td>Email</vs-td>
                        <vs-td>Tel</vs-td>
                        <vs-td>Actions</vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
    </div>
</template>
