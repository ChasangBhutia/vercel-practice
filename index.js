import express from 'express';

const port = 3000;
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/api/details',(req,res)=>{
    res.json({name:"Chasang"});
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on port${port}`);
})