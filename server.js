/*jshint esversion: 6 */
const    express       = require('express'),
         app           = express(),
         ip            = process.env.IP,
         port          = process.env.PORT || 5000;


/**********************
*Create the Routes
***********************/
app.get('/',(req,res) =>{
res.send("this is the home page");
});

app.get('/api/customers',(req,res)=>{
const customers = [
  {
    id: 1,
    firstName: "Simba",
    lastName: "Mupfukudzwa"
  },
  {
    id: 2,
    firstName: "Natty",
    lastName: "Dreadson"
  },
  {
    id: 3,
    firstName: "Harry",
    lastName: "Porter"
  }
];
res.json(customers);
});


         app.listen(port,ip,()=>{
            console.log(`You are now connected to port: ${port}`);
         });
