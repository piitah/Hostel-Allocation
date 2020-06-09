<template>
    <div class="dashboard-wrap">
        <div>
            <v-card class="profile-container">
                <div class="profile-header">
                    <h3>Welcome, {{user.name}}</h3>
                </div>
            </v-card>
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-card>
                            <div style="display: flex; justify-content: center;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="181" viewBox="0 0 53 53">
                                    <path
                                    d="M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z"
                                    fill="#e7eced"
                                    />
                                    <path
                                    d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z"
                                    fill="#757575"
                                    />
                                </svg>
                            </div>
                            <v-dialog v-model="dialog" max-width="300px">
                                <template v-slot:activator="{ on }">
                                    <v-btn v-on="on" style="width: 100%; color: #fff; margin: 10px 0 0 0" color="#26a2ca">
                                        Edit Profile
                                    </v-btn>
                                </template>
                                        <v-card>
                                    <v-form @submit.prevent="editUser()">
                    
                                    <v-container>
                                        <v-text-field
                                            type="number"
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
                                            dense
                                            @input="$v.username.$touch()"
                                            @blur="$v.username.$touch()"
                                            v-model="username"
                                            label="Username"
                                        ></v-text-field>
                                        <v-text-field
                                            type="email"
                                            :error-messages="emailErrors"
                                            required
                                            dense
                                            @input="$v.email.$touch()"
                                            @blur="$v.email.$touch()"
                                            v-model="email"
                                            label="email"
                                        ></v-text-field>
                                            <v-text-field
                                            v-model="contact_No"
                                            :error-messages="contact_NoErrors"
                                            label="Contact No."
                                            dense
                                            required
                                            @input="$v.contact_No.$touch()"
                                            @blur="$v.contact_No.$touch()"
                                            ></v-text-field>
                                            <v-text-field
                                            v-model="guardian_Name"
                                            :error-messages="guardian_NameErrors"
                                            label="Guardian Name"
                                            dense
                                            required
                                            @input="$v.guardian_Name.$touch()"
                                            @blur="$v.guardian_Name.$touch()"
                                            ></v-text-field>
                                            <v-text-field
                                            v-model="guardian_No"
                                            :error-messages="guardian_NoErrors"
                                            label="Guardian No."
                                            dense
                                            required
                                            @input="$v.guardian_No.$touch()"
                                            @blur="$v.guardian_No.$touch()"
                                            ></v-text-field>
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
                                            <span v-else style="color:#fff">{{ btn}}</span>
                                        </v-btn>
                                        </div>
                                    </v-container>
                                </v-form>
                                </v-card>
                            </v-dialog>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-card style="width: 100%;">
                            <div style="padding:10px 15px;">
                                <v-tabs v-model="tab"  class="elevation-2" :right="right" :grow="grow">
                                    <v-tab style="font-size: 12px;">Student Info</v-tab>
                                    <v-tab style="font-size: 12px;">Room Info</v-tab>
                                </v-tabs>
                                <v-tabs-items v-model="tab">
                                    <v-tab-item>
                                 <v-list
                                two-line
                                 >  
                               <v-row>
                                   <v-col cols="6" md="4" style="padding:1px !important;">
                                        <v-list-item>
                                            <v-list-item-content>
                                            <v-list-item-title class="fontt">Full Name</v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                   </v-col>
                                   <v-col cols="6" md="6" style="padding:1px !important;">
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-subtitle>{{user.name}}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                   </v-col>
                               </v-row>
                               <v-divider></v-divider>
                                <v-row>
                                    <v-col cols="6" md="4" style="padding:1px !important;">
                                        <v-list-item>
                                            <v-list-item-title class="fontt">Matric Number</v-list-item-title>
                                        </v-list-item>
                                   </v-col>
                                   <v-col cols="6" md="6" style="padding:1px !important;">
                                        <v-list-item>
                                            <v-list-item-subtitle>{{user.matric_no}}</v-list-item-subtitle>
                                        </v-list-item>
                                   </v-col>
                                </v-row>
                                <v-divider></v-divider>
                                <v-row>
                                    <v-col cols="6" md="4" style="padding:1px !important;">
                                        <v-list-item>
                                            <v-list-item-title class="fontt">Email Address</v-list-item-title>
                                        </v-list-item>
                                   </v-col>
                                   <v-col cols="6" md="6" style="padding:1px !important;">
                                        <v-list-item>
                                            <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
                                        </v-list-item>
                                   </v-col>
                                </v-row>
                                <v-divider></v-divider>
                                <v-row>
                                    <v-col cols="6" md="4" style="padding:1px !important;">
                                        <v-list-item>
                                            <v-list-item-title class="fontt">Contact</v-list-item-title>
                                        </v-list-item>
                                   </v-col>
                                   <v-col cols="6" md="6" style="padding:1px !important;">
                                        <v-list-item>
                                            <v-list-item-subtitle>{{user.contact_No}}</v-list-item-subtitle>
                                        </v-list-item>
                                   </v-col>
                                </v-row>
                                <v-divider></v-divider>
                                <v-row>
                                    <v-col cols="6" md="4" style="padding:1px !important;">
                                        <v-list-item>
                                            <v-list-item-title class="fontt">Guardian Name</v-list-item-title>
                                        </v-list-item>
                                   </v-col>
                                   <v-col cols="6" md="6" style="padding:1px !important;">
                                        <v-list-item>
                                            <v-list-item-subtitle>{{user.guardian_Name}}</v-list-item-subtitle>
                                        </v-list-item>
                                   </v-col>
                                </v-row>
                                <v-divider></v-divider>
                                <v-row>
                                    <v-col cols="6" md="4" style="padding:1px !important;">
                                        <v-list-item>
                                            <v-list-item-title class="fontt">Guardian Number</v-list-item-title>
                                        </v-list-item>
                                   </v-col>
                                   <v-col cols="6" md="6" style="padding:1px !important;">
                                        <v-list-item>
                                            <v-list-item-subtitle>{{user.guardian_No}}</v-list-item-subtitle>
                                        </v-list-item>
                                   </v-col>
                                </v-row>
                                </v-list>
                                    </v-tab-item>
                                    <v-tab-item>
                                 <v-list
                                two-line
                                 v-if="hostel">  
                                        <v-row>
                                            <v-col cols="6" md="4" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-content>
                                                        <v-list-item-title class="fontt">Hall Name</v-list-item-title>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                            </v-col>
                                            <v-col cols="6" md="6" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-content>
                                                            <v-list-item-subtitle>{{hostel.hallID.hall_Name}} Samuel</v-list-item-subtitle>
                                                        </v-list-item-content>
                                                    </v-list-item>
                                            </v-col>
                                        </v-row>
                                        <v-divider></v-divider>
                                            <v-row>
                                                <v-col cols="6" md="4" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-title class="fontt">Hall Code</v-list-item-title>
                                                    </v-list-item>
                                            </v-col>
                                            <v-col cols="6" md="6" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-subtitle>{{hostel.hallID.hall_Code}}</v-list-item-subtitle>
                                                    </v-list-item>
                                            </v-col>
                                            </v-row>
                                            <v-divider></v-divider>
                                            <v-row>
                                                <v-col cols="6" md="4" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-title class="fontt">Room Number</v-list-item-title>
                                                    </v-list-item>
                                            </v-col>
                                            <v-col cols="6" md="6" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-subtitle>{{hostel.roomID.room_No}}</v-list-item-subtitle>
                                                    </v-list-item>
                                            </v-col>
                                            </v-row>
                                            <v-divider></v-divider>
                                            <v-row>
                                                <v-col cols="6" md="4" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-title class="fontt">Seater/Bed space</v-list-item-title>
                                                    </v-list-item>
                                            </v-col>
                                            <v-col cols="6" md="6" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-subtitle>{{hostel.Bed_No}}</v-list-item-subtitle>
                                                    </v-list-item>
                                            </v-col>
                                            </v-row>
                                            <v-divider></v-divider>
                                            <v-row>
                                                <v-col cols="6" md="4" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-title class="fontt">Payment ID</v-list-item-title>
                                                    </v-list-item>
                                            </v-col>
                                            <v-col cols="6" md="6" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-subtitle>{{hostel._id}}</v-list-item-subtitle>
                                                    </v-list-item>
                                            </v-col>
                                            </v-row>
                                            <v-divider></v-divider>
                                            <v-row>
                                                <v-col cols="6" md="4" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-title class="fontt">Price</v-list-item-title>
                                                    </v-list-item>
                                            </v-col>
                                            <v-col cols="6" md="6" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-subtitle>{{hostel.hallID.fees}}</v-list-item-subtitle>
                                                    </v-list-item>
                                            </v-col>
                                            </v-row>
                                            <v-divider></v-divider>
                                            <v-row>
                                                <v-col cols="6" md="4" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-title class="fontt">Payment Status</v-list-item-title>
                                                    </v-list-item>
                                            </v-col>
                                            <v-col cols="6" md="6" style="padding:1px !important;">
                                                    <v-list-item>
                                                        <v-list-item-subtitle :class="hostel.paid ? 'paid' : 'pending'">{{hostel.paid ? 'Paid' : 'Pending'}}</v-list-item-subtitle>
                                                    </v-list-item>
                                            </v-col>
                                            </v-row>
                                        </v-list>
                                        <div v-else>
                                            <div style="width: 100%;">
                                                <div style="display: flex; padding: 60px; justify-content: center"><h3>Details not Available</h3></div>
                                            </div>
                                        </div>
                                    </v-tab-item>
                                </v-tabs-items>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'
