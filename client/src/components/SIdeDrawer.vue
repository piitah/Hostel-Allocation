<template>
  <v-card
    width="250"
    tile
    style="color: black!important"
    class="card"
  >
    <v-navigation-drawer permanent class="drawer">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group  color="primary">
          <router-link v-if="Role === 'Admin'" to="/admin" exact style="text-decoration: none;">
            <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                Dashboard
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </router-link>
          <router-link v-if="Role === 'User' || Role === 'Agent'"  to="/" exact style="text-decoration: none;">
            <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                My Profile
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </router-link>
          <router-link v-if="Role === 'Admin'" to="/admin/new-hostel" exact style="text-decoration: none;">
            <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-warehouse</v-icon>
            </v-list-item-icon>
              <v-list-item-content>
              <v-list-item-title>
                  Add Hall
              </v-list-item-title>
              </v-list-item-content>
          </v-list-item>
          </router-link>
          <router-link v-if="Role === 'Admin'" to="/admin/hostel-report" exact style="text-decoration: none;">
            <v-list-item >
            <v-list-item-icon>
              <v-icon>mdi-check-circle</v-icon>
            </v-list-item-icon>
              <v-list-item-content>
              <v-list-item-title>
                  Hall Report
              </v-list-item-title>
              </v-list-item-content>
          </v-list-item>
          </router-link>
           <router-link v-if="Role === 'Admin'" to="/admin/manage-student" exact style="text-decoration: none;">
             <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-nature-people</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>
                      Manage Student
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
           </router-link>
           
           <router-link v-if="Role === 'User' || Role === 'Agent'" to="/book-hostel" exact style="text-decoration: none; color: rgba(0, 0, 0, 0.87);">
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-warehouse</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>
                        Book Hall
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
           </router-link>
          <v-list-item v-if="Role === 'Agent'">
            <v-list-item-icon>
              <v-icon>mdi-nature-people</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                  <router-link  to="/agent" exact style="text-decoration: none; color: rgba(0, 0, 0, 0.87);">Payment Confirmation</router-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import {mapState} from "vuex"
  export default {
      name: "Admin",
    data: () => ({
        show: false,
        show1: false
    }),
    computed: {
      ...mapState(["Role"])
    },
  }
</script>

<style>
    .drawer{
        width: 250px !important;
        min-height: 90vh; 
        background: black
    }
    .side-link{
        text-decoration: none !important;
        color: rgba(0, 0, 0, 0.87) !important
    }
</style>