use booking_app;
db.dropBataBase();

db.guests.insertMany([ // NEW
  {
    name: "Alex Turner",
    email: "tranquilhotelfuntimes@pretense.com"
    checkedIn: "Yes"
  },
]);
