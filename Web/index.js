const tf = require('@tensorflow/tfjs');
const path = require('path');
var express=require("express");
var app = express();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
})

const upload = multer({storage:storage})

app.use(express.static("templates"));
app.set('view engine','ejs');
app.set('views', __dirname + '/templates');
async function loadModel(){
    const MODEL_URL = 'file://model.json';
    //const URL_PATH = path.resolve(__dirname,"model.json");
    console.log(MODEL_URL)
    const model = await tf.loadLayersModel(MODEL_URL);
}
//loadModel();

app.get('/loadModel',function(req,res){
    const URL_PATH = path.resolve(__dirname,"model.json");
    res.sendFile(URL_PATH);
})

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,"/templates/register.html"));
})

app.post('/RecognizeOCR', upload.single('ocrImage'), function(req,res,next){
    console.log(req.file);
    res.send(req.file.path);
})


app.get("/checkAnomly/:voltVal/:currentVal", async function(req,res){
    
    const model = await tf.loadLayersModel(tf.io.http(
        'http://localhost:8000/loadModel', {requestInit: {method: 'GET'}}));
    v = parseFloat(req.params.voltVal)
    i = parseFloat(req.params.currentVal)
    console.log(v,i)
    console.log(model.summary());
    const input = tf.tensor2d([220.0,15.0], [1,2]);
    var result = model.predict(input);
    res.send(input);
    
    
    // const MODEL_URL = 'localstorage://model.json';
	// // const URL_PATH = path.resolve(__dirname,"model.json");
	// console.log(MODEL_URL);
	// try{
	// 	const model = await tf.loadLayersModel(MODEL_URL);
	// 	const input = tf.tensor2d([req.params.voltVal,req.params.currentVal], [1,2]);
	// 	var result = model.predict(input);
	// 	if(result>0.5){
	// 		// anomly detected
	// 		// result = 1;
	// 		// user should then send the location to route '/sendLoc'
	// 		res.send("anomly detected");
	// 	}else{
	// 		// casual thing ( not an anomly )
	// 		// result = 0;
	// 		res.send("no anomly detected");
	// 	}
    // }catch(error){
    //     console.log(error)
	// 	console.log('problem in loading the model');
	// 	res.send("could not able to access the model.")
    // }
})

app.set('port',process.env.PORT||8000)

var server = app.listen(app.get('port'),function(){
console.log("server started at port "+app.get('port').toString())
})