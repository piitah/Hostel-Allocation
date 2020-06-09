<template>
  <div class="dashboard-wrap">
        <div>
            <h3 class="dashboard-title">Booking Confirmation</h3>
            <v-card style="margin:10px">
                <div class="title">
                    Confirm Your Booking Details
                </div>
                <div class="profile-container">
                    <div>
                        <div>
                        <v-row justify='center'>
                            <v-col cols="12" md="8">
                                <v-form @submit.prevent="search()">
                                    <v-row dense>
                                        <v-col cols="9" md="10">
                                            <v-text-field
                                                v-model="paymentID"
                                                solo
                                                label="Enter your payment ID"
                                                dense
                                            ></v-text-field>    
                                        </v-col> 
                                        <v-col md="2" cols="3">
                                            <button type="submit" class="btn"> Search</button>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-col>        
                        </v-row>
                    </div>
                         <v-simple-table v-if="user" style="border: 1px solid #ccc !important">
                            <template v-slot:default>
                            <thead >
                                <tr style="background-color: #ccc">
                                    <th class="text-left">Matric No.</th>
                                    <th class="text-left">Full Name</th>
                                    <th class="text-left">Email</th>
                                    <th class="text-left">Contact</th>
                                    <th class="text-left">Hostel Name</th>
                                    <th class="text-left">Room No.</th>
                                    <th class="text-left">Bed No.</th>
                                <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{{ user.studentID.matric_no }}</td>
                                <td>{{ user.studentID.name }}</td>
                                <td>{{ user.studentID.email }}</td>
                                <td>{{ user.studentID.contact_No }}</td>
                                <td>{{ user.hallID.hall_Name }}</td>
                                <td>{{ user.roomID.room_No }}</td>
                                <td>{{ user.Bed_No }}</td>
                                <td>
                                    <div class="action">
                                        <div class="action-link" >
                                        <v-btn text @click.prevent="confirm()" style="color: #fff; text-transform : capitalize; background-color:#385F73; font-size: 12px; font-weight: 400">
                                            Confrim Payment
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
          paymentID: "",
          user : ""
      }
    },
    methods: {
      async search () {
          this.user = ""
          let paymentID = this.paymentID.trim()
          const response = await this.$http.post("/api/booking/search", {
              paymentID : paymentID
          })
          this.user = response.data.payload[0]

      },
      async confirm () {
          let paymentID = this.paymentID.trim();
          const response = await this.$http.post("/api/booking/confirm", {
              paymentID : paymentID
          })
            this.$swal({
              icon: "success",
              title:"Payment has been Confirmed",
              showConfirmationButton : true
          })
          this.user =""
          this.paymentID= ""
          console.log(response)

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
    .btn{
        width: 100%;
        padding:10px;
        font-size: 12px;
        border-radius: 4px;
        background-color: #1F7087;
        color:#fff;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }
</style>