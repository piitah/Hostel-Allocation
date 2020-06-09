<template>
    <div class="dashboard-wrap">
        <div>
            <h3 class="dashboard-title">Assign Role / Edit Student Info</h3>
            <div class="wrap">
                <div class="title">
                    Fill All Info
                </div>
                <div class="profile-container">
                    <div>
                        Edit Student Info
                         <v-form @submit.prevent="submit()">
                            <v-container>
                                 <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;">
                                        <v-subheader>Matric No.</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-text-field
                                        v-model="matric_no"
                                        :error-messages="matric_noErrors"
                                        label="Matric No."
                                        outlined
                                        dense
                                        required
                                        @input="$v.matric_no.$touch()"
                                        @blur="$v.matric_no.$touch()"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;">
                                        <v-subheader>Username</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-text-field
                                        v-model="name"
                                        :error-messages="nameErrors"
                                        label="Username"
                                        outlined
                                        dense
                                        required
                                        @input="$v.name.$touch()"
                                        @blur="$v.name.$touch()"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;">
                                        <v-subheader>Email</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-text-field
                                        v-model="email"
                                        :error-messages="emailErrors"
                                        label="Email"
                                        outlined
                                        dense
                                        required
                                        @input="$v.email.$touch()"
                                        @blur="$v.email.$touch()"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;" >
                                        <v-subheader>Role</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-select
                                            v-model="role"
                                            :items="items"
                                            :error-messages="roleErrors"
                                            label="Role"
                                            outlined
                                            dense
                                            required
                                            @input="$v.role.$touch()"
                                            @blur="$v.role.$touch()"
                                            ></v-select>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;" >
                                        <v-subheader>Contact No</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-text-field
                                        v-model="contact_No"
                                        :error-messages="contact_NoErrors"
                                        label="Contact Number"
                                        outlined
                                        dense
                                        required
                                        @input="$v.contact_No.$touch()"
                                        @blur="$v.contact_No.$touch()"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;" >
                                        <v-subheader>Guardian Name.</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-text-field
                                        v-model="guardian_Name"
                                        :error-messages="guardian_NameErrors"
                                        label="Guardian Name"
                                        outlined
                                        dense
                                        required
                                        @input="$v.guardian_Name.$touch()"
                                        @blur="$v.guardian_Name.$touch()"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                 <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;">
                                        <v-subheader>Guardian Number</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-text-field
                                        v-model="guardian_No"
                                        :error-messages="guardian_NoErrors"
                                        label="Guardian Number"
                                        required
                                        outlined
                                        dense
                                        @input="$v.guardian_No.$touch()"
                                        @blur="$v.guardian_No.$touch()"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;">
                                        <v-subheader></v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-btn :disabled="valid" color="primary" type="submit" style="width: 100%">
                                            <span v-if="loading">
                                                <div class="m-loader"></div>
                                            </span>
                                            <span v-else>{{btn}}</span>
                                        </v-btn>
                                    </v-col>
                                </v-row>
                                
                            </v-container>
                        </v-form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required } from 'vuelidate/lib/validators'

export default {
    name: "AddHostel",

    mixins: [validationMixin],

    validations: {
      name: { required },
      matric_no: {required},
      email: {required},
      guardian_Name: {required},
      guardian_No: {required},
      contact_No: {required},
      role: {required}
    },
    data : ()=> {
        return {
           name: "",
           matric_no : "",
           email: "",
           guardian_No: "",
           guardian_Name: "",
           contact_No: "",
           btn:"Save",
           loading:false,
           valid: false,
           role: "",
            items: ["Agent","User"],
        }
    },
     computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      roleErrors () {
        const errors = []
        if (!this.$v.role.$dirty) return errors
        !this.$v.role.required && errors.push('Role is required.')
        return errors
      },
      matric_noErrors () {
        const errors = []
        if (!this.$v.matric_no.$dirty) return errors
        !this.$v.matric_no.required && errors.push('Matric Number is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.required && errors.push('Email is required.')
        return errors
      },
      guardian_NameErrors () {
        const errors = []
        if (!this.$v.guardian_Name.$dirty) return errors
        !this.$v.guardian_Name.required && errors.push('Guardian Name is required.')
        return errors
      },
      guardian_NoErrors () {
        const errors = []
        if (!this.$v.guardian_No.$dirty) return errors
        !this.$v.guardian_No.required && errors.push('Guardian Number is required.')
        return errors
      },
      contact_NoErrors () {
        const errors = []
        if (!this.$v.contact_No.$dirty) return errors
        !this.$v.contact_No.required && errors.push('Contact Number is required.')
        return errors
      }
    },
    mounted() {
        this.getStudentDetails()
    },
    methods: {
        async submit () {
            this.$v.$touch()
          if (this.$v.$invalid) {
            return;
          } else {
              let id = this.$route.params.id
                this.valid = true
                this.loading= true
                await this.$http.post(`/api/user/assignRole/${id}`, {
                    name: this.name,
                    matric_no : this.matric_no,
                    email : this.email,
                    guardian_No: this.guardian_No,
                    guardian_Name : this.guardian_Name,
                    contact_No : this.contact_No,
                    role: this.role
                })
                .then(response => {
                     this.successMsg = response.data.payload
                    this.$router.push({
                        path: "/admin/manage-student"
                    })
                    this.valid = false
                    this.loading= false
                })
               .catch(err => {
                   this.errMsg = err.response.data.error
                  this.loading= false
                  this.valid= false
               })
                this.$v.$reset()
          }
        },
        async getStudentDetails () {
                let id = this.$route.params.id
                const response = await this.$http.get(`/api/user/getUser/${id}`)
                this.name = response.data.payload[0].name
                this.matric_no = response.data.payload[0].matric_no
                this.email = response.data.payload[0].email
                this.guardian_No = response.data.payload[0].guardian_No
                this.guardian_Name = response.data.payload[0].guardian_Name
                this.contact_No = response.data.payload[0].contact_No
                this.role = response.data.payload[0].role
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
        padding: 10px;
        box-shadow:  0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
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