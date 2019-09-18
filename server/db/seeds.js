use booking_app;
db.dropDatabase();

db.bookings.insertMany([ // NEW
  {
    name: "Alex Turner",
    email: "tranquilhotelfuntimes@pretense.com",
    checkedIn: "Yes"
  },
  {
    name: "Saun Ryder",
    email: "legend@wheresbez.co.uk",
    checkedIn: "No"
  }
]);
