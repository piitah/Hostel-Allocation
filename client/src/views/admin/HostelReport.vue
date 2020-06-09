<template>
    <div class="dashboard-wrap">
        <div>
            <h3 class="dashboard-title">Hall Report</h3>
            <v-card style="margin:10px;">
                <div class="title">
                    All Room Details
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
                                    <th class="text-left">Img</th>
                                    <th class="text-left">Hall Name</th>
                                    <th class="text-left">Hall Code</th>
                                    <th class="text-left">No. of Rooms</th>
                                    <th class="text-left">Bed Space/Room</th>
                                    <th class="text-left">Price</th>
                                    <th class="text-left">location</th>
                                <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(hostel, i) in hostels" :key="hostel._id">
                                <td>{{ i+1 }}</td>
                                <td><img :src="hostel.image" width="60" alt=""></td>
                                <td>{{ hostel.hall_Name }}</td>
                                <td>{{ hostel.hall_Code }}</td>
                                <td>{{ hostel.bed_No }}</td>
                                <td>{{ hostel.room_No }}</td>
                                <td>{{ hostel.fees }}</td>
                                <td>{{ hostel.location }}</td>
                                <td>
                                    <div class="action">
                                        <div class="action-link" style="padding-right: 5px;">
                                        <v-btn @click.prevent="navigateTo(hostel._id)" text style="color: #fff; text-transform : capitalize; background-color:#952175; font-size: 12px; font-weight: 400">
                                             View Rooms
                                        </v-btn>
                                        </div>
                                        <div class="action-link"  style="padding-right: 5px;">
                                        <v-btn text style="color: #fff; text-transform : capitalize; background-color:#1F7087; font-size: 12px; font-weight: 400">
                                             <router-link to="/admin/edit-room" style="text-decoration: none; color: #fff;">Edit</router-link>
                                        </v-btn>
                                        </div>
                                        <div class="action-link" >
                                        <v-btn text style="color: #fff; text-transform : capitalize; background-color:#385F73; font-size: 12px; font-weight: 400">Delete</v-btn>
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
    name: "AddHostel",
    data : ()=> {
        return {
            hostels: "",
            search: ""
        }
    },
    watch: {
        search: {
            immediate: true,
            async handler (value) {
                try {
                    const response = await this.$http.get("/api/room/search", {
                        params: {
                            search : value
                        }
                    })
                    if(response.data.error) {
                        this.errMsg = "Not found"
                    }
                    this.hostels = response.data.payload
                } catch (error) {
                    this.errMsg = error.response.data.error
                }
            }
        }
    },
    mounted() {
        // this.getAllHostel()
    },
    methods: {
        // async getAllHostel () {
        //     const response = await this.$http.get("/api/room/halls")
        //     this.hostels = response.data.halls
        // },
        navigateTo(id) {
            this.$router.push({
                name: "RoomDetails",
                params: {id : id}
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
        padding: 10px 10px 0 10px;
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