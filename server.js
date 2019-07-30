const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

app.set('views',__dirname+'/build')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/data', async function(req,res){

    let data = await getdata()
    
    res.send(data);
})

function getdata(){

    let _promise = new Promise((res,rej)=>{
        let data =[{val:"A"},{val:"B"},{val:"C"},{val:"E"}];

        setInterval(()=>{
            res({msg:'ok',data,data})
        },5000)
        
    })

    return _promise
}

app.use("/",express.static(__dirname+"/build/"));

app.get('*',function(req,res){
    res.render("index.html");
})

app.listen(port,(req,res)=>{
    console.log(`app running on ${port}`)
})
