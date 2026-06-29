//Importing required packages
import express from "express"
import bodyParser from "body-parser";
import path from "node:path"
// import path from 'path';
import { fileURLToPath } from 'url';

//Initializing app as an instance of express and assigning a port
const app = express();
const port = 3000;

let blogPosts = [];


app.use(bodyParser.urlencoded({ extended: true }));



// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Convert your static line to this:
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs')

//Viewing the homepage
app.get("/", (req, res) => {
    res.render("index.ejs", { blogPosts: blogPosts})
});

//creating a new blog post
app.get("/new",(req, res) => {
    res.render("new.ejs", { blogPosts: blogPosts})
})

app.get("/articles", (req, res) => {
    res.render("articles.ejs", { blogPosts: blogPosts});
})

//submitting a blog post
app.post("/submit", (req, res) => {
    req.body.id = Date.now().toString();
    console.log(req.body);
    blogPosts.push(req.body);
    console.log("These are the blog posts:", blogPosts[blogPosts.length - 1]);
    res.redirect("/articles")
});

//Deleting a blog post
app.post("/delete/:id", (req, res) => {
    // 1. Get the ID of the post to delete from the URL
    const postId = req.params.id;

    // 2. Filter out the post with the matching ID
    // const postToDelete = blogPosts.filter(posts => req.body.id !== postId);

    // const index = blogPosts.indexOf(postToDelete);
    const index = blogPosts.findIndex(check => check.id === postId);
    console.log(index);

    blogPosts.splice(index, 1);

    console.log(`Deleted post with ID: ${postId}`);

    // 3. Redirect the user back to the articles page to see the updated list
    res.redirect("/articles");
});

//Editing posts
app.get("/edit/:id", (req, res) => {

    // plus sign below is used to convert the string id to a number
    const postId = +req.params.id;

    console.log(postId);

    const postToEdit = blogPosts.find(posts => posts.id == postId);
    console.log(postToEdit);

    res.render("edit.ejs", {blog: postToEdit})
});


//Updating posts

app.post("/update/:id", (req, res) => {
    const postId = +req.params.id;
    let updatedTitle = req.body.title;
    let updatedPost = req.body.post;
    const postToUpdate = blogPosts.findIndex(posts => posts.id == postId);
    console.log(postToUpdate);
    blogPosts[postToUpdate].title = updatedTitle;
    blogPosts[postToUpdate].post = updatedPost;
    res.redirect("/articles");
});



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});

export default app;

