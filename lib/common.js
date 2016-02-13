TabularTables = {};

TabularTables.Patients = new Tabular.Table({
  name: "Patients",
  collection: Patients,
  columns: [
    {data: "firstname", title: "Firstname"},
    {data: "lastname", title: "Lastname"},
    {data: "status", title: "Status"},
    {data: "condition", title: "Condition"},
    {
      tmpl: Meteor.isClient && Template.bookCheckOutCell
    }
  ]
});