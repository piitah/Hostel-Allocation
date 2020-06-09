<template>
    <div class="dashboard-wrap">
        <div>
            <h3 class="dashboard-title">Halls</h3>
            <div>
    <v-row v-if="hostels">
        <v-col  v-for="hostel in hostels" :key="hostel._id" cols="12" sm="6"  md="3">
          <v-card
            color="#fff"
            dark
          >
           <img :src="hostel.image" style="width: 100%; height:180px;" alt="">
            <div class="content_wrap">
                <h3 class="head">
                {{hostel.hall_Name.toUpperCase()}}
                </h3>
                <div class="subHead">
                    <div style="width: 100%">
                        Number of Bed Space
                    </div>
                    <div style="color: #464242; font-size: 13px; font-weight:500">
                        {{hostel.bed_No}}
                    </div>
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
                <div style="display: flex; justify-content: center">
                    <v-btn small text color="#1F7087" @click.prevent="navigate(hostel._id)">Select Hall</v-btn>
                </div>
            </div>
            <div class="tag">{{hostel.room_No}} Rooms Available</div>
          </v-card>
        </v-col>
      </v-row>
      <div v-else>
          Loading.........
      </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dasboard",
    data : ()=> {
        return {
            hostels: ""
        }
    },
    components: {
        // Drawer
    },
    mounted() {
        this.getAllAvailabeHall()
    },
    methods: {
        navigate (id) {
            this.$router.push({
                name : 'viewdetail',
                params: {id : id}
            })
        },
        async getAllAvailabeHall () {
            const response = await this.$http.get("/api/booking/halls")
            this.hostels = response.data.hall
        }
    },
}
</script>

<style scoped>
    .dashboard-wrap{
        margin: 10px 30px;
    }
    .dashboard-title{
        font-size: 24px;
        padding: 0 0 20px 0;
    }
    .report-wrap{
        width: 100% ;
        background-color: #385F73;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .report-wrap-2{
        width: 100% ;
        background-color: #1F7087;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .report-wrap-3{
        width: 100% ;
        background-color: #952175;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .report-no{
        font-size: 30px;
        padding:30px 0 20px 0;
        margin: auto;
    }
    .report-name{
        font-size: 16px;
        padding:10px 0 15px 0;
        margin: auto;
    }
    .link{
        color: #999;
        font: 14px;
        margin: auto;
        font-weight:400;
    }
    .content_wrap {
    padding: 0.5rem 1rem;
    color: black;
    }
    .head {
        font-size: 12px;
        color: black;
        font-weight: 500;
        padding: 0 0 0.7rem 0;
    }
    .subHead {
        display:flex;
        flex-direction: row;
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
    .tag {
    position: absolute;
    background-color: rgb(43, 94, 86);
    z-index: 2;
    top: 4%;
    right: 0%;
    text-align: center; 
    /* transform: rotate(30deg); */
    width: 120px;
    font-size: 12px;
    color: #fff;
    padding: 4px;
  }
    .hostel{
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }
</style>