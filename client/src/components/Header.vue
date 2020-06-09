<template>
    <div >
    <v-app-bar
    class="header-wrappr"
      dark
    >

      <v-toolbar-title>Hostel Allocation</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text>
        <router-link to="/index" style="text-decoration: none; color:#fff">Login</router-link>
      </v-btn>

      <v-btn text>
       <router-link to="/register" style="text-decoration: none; color:#fff">Register</router-link>
      </v-btn>
    </v-app-bar>
    </div>
</template>

<script>
export default {
    name: "Header",
    data : ()=> {
        return {

        }
    }
}
</script>

<style>
  .header-wrappr{
    background-color: orangered;
  }
</style>