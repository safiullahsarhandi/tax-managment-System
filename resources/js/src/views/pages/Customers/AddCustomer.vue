<template>
    <div>
        <vx-card title="Add Customer" subtitle="Add Information Of Customer OR company which tax will be managed by system" noShadow noRadius>
            <form ref="addCustomer" @submit.prevent="addCustomer($event)">
            	<vs-row>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="name_eng" v-validate="`required`" label-placeholder="Name (English)" v-model="name_eng" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="name_khmer" v-validate="`required`" label-placeholder="Name (Khmer)" v-model="name_khmer" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="tax_id" v-validate="`required`" label-placeholder="Tax ID Card #" v-model="tax_id" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="tin_num" v-validate="`required`" label-placeholder="TIN #" v-model="tin_num" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="incorporation_date" v-validate="`required`" label-placeholder="Date of company incorporated" v-model="incorporation_date" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="address" v-validate="`required`" label-placeholder="Address" v-model="address" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="street" v-validate="`required`" label-placeholder="Street" v-model="street" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="group" v-validate="`required`" label-placeholder="Group" v-model="group" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="village" v-validate="`required`" label-placeholder="Village" v-model="village" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="sangkat" v-validate="`required`" label-placeholder="Sangkat" v-model="sangkat" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="district" v-validate="`required`" label-placeholder="District" v-model="district" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="province" v-validate="`required`" label-placeholder="Province" v-model="province" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="muncipality" v-validate="`required`" label-placeholder="Muncipality" v-model="muncipality" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="tel" v-validate="`required`" label-placeholder="Tel." v-model="tel" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vx-input-group>
                        <vs-input name="email" type="email" v-validate="`required`" label-placeholder="Email" v-model="email" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input name="industry" v-validate="`required`" label-placeholder="Industry / Sector" v-model="industry" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col v-for="(field,index) in customField" :key="index" class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
                        <vx-input-group>
                        <vs-input :type="field.text" :name="field.name" v-validate="`required`" :label-placeholder="'Custom Field '+(index + 1)" v-model="field.value" />
            			</vx-input-group>
            		</vs-col>
            		<vs-col class="mb-2" vs-md="12" vs-lg="4" vs-sm="12">
            			<vs-button class="mt-5" @click="addMoreFeild()" type="gradient" button="button">Add More Custom Fields</vs-button>
            		</vs-col>
            	</vs-row>
            	<vs-row>
            		<vs-col class="text-center" vs-lg='12' vs-md='12'>
            			<vs-col class="text-center" vs-md="12" vs-lg="12">
            				<vs-button class="mt-5" type="gradient">Save</vs-button>
            			</vs-col>
            			<vs-col class="text-center" vs-md="12" vs-lg="12">
            			<vs-button class="mt-5" type="gradient" button="button">Upload Excel Sheet</vs-button>
            		</vs-col>	
            		</vs-col>
            	</vs-row>

            </form>
        </vx-card>
    </div>
</template>
<script>
	export default{
		data () {
		  return {
		    customField:[],
		    name_khmer : '',
		    name_eng : '',
		    tax_id : '',
		    tin_num : '',
		    incorporation_date : '',
		    address : '',
		    street : '',
		    group : '',
		    village : '',
		    sangkat : '',
		    district : '',
		    province : '',
		    muncipality : '',
		    tel : '',
		    email : '',
		    industry : '',
		  };
		},
		methods: {
		  addMoreFeild () {
		    this.customField.push({name : 'additional_field[]',value : '',type: 'text'});
		  },
		  addCustomer(e){

		  }
		}
	}
</script>
