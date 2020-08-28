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

app.get('/loadFeatureExtractor',function(req,res){
    const URL_PATH = path.resolve(__dirname,"models","web_feature_extractor","model.json");
    res.sendFile(URL_PATH);
})

app.get('/loadSequenceModel',function(req,res){
    const URL_PATH = path.resolve(__dirname,"models","seq2seq","seq2seq.json");
    res.sendFile(URL_PATH);
})

app.get('/',function(req,res){
    res.sendFile(path.resolve(__dirname,"/templates/register.html"));
})
app.get('/models/web_feature_extractor/model.json',function(req,res){
    const URL_PATH = path.resolve(__dirname,"models","web_feature_extractor","model.json");
    res.sendFile(URL_PATH);
})
app.get('/models/web_feature_extractor/:filename',function(req,res){
    const URL_PATH = path.resolve(__dirname,"models","web_feature_extractor",req.params.filename);
    res.sendFile(URL_PATH);
})
app.post('/RecognizeOCR', upload.single('ocrImage'), async function(req,res,next){
    console.log(req.file);
    res.send(req.file.path);
    const model = await tf.loadLayersModel('http://localhost:8000/loadFeatureExtractor');
    // tf.loadLayersModel('http://localhost:8000/loadFeatureExtractor')
    // .then(model => {
    //     console.log(model);
    // })
    console.log(model.summary())
})


app.set('port',process.env.PORT||8000)

var server = app.listen(app.get('port'),function(){
console.log("server started at port "+app.get('port').toString())
})