// Run server with npm server or nodemon server
// Run frontend with: npm start 

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Blog from './pages/blog/Blog';
import CreateBlog from './pages/blog/CreateBlog'
import BlogDetails from "./pages/blog/BlogDetails";
import ToDoList from './pages/ToDoList';
import SpaceInfo from "./pages/SpaceInfo";
import ArgMap from "./pages/argmap/ArgMap";
import ArgMapInstructions from "./pages/argmap/ArgMapInstructions";
import ArgMapReport from "./pages/argmap/ArgMapReport";
import M3D from "./pages/M3D";
import Goalie from "./pages/Goalie";

function App() {

  // Blog Data
  const [idCounter, setIdCounter] = useState(4);
  const [blogs, setBlogs] = useState([
      {
          "title": "My First Blog",
          "body": "As I sit down to write my very first blog post, I am overflowing with excitement! I have always had a passion for writing and have dreamed of sharing my thoughts and ideas with others. Finally, the day has come, and I can't wait to dive in.\n\nStarting a blog can be intimidating, but it's also incredibly rewarding. It's a chance to express yourself, share your knowledge and experiences, and connect with people from all over the world. With so many different topics to write about, the possibilities are endless.\n\nFor me, writing has always been a way to connect with others and express myself creatively. With my own blog, I can write about anything that interests me, from travel and culture to food and lifestyle. I can also use my platform to raise awareness about important social and environmental issues.\n\nOf course, starting a blog is not without its challenges. There are so many things to consider, from choosing a name and domain to designing a layout and creating content. But the key is to start small and stay consistent. Building an audience takes time, and it's important to be patient and persistent.\n\nI am thrilled to be embarking on this new journey and can't wait to see where it takes me. I am excited to share my thoughts, ideas, and experiences with you and to connect with readers from all over the world. Thank you for joining me on this exciting adventure, and I can't wait to see where it takes us!",
          "author": "Alice",
          "id": 1
        },
        {
          "title": "Opening Party!",
          "body": "Hello everyone!\n\nI'm thrilled to share that we recently had an opening party at our workplace, and it was a blast! The event was held to celebrate the expansion of our business and the launch of our new product line. We invited all of our colleagues, clients, and friends to join us for an evening of food, drinks, and networking.\n\nThe planning for the party started weeks in advance, and our team was excited to make it a memorable event. We decided on a theme that reflected our brand and industry and created a vibrant atmosphere with colorful decorations and lighting.\n\nAs guests arrived, they were greeted with warm welcomes and drinks, including champagne and cocktails. We also had a selection of delicious hors d'oeuvres, including mini sliders, crab cakes, and vegetarian options.\n\nThroughout the evening, guests had the opportunity to network and learn more about our new product line, with our team members on hand to answer questions and provide demonstrations. We also had interactive displays and games set up to keep everyone entertained and engaged.\n\nAs the evening progressed, we had a raffle draw with exciting prizes, including gift cards and merchandise from our new product line. The winners were ecstatic and grateful for the opportunity to take something home as a keepsake from the event.\n\nOverall, the opening party was a huge success, with everyone enjoying the festivities and the chance to celebrate our new milestone. It was a great opportunity to showcase our new product line and to connect with our clients and friends in a fun and relaxed atmosphere.\n\nThank you to everyone who joined us for the party, and we look forward to many more exciting events in the future!",
          "author": "Bob",
          "id": 2
        }        
  ]);

  // To Do List Data
  const [todolist, setTodolist] = useState([
    {
        "_id": "1",
        "title": "Homework 1",
        "body": "Programming Assignment",
        "isCompleted": false,
        "createdAt": "2023-03-24T15:05:54.190Z",
        "updatedAt": "2023-03-24T15:05:54.190Z",
        "__v": 0
    },
    {
        "_id": "2",
        "title": "Clean ",
        "body": "Room, Bathroom, Kitchen",
        "isCompleted": false,
        "createdAt": "2023-03-24T15:06:09.893Z",
        "updatedAt": "2023-03-24T15:06:09.893Z",
        "__v": 0
    },
    {
        "_id": "3",
        "title": "Buy groceries",
        "body": "Get meat, pudding and ice cream",
        "isCompleted": false,
        "createdAt": "2023-03-24T15:36:26.598Z",
        "updatedAt": "2023-03-24T15:36:26.598Z",
        "__v": 0
    }
  ]);

  // Arg Map Data
  const [title, setTitle] = useState("Title");
  const [evidence, setEvidence] = useState([
        {
            "title": "Evidence 1",
            "body": "The evidence states that...",
            "source": "https://www.google.com/",
            "id": 1
        },
        {
            "title": "Evidence 2",
            "body": "The evidence states that...",
            "source": "https://www.google.com/",
            "id": 2
        },
        {
            "title": "Evidence 3",
            "body": "The evidence states that...",
            "source": "https://www.google.com/",
            "id": 3
        }          
  ]);
  const [evidenceId, setEvidenceId] = useState(4);
  const [reasoning, setReasoning] = useState("Add your reasoning here...");
  const [conclusion, setConclusion] = useState("Add your conclusion here...");


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} /> 
            
            <Route exact path="/todolist" element={<ToDoList todolist={todolist} setTodolist={setTodolist} idCounter={idCounter} setIdCounter={setIdCounter}/>} /> 
            
            <Route exact path="/blog" element={<Blog blogs={blogs}/>} /> 
            <Route exact path="/blog/create" element={<CreateBlog blogs={blogs} setBlogs={setBlogs} idCounter={idCounter} setIdCounter={setIdCounter}/>} />
            <Route exact path="/blog/:id" element={<BlogDetails blogs={blogs} setBlogs={setBlogs}/>} />

            <Route exact path="/spaceinfo" element={<SpaceInfo />} /> 
            
            <Route exact path="/argmap" element={<ArgMap title={title} setTitle={setTitle} evidence={evidence} setEvidence={setEvidence} evidenceId={evidenceId} setEvidenceId={setEvidenceId} reasoning={reasoning} setReasoning={setReasoning} conclusion={conclusion} setConclusion={setConclusion}/>} />
            <Route exact path="/argmap/instructions" element={<ArgMapInstructions />} />
            <Route exact path="/argmap/report" element={<ArgMapReport title={title} evidence={evidence} reasoning={reasoning} conclusion={conclusion}/>} /> 

            <Route exact path="/m3d" element={<M3D />} /> 

            <Route exact path="/goalie" element={<Goalie />} /> 
            
            <Route path="*" element={<NotFound />} /> 
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
