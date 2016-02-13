Patients = new Mongo.Collection("patients");

var Schemas = {};

Schemas.Patient = new SimpleSchema({
    firstname: {
        type: String,
        label: "Firstname"
    },
    lastname: {
        type: String,
        label: "Lastname"
    },
    status: {
        type: Number,
        label: "Status"
    },
    condition: {
        type: String,
        label: "Condition"
    }
});