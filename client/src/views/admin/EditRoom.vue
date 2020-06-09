<template>
    <div class="dashboard-wrap">
        <div>
            <h3 class="dashboard-title">Edit Hostel</h3>
            <v-card style="margin:10px;">
                <div class="title">
                    Fill All Info
                </div>
                <div class="profile-container">
                    <div>
                        Hostel Related Info
                         <v-form @submit.prevent="submit()">
                            <v-container>
                                <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;">
                                        <v-subheader>Hostel Name</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-text-field
                                        v-model="name"
                                        :error-messages="nameErrors"
                                        label="Hostel Name"
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
                                        <v-subheader>Hostel code</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-text-field
                                        v-model="hostel_code"
                                        :error-messages="hostel_codeErrors"
                                        label="Hostel Code"
                                        outlined
                                        dense
                                        required
                                        @input="$v.hostel_code.$touch()"
                                        @blur="$v.hostel_code.$touch()"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;">
                                        <v-subheader>Number Of Rooms</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-text-field
                                        v-model="Room_No"
                                        :error-messages="Room_NoErrors"
                                        label="Number of Rooms in the Hostel."
                                        outlined
                                        dense
                                        required
                                        @input="$v.Room_No.$touch()"
                                        @blur="$v.Room_No.$touch()"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;">
                                        <v-subheader>Number of Beds</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-text-field
                                        v-model="Bed_No"
                                        :error-messages="Bed_NoErrors"
                                        label="Number of bed space per Room."
                                        outlined
                                        dense
                                        required
                                        @input="$v.Bed_No.$touch()"
                                        @blur="$v.Bed_No.$touch()"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;" >
                                        <v-subheader>Price</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-text-field
                                        v-model="Room_Price"
                                        :error-messages="Room_PriceErrors"
                                        label="Room Price"
                                        outlined
                                        dense
                                        required
                                        @input="$v.Room_Price.$touch()"
                                        @blur="$v.Room_Price.$touch()"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                 <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;">
                                        <v-subheader>Location</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-text-field
                                        v-model="Location"
                                        :error-messages="LocationErrors"
                                        label="Location"
                                        required
                                        outlined
                                        dense
                                        @input="$v.Location.$touch()"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;">
                                        <v-subheader>Photo</v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <input
                                            name="Upload Image"
                                            required
                                            type="file"
                                            @change="onSelectedFile"
                                        >
                                        
                                    </v-col>
                                </v-row>
                                 
                                <v-row>
                                    <v-col cols="3" md="2" sm="3" style="padding : 0px 12px;">
                                        <v-subheader></v-subheader>
                                    </v-col>
                                    <v-col cols="9" md="7" sm="6" style="padding : 0px 12px;">
                                        <v-btn :disabled="true" color="primary" type="submit" style="width: 100%">
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
            </v-card>
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
      Location: {required},
      Room_No: {required},
      Bed_No: {required},
      Room_Price: {required},
      hostel_code: {required},
      img: {required}
    },
    data : ()=> {
        return {
           name: "",
           img: "",
           Room_No : "",
           Bed_No: "",
           Location: "",
           Room_Price: "",
           hostel_code: "",
           loading: false,
           valid:false,
           btn: "Submit",
           successMsg: ""
        }
    },
    mounted() {
    },
     computed: {
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      imgErrors () {
        const errors = []
        if (!this.$v.img.$dirty) return errors
        !this.$v.img.required && errors.push('Image is required.')
        return errors
      },
      hostel_codeErrors () {
        const errors = []
        if (!this.$v.hostel_code.$dirty) return errors
        !this.$v.hostel_code.required && errors.push('Hostel Code is required.')
        return errors
      },
      LocationErrors () {
        const errors = []
        if (!this.$v.Location.$dirty) return errors
        !this.$v.Location.required && errors.push('Location is required.')
        return errors
      },
      Room_PriceErrors () {
        const errors = []
        if (!this.$v.Room_Price.$dirty) return errors
        !this.$v.Room_Price.required && errors.push('Price is required.')
        return errors
      },
      Room_NoErrors () {
        const errors = []
        if (!this.$v.Room_No.$dirty) return errors
        !this.$v.Room_No.required && errors.push('Room no. is required.')
        return errors
      },
      Bed_NoErrors () {
        const errors = []
        if (!this.$v.Bed_No.$dirty) return errors
        !this.$v.Bed_No.required && errors.push('Bed no. is required.')
        return errors
      },
    },
    methods: {
      async submit () {
        this.$v.$touch()
          if (this.$v.$invalid) {
            return;
          } else {
                this.valid = true
                this.loading= true
                await this.$http.post("/api/room/create", {
                    hall_Name: this.name,
                    location : this.Location,
                    hall_Code: this.hostel_code,
                    fees: this.Room_Price,
                    room_No: this.Room_No,
                    bed_No: this.Bed_No,
                    img: this.img
                })
                .then(response => {
                     this.successMsg = response.data.payload
                    this.$router.push({
                        path: "/admin/hostel-report"
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
                this.name = ''
                this.Location = ''
                this.hostel_code = ""
                this.Room_Price = ""
                this.img="";
                this.Bed_No = ""
                this.Room_No= ""
          }
      },
      onSelectedFile (event) {
          let image = event.target.files[0]
          let reader = new FileReader();
          reader.readAsDataURL(image);
          reader.onload = event => {
              this.img= event.target.result
          }
      }
    },
}
</script>

<style scoped>
    .dashboard-wrap{
        margin: 10px 10px;
    }
    .dashboard-title{
        font-size: 24px;
        padding: 0 0 20px 10px;
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