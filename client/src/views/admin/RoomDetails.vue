<template>
    <div class="dashboard-wrap">
        <div>
            <h3 class="dashboard-title">Room Report</h3>
            <div class="wrap">
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
                                        <v-text-field
                                        solo
                                        label="Search"
                                            dense
                                        ></v-text-field>
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
                                    <th class="text-left" >Hall Name</th>
                                    <th class="text-left">Room No</th>
                                    <th class="text-left" >Bed No</th>
                                    <th class="text-left" >Assign To</th>
                                    <th class="text-left">Paid</th>
                                    <th class="text-center">Allocated</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(bed, i) in rooms" :key="bed._id">
                                <td>{{ i+1 }}</td>
                                <td>{{bed.hallID.hall_Name}}</td>
                                <td>Room {{ bed.roomID.room_No }}</td>
                                <td>Bed {{ bed.Bed_No }}</td>
                                <td v-if="bed.studentID">{{ bed.studentID.name }}</td>
                                <td v-else>Unassign</td>
                                <td>
                                    <div>
                                        {{bed.paid ? "Paid": "Pending"}}
                                    </div>
                                </td>
                                <td>
                                    <div :class="!bed.free ? 'paid' :'not_paid'">
                                        {{ !bed.free ? 'Allocated' : 'Not Allocated' }}
                                    </div>
                                </td>
                                </tr>
                            </tbody>
                            </template>
                        </v-simple-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddHostel",
    data : ()=> {
        return {
            rooms: ""
        }
    },
    mounted() {
        this.getRoomDetails()
    },
    methods: {
        async getRoomDetails () {
            let id = this.$route.params.id
            const response = await this.$http.get(`/api/room/details/${id}`)
            this.rooms = response.data.payload
            console.log(this.rooms)
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
        padding: 0 0 20px 0;
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
    .paid{
        display: flex;
        padding:10px;
        justify-content: center;
        color:#fff;
        background-color: rgb(25, 173, 122);
        font-size: 12px;
        font-weight: 600;
    }
    .not_paid{
        display: flex;
        padding:10px;
        justify-content: center;
        color:#fff;
        background-color: rgb(172, 44, 39);
        font-size: 12px;
        font-weight: 600;
    }
</style>