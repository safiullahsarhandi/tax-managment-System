<template>
	<div>
		<vs-row>
			<vs-col vs-md="12" vs-lg="12" vs-xs="12">
				<vx-card title="List Of Customers" subtitle="List Of Owners Who Own Companies in our System">
					<template slot="actions">
						<vs-button @click="showAddOwnerPopup = true" type="gradient" icon-pack="feather" icon="icon-plus"></vs-button>
					</template>
					<vs-table search pagination :max-items="10" :data="owners">
						<template slot="thead">
							<vs-th>Customer Name (English)</vs-th>
							<vs-th>Customer Name (Khmer)</vs-th>
							<vs-th>Email</vs-th>
							<vs-th>No. Of Companies</vs-th>
							<vs-th>Phone Number</vs-th>
							<vs-th>NIC #</vs-th>
							<vs-th>Action</vs-th>
						</template>
						<template slot-scope="{data}">
							<vs-tr v-for="(tr,index) in data" :key="index">
								<vs-td>{{tr.name_english}}</vs-td>
								<vs-td>{{tr.name_khmer}}</vs-td>
								<vs-td>{{tr.email}}</vs-td>
								<vs-td>{{tr.companies_count}}</vs-td>
								<vs-td>{{tr.phone_number}}</vs-td>
								<vs-td>{{tr.nic}}</vs-td>
								<vs-td>
									<vs-button @click="showUpdateScreen(tr.owner_id,index)" icon-pack="feather" type="gradient" icon="icon-edit"></vs-button>
								</vs-td>
							</vs-tr>
						</template>
					</vs-table>
				</vx-card>
			</vs-col>
		</vs-row>
		<vs-popup title="Add Customer" :active.sync="showAddOwnerPopup">
			<form data-vv-scope="addform" ref="addform" @submit.prevent="addOwner($event,'addform')">
				<vs-row>
					<vs-col class="mt-3" vs-md="12" vs-lg="12" vs-sm="12">
						<vx-input-group>
							<vs-input v-validate="'required'" label-placeholder="Name (English)" type="text" v-model="name_english" name="name_english" data-vv-as="name (English)" />
						</vx-input-group>
						<span v-show="errors.has('addform.name_english')">{{errors.first('addform.name_english')}}</span>
					</vs-col>
					<vs-col class="mt-3" vs-md="12" vs-lg="12" vs-sm="12">
						<vx-input-group>
							<vs-input v-validate="'required'" label-placeholder="Name (Khmer)" type="text" v-model="name_khmer" name="name_khmer" data-vv-as="name (Khmer)" />
						</vx-input-group>
						<span v-show="errors.has('addform.name_khmer')">{{errors.first('addform.name_khmer')}}</span>

					</vs-col>
					<vs-col class="mt-3" vs-md="12" vs-lg="12" vs-sm="12">
						<vx-input-group>
							<vs-input v-validate="'required|email'" label-placeholder="Email" type="email" v-model="email" name="email" />
						</vx-input-group>
						<span v-show="errors.has('addform.email')">{{errors.first('addform.email')}}</span>

					</vs-col>
					<vs-col class="mt-3" vs-md="12" vs-lg="12" vs-sm="12">
						<vx-input-group>
							<vs-input v-validate="'required|numeric'" label-placeholder="Phone" type="text" v-model="phone_number" data-vv-as="Phone Number" name="phone_number" />
						</vx-input-group>
						<span v-show="errors.has('addform.phone_numer')">{{errors.first('addform.phone_numer')}}</span>
					</vs-col>
					<vs-col class="mt-3" vs-md="12" vs-lg="12" vs-sm="12">
						<vx-input-group>
							<vs-input v-validate="'required'" label-placeholder="NIC" type="text" v-model="nic" name="nic" />
						</vx-input-group>
						<span v-show="errors.has('addform.nic')">{{errors.first('addform.nic')}}</span>
					</vs-col>
					<vs-col class="mt-3 flex justify-end" vs-md="12" vs-lg="12" vs-sm="12">
						<vs-button button="submit" type="gradient">Add Customer</vs-button>
					</vs-col>
				</vs-row>
			</form>
		</vs-popup>
		<vs-popup title="Update Customer" :active.sync="showEditOwnerPopup">
			<form data-vv-scope="editform" ref="editform" @submit.prevent="editOwner($event,'editform')">
				<vs-row>
					<vs-col class="mt-3" vs-md="12" vs-lg="12" vs-sm="12">
						<vx-input-group>
							<vs-input v-validate="'required'" label-placeholder="Name (English)" type="text" v-model="edit_name_english" name="name_english" data-vv-as="name (English)" />
						</vx-input-group>
						<span v-show="errors.has('editform.name_english')">{{errors.first('editform.name_english')}}</span>
					</vs-col>
					<vs-col class="mt-3" vs-md="12" vs-lg="12" vs-sm="12">
						<vx-input-group>
							<vs-input v-validate="'required'" label-placeholder="Name (Khmer)" type="text" v-model="edit_name_khmer" name="name_khmer" data-vv-as="name (Khmer)" />
						</vx-input-group>
						<span v-show="errors.has('editform.name_khmer')">{{errors.first('editform.name_khmer')}}</span>

					</vs-col>
					<vs-col class="mt-3" vs-md="12" vs-lg="12" vs-sm="12">
						<vx-input-group>
							<vs-input v-validate="'required|email'" label-placeholder="Email" type="email" v-model="edit_email" name="email" />
						</vx-input-group>
						<span v-show="errors.has('editform.email')">{{errors.first('editform.email')}}</span>

					</vs-col>
					<vs-col class="mt-3" vs-md="12" vs-lg="12" vs-sm="12">
						<vx-input-group>
							<vs-input v-validate="'required|numeric'" label-placeholder="Phone" type="text" v-model="edit_phone_number" data-vv-as="Phone Number" name="phone_number" />
						</vx-input-group>
						<span v-show="errors.has('editform.phone_numer')">{{errors.first('editform.phone_numer')}}</span>
					</vs-col>
					<vs-col class="mt-3" vs-md="12" vs-lg="12" vs-sm="12">
						<vx-input-group>
							<vs-input v-validate="'required'" label-placeholder="NIC" type="text" v-model="edit_nic" name="nic" />
						</vx-input-group>
						<span v-show="errors.has('editform.nic')">{{errors.first('editform.nic')}}</span>
					</vs-col>
					<vs-col class="mt-3 flex justify-end" vs-md="12" vs-lg="12" vs-sm="12">
						<vs-button button="submit" type="gradient">Update Customer</vs-button>
					</vs-col>
				</vs-row>
			</form>
		</vs-popup>
	</div>	
