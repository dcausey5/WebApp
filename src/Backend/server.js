const express = require('express');
const oracledb = require('oracledb');
const cors = require ('cors');
const app = express();
const PORT = 5000;
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/line',(req,res)=>{
    async function fetchDataCustomers(){
        console.log("Trying to connect...")
        try{
            console.log("Trying to connect almost...")
            oracledb.initOracleClient({libDir: "C:\\instantclient-basic-windows.x64-21.9.0.0.0dbru(1)\\instantclient_21_9"})
            
            const connection = await oracledb.getConnection({
                user:'dcausey',
                password: 'Mtc8cCAgaTSItvq13kOnvl3e',
                connectString:'oracle.cise.ufl.edu/orcl'
                
            });
            console.log("Successfully connected to Oracle Database");

            const result = await connection.execute(
                `SELECT*FROM lk`
            );
            return result.rows;
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