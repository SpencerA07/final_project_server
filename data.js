var data = {
  users: [
    {
      username: "admin",
      password: "admin",
      checkingAcct: 10,
      savingsAcct: 5
    },
    {
      username: "test",
      password: "test",
      checkingAcct: 0,
      savingsAcct: 0
    }
  ],

  test: [
    {
      name: "Mow the lawn",
      completed: false,
      editing: false,
      created_on: new Date()
    },
    {
      name: "Do Laundry",
      completed: false,
      editing: false,
      created_on: new Date()
    }
  ]
};

module.exports = data;