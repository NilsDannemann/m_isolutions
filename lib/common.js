TabularTables = {};

TabularTables.Patients = new Tabular.Table({
  name: 'Patients',
  collection: Patients,
  responsive: true,  // Responsive support https://github.com/aldeed/meteor-tabular/issues/201
  autoWidth: false,  // Responsive support. prevent width:px
  columns: [
    {data: 'firstname', title: 'Firstname'},
    {data: 'lastname', title: 'Lastname'},
    {data: 'phone', title: 'Phone'},
    {data: 'email', title: 'Email'},
    {data: 'country', title: 'Country'},
    {data: 'lastExamination', title: 'Last Examination'},
    {data: 'nextExamination', title: 'Next Examination'},
    {data: 'status', title: 'Status'},
    {data: 'condition', title: 'Condition'},
    {data: 'payment', title: 'Payment'},
    {data: 'transaction', title: 'Transaction'}
  ]
});