use models;

db.dropDatabase();

db.runwayModels.insert([
{
  name: "Gisele",
  status: "legend"
},
{
  name: "Julia Nobis",
  status: "industry icon"
},
{
  name: "Anja Rubik",
  status: "industry icon"
},
{
  name: "Sara",
  status: "newcomer"
}
  ]
  );

db.runwayModels.find();
