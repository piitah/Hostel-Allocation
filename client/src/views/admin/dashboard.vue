<template>
    <div class="dashboard-wrap">
        <div>
            <h3 class="dashboard-title">Dashboard</h3>
            <div>
    <v-row dense>
        <v-col cols="12" sm="6" md="4">
          <v-card
            color="#fff"
            dark
          >
            <div class="report-wrap-2">
                <div class="report-no">{{students.length}}</div>
                <div class="report-name">STUDENTS</div>
            </div>

            <v-card-actions style="display: flex; justify-content: center">
             <router-link to="/admin/manage-student"  style="text-decoration: none;">
              <v-btn text class="link" style="color: black ">See All</v-btn></router-link>
            </v-card-actions>
          </v-card>
        </v-col> <v-col xs="12" sm="6"  md="4">
          <v-card
            color="#fff"
            dark
          >
            <div class="report-wrap-3">
                <div class="report-no">{{halls.length}}</div>
                <div class="report-name">HALL</div>
            </div>

             <v-card-actions style="display: flex; justify-content: center">
             <router-link to="/admin/hostel-report" style="text-decoration: none;">
              <v-btn text class="link" style="color: black ">See All</v-btn></router-link>
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- <v-col cols="12" sm="6"  md="4">
          <v-card
            color="#fff"
            dark
          >
            <div class="report-wrap">
                <div class="report-no">{{rooms.length}}</div>
                <div class="report-name">TOTAL ROOM</div>
            </div>

            <v-card-actions>
              <v-btn text class="link" style="color: black ">See All</v-btn>
            </v-card-actions>
          </v-card>
        </v-col> -->
      </v-row>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Dasboard",
    data : ()=> {
        return {
          halls: "",
          rooms: "",
          students: ""
        }
    },
    mounted() {
      this.fetch()
    },
    methods: {
      async fetch () {
        const response = await this.$http.get("/api/room/halls")
        this.halls = response.data.halls;
        this.rooms = response.data.rooms;
        this.students = response.data.users
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
</style>