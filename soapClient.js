
const soap = require('soap');
const url = 'http://172.22.255.246:8082/ws/live.php?wsdl';
const args = {};
const auth = {username:"212008",password:"15487107"};

soap.createClient(url, (err,client) => {
    if(err) throw err;
    //console.log(client);
    client.GetToken(auth, (eror, result) =>{
        if(eror) throw eror;
        console.log(result.output.$value);
    });
    /* client.GetTokenAsync(auth).then((result) =>{
        console.log(result)
    }); */
})