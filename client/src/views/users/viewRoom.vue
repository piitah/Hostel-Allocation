<template>
    <div class="dashboard-wrap">
        <div>
            <h3 class="dashboard-title">Details</h3>
            <div class="" style="display: flex; justify-content: center">
                <v-card style="width: 90%;">
                    <div style="padding:20px;">
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <img :src="hostel.image" style="width: 100%;" alt="">
                                </v-col>
                                <v-col cols="12" md="6">
                                    <div class="detail-wrap">
                                        <div class="content_wrap">
                                            <h1 class="head">
                                            {{hostel.hall_Name.toUpperCase()}}
                                            </h1>
                                            <div class="subHead">
                                            
                                            </div>
                                            <div class="primary_content">
                                            <div class="rating">4.0*</div>
                                            <div class="review">(0 Reviews)</div>
                                            <s class="old_price">#150</s>
                                            </div>
                                            <div class="primary_content">
                                                <div class="discount">Save upto 50% off</div>
                                                <div class="new_price">#{{hostel.fees}}</div>
                                            </div>
                                            <div style="width: 100%;">
                                                <h3 class="detail-head">Details</h3>
                                                <div class="detail-content" style="display: flex; flex-direction: column; padding: 10px;">
                                                    <div class="primary-content" style="display: flex; flex-direction: row;">
                                                        <div class="cont">Hall Code</div>
                                                        <div class="cont_val">{{hostel.hall_Code}}</div>
                                                    </div>
                                                    <div class="primary-content" style="display: flex; flex-direction: row;">
                                                        <div class="cont">Number of Rooms</div>
                                                        <div class="cont_val">{{hostel.room_No}}</div>
                                                    </div>
                                                    <div class="primary-content" style="display: flex; flex-direction: row;">
                                                        <div class="cont">Number of Bed Space</div>
                                                        <div class="cont_val">{{hostel.bed_No}}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="user.bed">
                                                <v-card v-if="user.bed.paid " style="padding:10px; color: #fff; display: flex; justify-content: center;" >
                                                     <div style="padding:5px; color:red; font-size: 13px; font-weight: 500">You've Already Booked and Paid for a Room</div>
                                                </v-card>
                                                <div v-else>
                                                    <v-btn :disabled="valid" @click.prevent="cancelBooking()" style="width: 100%; color: #fff" color="red">
                                                        <span v-if="loading">
                                                            <div class="m-loader"></div>
                                                        </span>
                                                        <span v-else>Cancel Active Booking</span>
                                                    </v-btn>
                                                </div>
                                            </div>
                                            <div v-else>
                                                <v-btn :disabled="valid" @click.prevent="bookHostel()" style="width: 100%; color: #fff" color="rgb(43, 94, 86)">
                                                    <span v-if="loading">
                                                        <div class="m-loader"></div>
                                                    </span>
                                                    <span v-else>{{btn}}</span>
                                                </v-btn>
                                            </div>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                           <div v-if="user.bed">
                                <div :class="user.bed.paid ? 'pd' : 'not_pd'">
                                    <v-divider v-if="show || user.bed"></v-divider>
                                    <div style="padding-top: 7px;">
                                        <h3>
                                            You have be assigned to room  {{user.bed.roomID.room_No}} bed space {{user.bed.Bed_No}} at {{user.bed.hallID.hall_Name}}
                                        </h3>
                                    </div>
                                    <div class="paymentId" style="margin-top:10px; width:100%" v-if="show || user.bed">
                                        Generated PaymentID
                                        <div>
                                            <v-row style="width:100%">
                                            <v-col md="2" sm="3" style="padding : 0px 12px;">
                                                <v-subheader>PaymentID</v-subheader>
                                            </v-col>
                                            <v-col  md="7" sm="6" style="padding : 0px 12px;">
                                            <v-card style="padding:10px; background-color: red; color: #fff; display: flex; justify-content: center;" >
                                                {{user.bed._id}}
                                            </v-card>
                                            </v-col>
                                        </v-row>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </v-container>
                    </div>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
  import {EventBus} from "@/main"

