const express = require("express");
const app = express();

const port = 3000;

const workProjects = [
{
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/user/ecommerce",
    liveUrl: "https://ecommerce-demo.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool",
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    githubUrl: "https://github.com/user/taskapp",
    liveUrl: "https://taskapp-demo.com",
  },
   {
    id: 3,
    title: "Personal Portfolio",
    description: "Responsive portfolio website to showcase work",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/user/portfolio",
    liveUrl: "https://portfolio-demo.com"
  },
  {
    id: 4,
    title: "Chat Application",
    description: "Real-time chat application with rooms and private messaging",
    technologies: ["Node.js", "Socket.io", "Express", "MongoDB"],
    githubUrl: "https://github.com/user/chatapp",
    liveUrl: "https://chatapp-demo.com"
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "Platform to write and publish blogs with authentication",
    technologies: ["Next.js", "Firebase", "TailwindCSS"],
    githubUrl: "https://github.com/user/blogplatform",
    liveUrl: "https://blogplatform-demo.com"
  }
];

const workExperience = [
  {
    id: 1,
    company: "Tech Corp",
    position: "Full Stack Developer",
    duration: "2022 - Present",
    description: "Developed scalable web applications",
    technologies: ["React", "Node.js", "AWS"],
  },
  {
    id: 2,
    company: "Innovate Solutions",
    position: "Frontend Developer",
    duration: "2021 - 2022",
    description: "Implemented responsive UIs and interactive dashboards",
    technologies: ["Vue.js", "HTML", "CSS", "JavaScript"]
  },
  {
    id: 3,
    company: "NextGen Labs",
    position: "Backend Developer",
    duration: "2020 - 2021",
    description: "Built RESTful APIs and integrated third-party services",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"]
  },
  {
    id: 4,
    company: "Creative Soft",
    position: "Intern",
    duration: "2019 - 2020",
    description: "Assisted in web development projects and testing",
    technologies: ["HTML", "CSS", "JavaScript"]
  }
];
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Express this is home Route</h1>")
})

app.get("/api",(req,res)=>{
    res.send("<h1> This is API route</h1>");
})

app.get("/api/projects",(req,res)=>{
    res.json({ sucess :true ,
                count : workProjects.length,
                data : workProjects})
})

app.get("/api/experience",(req,res)=>{
    res.json({sucess : true,
                count: workExperience.length,
                data : workExperience })
})

app.get("/api/projects/:id",(req,res)=>{
    let projectId = parseInt(req.params.id);
    const pro = workProjects.find((p)=> p.id === projectId);
    if(!pro){
        return res.status(404).json({
            status :false,
            error : "Project not found "
        })
    }
    res.json({
        success : true,
        data : pro
    })
})




app.listen(port,()=>{
    console.log(`App is listening on http://localhost:${port}`);
})