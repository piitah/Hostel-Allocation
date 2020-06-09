<template>
  <div class="dashboard-wrap">
        <div>
            <h3 class="dashboard-title">Manage Student</h3>
            <v-card style="margin:10px">
                <div class="title">
                    All student Details
                </div>
                <div class="profile-container">
                    <div>
                        <div>
                        <v-row>
                            <v-spacer>
                            </v-spacer>
                            <v-col cols="6" md="3">
                                 <v-row >
                                    <v-col cols="12" md="12" style="padding : 0px 12px 0px 0px;">
                                       <v-form>
                                            <v-text-field
                                                v-model="search"
                                                solo
                                                label="Search"
                                                dense
                                            ></v-text-field>
                                       </v-form>
                                    </v-col>

                                </v-row>
                            </v-col>        
                        </v-row>
                    </div>
                         <v-simple-table style="border: 1px solid #ccc !important">
                            <template v-slot:default>
                            <thead >
                                <tr style="background-color: #ccc">
                                    <th class="text-left" >Sno.</th>
                                    <th class="text-left">Matric No.</th>
                                    <th class="text-left">Full Name</th>
                                    <th class="text-left">Email</th>
                                    <th class="text-left">Contact</th>
                                    <th class="text-left">Hall Name</th>
                                    <th class="text-left">Bed No.</th>
                                    <th class="text-left">Role</th>
                                <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user, i) in users" :key="user._id">
                                <td>{{ i+1 }}</td>
                                <td>{{ user.matric_no }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.contact_No }}</td>
                                <td v-if="user.bed">{{ user.bed.hallID.hall_Name }}</td>
                                 <td v-else>
                                   Empty
                                 </td>
                                <td v-if="user.bed">{{ user.bed.Bed_No }}</td>
                                 <td v-else>Empty</td>
                                <td>{{ user.role }}</td>
                                <td>
                                    <div class="action">
                                        <div class="action-link" >
                                        <v-btn @click.prevent="navigateTo(user._id)" text style="color: #fff; text-transform : capitalize; background-color:#385F73; font-size: 12px; font-weight: 400">
                                            Assign Role/Edit
                                        </v-btn>
                                        </div>
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                        
                    </div>
                </div>
            </v-card>
        </div>
    </div>
</template>


<script>
  export default {
    data () {
      return {
          users: "",
          search: "",
          errMsg : ""
      }
    },
    watch: {
        search: {
            immediate: true,
            async handler (value) {
                try {
                    const response = await this.$http.get("/api/user/search", {
                        params: {
                            search : value
                        }
                    })
                    if(response.data.error) {
                        this.errMsg = "Not found"
                    }
                    this.users = response.data.payload
                } catch (error) {
                    this.errMsg = error.response.data.error
                }
            }
        }
    },
    mounted() {
    //   this.getAllUsers()
    },
    methods: {
    //   async getAllUsers () {
    //       const response = await this.$http.get("/api/user/getAllUser")
    //       this.users = response.data.payload
    //   },
      navigateTo(id) {
        this.$router.push({
          name: "EditStudent",
          params: {id: id}
        })
      }
    },
  }
</script>

<style scoped>
    .dashboard-wrap{
        margin: 10px 10px;
    }
    .dashboard-title{
        font-size: 24px;
        padding: 0 0 20px 10px;
    }
    .wrap{
        width: 100%;
        background-color: #fff;
        border: 1px solid #ccc;
        min-height: 70vh;
        margin:20 20 10 20px;
    }
    .title{
        background-color: #ccc;
        padding: 13px;
        font-size: 12px !important;
        font-weight: 500;
    }
    .profile-container{
        width: 100%;
        min-height: 70vh;
        background-color: #fff;
        padding: 10px;
        box-shadow:  0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }
    .action {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0, 5px;
    }
</style>