</template>
<script>
	import {mapState,mapActions,mapGetters} from 'vuex';
	export default{
		created(){
			this.getOwners();
		},
		data () {
		  return {
		  	owner_id : '',
		    showAddOwnerPopup:false,
		    name_english : '',
		    name_khmer : '',
		    email : '',
		    phone_number : '',
		    nic : '',
		    showEditOwnerPopup:false,
		    edit_name_english : '',
		    edit_name_khmer : '',
		    edit_email : '',
		    edit_phone_number : '',
		    edit_nic : '',
		  };
		},
		computed: {
			  ...mapState('customers/',['owners']),
			  ...mapGetters('customers/',['findOwner']),
			},
		methods: {
			  ...mapActions({
			  	getOwners : 'customers/getOwners',
			  	createOwner : 'customers/createOwner',
			  	updateOwner : 'customers/updateOwner',
			  }),
			  addOwner(e,scope){
			  	this.$validator.validateAll(scope).then(result=>{
			  		if(result){
			  			let fd = new FormData(this.$refs.addform); 
			  			let data = {
			  				fd : fd,
			  				notify : this.$vs.notify,

			  			}
			  			this.createOwner(data).then(res=>{
			  				if(res.data.status == 'success'){
			  					this.name_khmer = this.name_english = this.nic = this.email = this.phone_number = '';
			  					e.target.reset();
			  					this.$validator.reset();
			  					this.showAddOwnerPopup = false;
			  					this.getOwners();
			  				}
			  			});
			  		}
			  	})
			  },
			  showUpdateScreen(owner_id,index){
			  	let owner = this.findOwner(owner_id);
			  	this.owner_id = owner.owner_id;
			  	this.edit_nic = owner.nic;
			  	this.edit_name_english = owner.name_english;
			  	this.edit_name_khmer = owner.name_khmer;
			  	this.edit_phone_number = owner.phone_number;
			  	this.edit_email = owner.email;
			  	this.showEditOwnerPopup = true;
			  },
			  editOwner(e,scope){
			  	this.$validator.validateAll(scope).then(result=>{
			  		if(result){
			  			let fd = new FormData(this.$refs.editform); 
			  			fd.append('owner_id',this.owner_id)
			  			let data = {
			  				fd : fd,
			  				notify : this.$vs.notify,

			  			}
			  			this.updateOwner(data).then(res=>{
			  				if(res.data.status == 'success'){
			  					this.edit_name_khmer = this.edit_name_english = this.edit_nic = this.edit_email = this.edit_phone_number = '';
			  					e.target.reset();
			  					this.$validator.reset();
			  					this.showEditOwnerPopup = false;
			  				}
			  			});
			  		}
			  	})
			  }
			}	
	}
</script>
