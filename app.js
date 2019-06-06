var express    = require("express"),
    app        = express();
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app", { useNewUrlParser : true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", BlogSchema);


// RESTFUL ROUTES


app.listen(3000, function(){
    console.log("Server Is Running");
});
