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
    phone: {
        type: String,
        label: "Phone"
    },
    email: {
        type: String,
        label: "Email"
    },
    country: {
        type: String,
        label: "Country"
    },
    lastExamination: {
        type: String,
        label: "Last Examination"
    },
    nextExamination: {
        type: String,
        label: "Next Examination"
    },
    status: {
        type: Number,
        label: "Status"
    },
    condition: {
        type: String,
        label: "Condition"
    },
    payment: {
        type: String,
        label: "Payment"
    },
    transaction: {
        type: String,
        label: "Transaction"
    },
    dataset1: {
        type: [Number],
        label: "dataset1"
    },
    dataset2: {
        type: [Number],
        label: "dataset2"
    },
    dataset3: {
        type: [Number],
        label: "dataset3"
    }
});