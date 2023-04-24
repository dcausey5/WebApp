const express = require('express');
const oracledb = require('oracledb');
const app = express();
const PORT = 5000;

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/borders',(req,res)=>{
    async function fetchDataCustomers(){
        console.log("Trying to connect...")
        try{
            console.log("Trying to connect almost...")
            
            const connection = await oracledb.getConnection({
                user:'DCAUSEY',
                password: 'Mtc8cCAgaTSItvq13kOnvl3e',
                connectString:'oracle.cise.ufl.edu/orcl'
                
            });
            console.log("Successfully connected to Oracle Database");
            const result = await connection.execute('SELECT * FROM airport');
            return result;
        }
        catch(error){
            console.log("Not Connected");
            return error;
        }
    }
    fetchDataCustomers().
    then(dbRes =>{
        res.send(dbRes);
    })
    .catch(err=>{
        res.send(err)
    })
})
app.listen(5000,
    ()=>
    {console.log(`listen to port ${PORT}`);
})