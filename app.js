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
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
//     title: "Test Blog",
//     image: "https://images.freeimages.com/images/small-previews/3d3/droplets-1395002.jpg",
//     body: "HELLO THIS IS A BLOG POST!"
// });

// RESTFUL ROUTES

app.get("/blogs", function(req, res){
    res.render("index");
});


app.listen(3000, function(){
    console.log("Server Is Running");
});
