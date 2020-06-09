<template>
  <div class="dashboard-wrap">
        <div>
            <h3 class="dashboard-title">Manage Student</h3>
            <div class="wrap">
                <div class="title">
                    All student Details
                </div>
                <div class="profile-container">
                    <div>
                        <div>
                        <v-row>
                            <v-spacer>
                            </v-spacer>
                            <v-col cols="5" >
                                 <v-row style="display:flex; justify-content: right;">
                                    <v-col cols="2" style="padding : 0px;">
                                        <v-subheader>Search</v-subheader>
                                    </v-col>
                                    <v-col cols="6" style="padding : 0px 12px 0px 0px;">
                                        <v-text-field
                                        solo
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
                                    <th class="text-left">Matric No.</th>
                                    <th class="text-left">Email</th>
                                    <th class="text-left">Room No.</th>
                                    <th class="text-left">Contact</th>
                                    <th class="text-left">Bed No.</th>
                                    <th class="text-left">Duration</th>
                                <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, i) in desserts" :key="item.name">
                                <td>{{ i+1 }}</td>
                                <td>{{ item.calories }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.calories }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.calories }}</td>
                                <td>
                                    <div class="action">

                                       
                                        <div class="action-link"  style="padding-right: 5px;">
                                        <v-btn text style="color: #fff; text-transform : capitalize; background-color:#1F7087; font-size: 12px; font-weight: 400">
                                           <router-link to="/admin/edit-student" style="text-decoration: none; color: #fff;">Edit</router-link>
                                        </v-btn>
                                        </div>
                                        <div class="action-link" >
                                        <v-btn text style="color: #fff; text-transform : capitalize; background-color:#385F73; font-size: 12px; font-weight: 400">
                                          <router-link to="/admin/student-registration" style="text-decoration: none; color: #fff;">Allocate</router-link>
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
            </div>
        </div>
    </div>
</template>


<script>
  export default {
    data () {
      return {
          desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
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
        padding: 30px;
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