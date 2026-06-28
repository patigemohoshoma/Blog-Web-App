Dynamic Node.js Blog Application

A lightweight, server-side rendered web application that allows users to dynamically create, read, update, and delete (CRUD) blog posts. This project serves as a functional demonstration of backend routing, data mutation, template rendering, and CI/CD deployment principles.

CORE FEATURES

1. Create: Users can draft and publish new blog posts through a dedicated form.

2. Read: Visitors can view a responsive, dynamically generated feed of all published articles.

3. Update: Authors can edit existing post titles and content via pre-filled forms using precise object property mutation.

4. Delete: Users can permanently remove specific posts from the active feed.

TECH STACK

1. Backend: Node.js, Express.js

2. Middleware: Body-Parser (for handling URL-encoded form payloads)

3. Frontend: EJS (Embedded JavaScript templates), HTML5, Custom CSS

4. Data Storage: In-memory JavaScript Data Structures

ROUTE ARCHITECTURE

GET / : Renders the main landing page

GET /articles : Displays the feed of all stored blog posts

GET /new : Renders the HTML form to draft a new post

POST /submit : Generates a unique timestamp ID, saves the new post to memory, and redirects to /articles

GET /edit/:id : Finds a specific post by its ID and renders a pre-filled form for editing

POST /update/:id : Captures form edits, overwrites the existing post data in memory, and redirects to /articles

POST /delete/:id : Locates a specific post by ID, safely splices it out of the master array, and redirects to /articles

LOCAL INSTALLATION & SETUP
To run this project locally on your machine, follow these steps:

1. Clone this repository to your local machine.

2. Ensure you have Node.js installed.

3. Open your terminal, navigate to the project directory, and run "npm install" to download all required dependencies.

4. Run "node index.js" (or "nodemon index.js" for development) to boot the server.

5. Open your web browser and navigate to http://localhost:3000.

DEPLOYMENT NOTE
This application is designed to be deployed on Serverless platforms like Vercel. Please note that because this version utilizes in-memory storage (a JavaScript array) rather than a persistent database, newly created blog posts will reset when the serverless function goes to sleep.