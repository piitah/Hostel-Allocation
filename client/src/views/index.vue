<template>
  <div>
      <!-- <Header/> -->
      <div style=" width:100%; height:100vh;" class="bg">
          &nbsp;
          <v-row justify="center" align="center" style=" height:90vh">
              <v-col md="3"  cols="10" class="container">
                  <div class="wrap">
                       <div class="primary-header">
                           Login
                       </div>
                  </div>
                   <div class="errMsg">{{errMsg}}</div>
                   <v-form @submit.prevent="login()"> 
                      <v-container>
                            <v-text-field
                              type="text"
                              :error-messages="matricErrors"
                              required
                              @input="$v.matric_no.$touch()"
                              @blur="$v.matric_no.$touch()"
                              v-model="matric_no"
                              label="Matric No."
                          ></v-text-field>
                          <v-text-field
                                type="password"
                              :error-messages="passwordErrors"
                              required
                              @input="$v.password.$touch()"
                              @blur="$v.password.$touch()"
                              v-model="password"
                              label="password"
                          ></v-text-field>
                          <small
                          class="ml-3 mt-2"
                          >Minimum of 8 characters </small>
                            
                            <div>
                              <v-btn 
                              class="curve w-100 mt-4"
                              type="submit"
                              :disabled="valid"
                              style="background-color:#4fc7b3; width: 100%"
                            >
                              <span v-if="loading">
                                <div class="m-loader"></div>
                              </span>
                              <span v-else style="color: #fff">{{sign_in_btn}}</span>
                            </v-btn>
                            </div>
                          <div class="mt-3">
                              <span style="font-size: 12px;">Don't have an account?
                                  <router-link to="register">Click here</router-link>
                              </span>
                          </div>
                          
                      </v-container>
                  </v-form>
              </v-col>
          </v-row>
      </div>
  </div>
</template>

<script>
// import Header from "@/components/Header"
  import { validationMixin } from 'vuelidate'
  import { required,minLength } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      password:{required, minLength: minLength(8)},
      matric_no: {required},
    },
    components: {
        // Header
    },
    data: () => ({
      matric_no: '',
      password: '',
      errMsg: "",
      valid: false,
      loading: false,
      sign_in_btn: "Sign in"
    }),

    computed: {
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('Password must be at most 8 characters long')
        !this.$v.password.required && errors.push('password is required.')
        return errors
      },
      matricErrors () {
        const errors = []
        if (!this.$v.matric_no.$dirty) return errors
        !this.$v.matric_no.required && errors.push('Matric No. is required.')
        return errors
      },
    },
    mounted() {
      console.log(this.$route.path)
    },
    methods: {
       async login () {
          this.$v.$touch()
          if (this.$v.$invalid) {
            return;
          } else {
            this.valid = true
            this.loading= true
                await this.$http.post("/api/user/login", {
                  password: this.password,
                  matric_no : this.matric_no
                }).then(response => {
                  if(response.data.error) {
                    this.errMsg = response.data.error;
                    this.$v.$reset()
                    this.password = ""
                    this.matric_no = ""
                    this.loading= false
                    this.valid= false
                  return;
                  }
                  localStorage.setItem("user_token", response.data.token)
                  localStorage.setItem("Role", response.data.user.role)
                  this.$store.dispatch("setToken",response.data.token)
                  this.$store.dispatch("setUser",response.data.user)
                  if(response.data.user.role === "Admin") {
                      this.$router.push({
                        path: "/admin"
                      });
                  }
                  if (response.data.user.role === "User" || response.data.user.role === "Agent") {
                      this.$router.push({
                        path: "/"
                      });
                  }
                })
                .catch(error => {
                  console.log(error)
                  this.errMsg = error.response.data.message
                  this.loading= false
                  this.valid= false
                })
          }
          this.$v.$reset()
          this.password = ""
          this.matric_no = ""
          this.loading= false
                  this.valid= false
      },
    },
  }
</script>

<style scoped>
.bg {
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.7)
    ),
    url(../../src/assets/img4.jpg);
  background-size: cover;
  background-position: top;
  height: 100vh;
  width: 100%;
}
.container{
   background-color: #fff; 
   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); 
   padding:10px;
}
.primary-header{
  background-color: #164046;
  padding: 16px;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
}
.errMsg{
  color: red;
  padding: 5px 0px;
  font-size: 12px;
  width:100%;
  display: flex;
  justify-content: center;
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