import {EventBus} from "@/main"

export default {
    name: "Profile",
    data : ()=> {
        return {
            username: '',
            matric_no: "",
            email: '',
            contact_No: "",
            guardian_Name: "",
            guardian_No: "",
            user : "",
            hostel:"",
            success: "",
            dialog: false,
            btn: "Edit",
            tab: null
        }
    },
     mixins: [validationMixin],
    validations: {
      contact_No: {required},
      guardian_No: {required},
      guardian_Name: {required},
       matric_no: { required },
      email: { required, email },
      username: {required}
    },
    computed: {
        contact_NoErrors () {
        const errors = []
        if (!this.$v.contact_No.$dirty) return errors
        !this.$v.contact_No.required && errors.push('contact No is required.')
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
        !this.$v.guardian_No.required && errors.push('Guardian No is required.')
        return errors
      },
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
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },
    mounted() {
        EventBus.$on("Success", (event)=> {
            console.log(event.msg)
        }),
        this.getAutUser()
        this.getAutHostel()
    },
    methods: {
        async getAutUser () {
            const response = await this.$http.get("/api/user/getAuthUser")
            this.user = response.data.user[0]
            this.username = response.data.user[0].name
            this.matric_no = response.data.user[0].matric_no
            this.email = response.data.user[0].email
            this.guardian_No = response.data.user[0].guardian_No
            this.guardian_Name = response.data.user[0].guardian_Name
            this.contact_No = response.data.user[0].contact_No
        },
         async getAutHostel () {
            const response = await this.$http.get("/api/room/authHostel")
            this.hostel = response.data.payload[0]
        },
        async editUser () {
            const response = this.$http.post("/api/user/edit", {
                name: this.username,
                matric_no : this.matric_no,
                email : this.email,
                guardian_no: this.guardian_No,
                guardian_name : this.guardian_Name,
                contact_no : this.contact_No
            })
            this.getAutUser();
            this.msg = response.data.payload
        }
    },
}
</script>

<style scoped>
    .dashboard-wrap{
        margin: 20px 20px;
    }
    .dashboard-title{
        font-size: 24px;
        padding: 0 0 20px 0;
    }
    .profile-container{
        width: 100%;
        background-color: #fff;
        margin:20 20 10 20px;
        padding: 20px;
        box-shadow:  0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }
    .paid {
        color: rgb(37, 194, 37) !important;
    }
    .pending{
        color: red
    }
    .fontt{
        font-size: 13px;
    }
</style>