export default {
    name: "AddHostel",
    data : ()=> {
        return {
            user:"",
            hostel: "",
            err: "",
            show:false,
            loading: false,
            valid: false,
            detail: "",
            btn: "BOOK NOW"
        }
    },
     computed: {
      
    },
    mounted() {
        this.fetchHostelDetail(),
        this.getAuthUser()
    },
    methods: {
      async fetchHostelDetail () {
        const id = this.$route.params.id
        const response = await this.$http.get(`/api/booking/hostelDetail/${id}`)
        this.hostel = response.data.payload[0]
        console.log(this.hostel)
      },
      async bookHostel () {
          this.valid = true;
          this.loading= true
          const id = this.$route.params.id
          const response = await this.$http.post("/api/booking/create", {
              hostelID : id,
          })
          this.$swal({
              icon: "success",
              title:"Your Booking was successful",
              showConfirmationButton : true
          })
          EventBus.$emit("Success", {
              msg : response.data.booking
          })
          this.getAuthUser()
        this.valid = false;
        this.loading= false
        this.show = true
      },
      async getAuthUser() {
            const response = await this.$http.get("/api/user/getAuthUser")
            this.user = response.data.user[0]
      },
      async cancelBooking () {
          const response = await this.$http.get("/api/booking/cancel")
          this.getAuthUser()
          this.show= false
          this.$swal({
              icon: "success",
              title:"Booking has been cancelled",
              showConfirmationButton : true
          })
          this.msg = response.data.msg
      }
    },
    components: {
        // Drawer
    }
}
</script>

<style scoped>
    .dashboard-wrap{
        margin: 10px 10px;
    }
    .dashboard-title{
        font-size: 24px;
        padding: 0 0 20px 50px;
    }
    .content_wrap {
    padding: 0.5rem 1rem;
    color: black;
    }
    .pd {
        display: none;
    }
    .not_pd {
        display: block;
    }
    .head {
        font-size: 18px;
        color: black;
        font-weight: 500;
        padding: 0 0 0.7rem 0;
    }
    .subHead {
        color: #535252;
        font-size: 13px;
        padding: 0 0 1.3rem 0;
    }
    .primary_content {
        display: flex;
        flex-direction: row;
        justify-content: stretch;
        align-items: center;
        padding: 0 0 0.5rem 0;
    }
    .rating {
        background-color: orangered;
        border-radius: 1rem;
        font-size: 12px;
        font-weight: 700;
        margin-right: 0.7rem;
        width: 4rem;
        padding: 2px;
        text-align: center;
        color: #fff;
    }
    .review {
        font-size: 12px;
        color: lightgray;
        width: 100%;
    }
    .old_price {
        font-size: 13px;
        color: #888383;
    }
    .discount {
        color: #26a2ca;
        font-size: 12px;
        width: 100%;
    }
    .new_price {
        font-size: 20px;
        color: #464242;
        font-weight: 50;
    }
    .views {
        color: black;
        padding: 8px;
        font-size: 13px;
    }
    .detail-head{
        font-size: 18px;
        color: black;
        font-weight: 500;
    }
    .detail-content{
        display: flex;
        flex-direction: column;
    }
    .primary-detail{
        display: flex;
        flex-direction: row;
        color: red;
    }
    .cont{
        color: black;
        font-size: 13px;
        width: 100%;
    }
    .cont_val{
        font-size: 17px;
        color: #464242;
        font-weight: 50;
    }
    .m-loader {
        border: 3px solid hsla(185, 100%, 62%, 0.2);
        border-top-color: #3cefff;
        border-radius: 50%;
        margin: auto;
        width: 1.4em;
        height: 1.4em;
        animation: spin 1s linear infinite;
    }
    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>