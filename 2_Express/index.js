//dependencies
const fs = require('fs')
const request = require('request'); //function
const express = require('express')
const app = express()
app.use(express.urlencoded())
app.use(express.json())

//key.json에서 가져와야함.
const key = JSON.parse(fs.readFileSync('./key.json')).api

const url = 'http://openapi.tago.go.kr/openapi/service/BusLcInfoInqireService/getCtyCodeList';
const queryParams = '?' + encodeURIComponent('ServiceKey') + '='+key; /* Service Key*/
// queryParams += '&' + encodeURIComponent('파라미터영문명') + '=' + encodeURIComponent('파라미터기본값'); /* 파라미터설명 */

app.listen(3000, () => {
	console.log('server has started up on port 3000')
})

let result = ''
request.get(url+queryParams, 'GET', function(err,res,body){
  if(err) //TODO: handle err
  if(res.statusCode !== 200 ) //etc
  //TODO Do something with response
	console.log('Status', res.statusCode);
    console.log('Headers', JSON.stringify(res.headers));
    console.log('Reponse received', body);
    result = body
});

/*
request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    // console.log('Status', response.statusCode);
    // console.log('Headers', JSON.stringify(response.headers));
    // console.log('Reponse received', body);
});
*/

app.get('/', async (req, res) => {
	const json = {success: true}
	res.send(result)
})