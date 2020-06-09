<template>
  <div>
      <!-- <Header/> -->
      <div style=" width:100%; height:100vh;" class="bg">
          &nbsp;
          <v-row justify="center" align="center" style=" height:100vh; margin : 0px!important;">
              <v-col md="3"  cols="10" class="container" style="margin:0px;">
                   <div class="wrp">
                       <div class="primary-header">
                           REGISTER
                       </div>
                   </div>
                    <div class="errMsg">{{errMsg}}</div>
                   <v-form @submit.prevent="register()">
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
                                    type="text"
                                    :error-messages="userNameErrors"
                                    required
                                    @input="$v.username.$touch()"
                                    @blur="$v.username.$touch()"
                                    v-model="username"
                                    label="Username"
                                ></v-text-field>
                                <v-text-field
                                    type="email"
                                    :error-messages="emailErrors"
                                    required
                                    @input="$v.email.$touch()"
                                    @blur="$v.email.$touch()"
                                    v-model="email"
                                    label="email"
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
                                >Minimum of 8 characters with a mix of letters, numbers & symbols</small>
                                 
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
                                    <span v-else style="color: #fff">{{sign_up_btn}}</span>
                                  </v-btn>
                                  </div>
                                <div class="mt-3">
                                    <span style="font-size: 12px;">Already have an account?
                                        <router-link to="index">Click here</router-link>
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
  import { required, minLength, email } from 'vuelidate/lib/validators'
  
  
  export default {
    mixins: [validationMixin],

    validations: {
      matric_no: { required },
      email: { required, email },
      password:{required, minLength: minLength(8)},
      username: {required}
    },
    components: {
        // Header
    },
    data: () => ({
      username: '',
      matric_no: "",
      password: "",
      errMsg : "",
      email: '',
      valid: false,
      sign_up_btn: "Sign up",
      loading: false
    }),

    computed: {
      userNameErrors () {
        const errors = []
        if (!this.$v.username.$dirty) return errors
        !this.$v.username.required && errors.push('Name is required.')
        return errors
      },
      matricErrors () {
        const errors = []
        if (!this.$v.matric_no.$dirty) return errors
        !this.$v.matric_no.required && errors.push('Matric No. is required.')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('Name must be at most 8 characters long')
        !this.$v.password.required && errors.push('password is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      async register () {
          this.$v.$touch()
          if (this.$v.$invalid) {
            return;
          } else {
            this.valid = true
            this.loading= true
                await this.$http.post("/api/user/register", {
                  name: this.username,
                  email: this.email,
                  password: this.password,
                  matric_no : this.matric_no
                }).then(response => {
                  console.log(response.data)
                  setTimeout(()=> {
                  this.$router.push({
                    path: "/index"
                  });
                }, 1000)
                  this.valid = false
                  this.loading= false
                })
                .catch(error => {
                  this.errMsg = error.response.data.message
                  this.loading= false
                  this.valid= false
                })
          }
          this.$v.$reset()
          this.username = ''
          this.email = ''
          this.password = ""
          this.matric_no = ""
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
.primary-header{
  background-color: #164046;
  padding: 16px;
  margin: 0;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
}
.container{
   background-color: #fff; 
   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); 
   padding:10px;
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