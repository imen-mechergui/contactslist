const express=require ("express")
const app=express()
const connectDb=require('./config/connectDb')
//midlleware
app.use(express.json());
//connectDb
connectDb();
//routes
app.use("/api/contacts",require("./routes/contact"))
// Create port
const port = process.env.PORT || 5000;
// Launch the serveer
app.listen(port, (error) =>
  error ? console.log(error) : console.log(`The server is running on port ${port}`)
);