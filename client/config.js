require("dotenv").config();

if (process.env.NODE_ENV === "production") {
    module.exports = {
        base_api: "http://bimbo-hostel.herokuapp.com"
    }
} else {
    module.exports = {
        base_api: "http://localhost:3030"
    }
}