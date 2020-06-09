<template>
    <div style="position: relative" >
        <v-navigation-drawer absolute temporary v-model="drawer" style="z-index: 999" class="mobileDawer">
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
    <v-app-bar
    class="header-wrapper"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="mobileBar"></v-app-bar-nav-icon>

      <v-toolbar-title>Hall Allocation</v-toolbar-title>

      <v-spacer></v-spacer>

            <v-btn text @click.prevent="logout()">
                Logout
            </v-btn>
    </v-app-bar>

    <div class="content">
        <div class="sidebar-container">
            <Drawer class="drawer"/>
            <div style="width: 100%; background-color: #eee; min-height: 95vh;">
                <router-view></router-view>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Drawer from "@/components/SIdeDrawer"
import {mapState} from "vuex"

export default {
    name: "Admin",
    data : ()=> {
        return {
            drawer: null
        }
    },
    computed: {
      ...mapState(["Role"])
    },
    components: {
        Drawer
    },
    methods: {
        logout () {
            this.$store.dispatch("LOGOUT")
        }
    },
}
</script>

<style scoped>
    .sidebar-container{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: strech;
        width: 100%;
    }
.mobileDrawer{
    display: none;
}
.mobileBar{
    display: none;
}
.drawer{display: block;}
    @media only screen and (max-width: 800px){
        .drawer {
            display: none;
        }
        .mobileDrawer{
            display: block;
        }
        .mobileBar{
            display: block;
        }
    }
</style>