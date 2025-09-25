const skills = [
    { name: "HTML", proficiency: "Intermediate", category: "Frontend" },
    { name: "CSS", proficiency: "Advanced", category: "Frontend" },
    { name: "JavaScript", proficiency: "Beginner", category: "Frontend" },
    { name: "React", proficiency: "Intermediate", category: "Frontend" },
    { name: "Node.js", proficiency: "Beginner", category: "Backend" },
    { name: "Python", proficiency: "Intermediate", category: "Backend" },
    { name: "Java", proficiency: "Intermediate", category: "Backend" },
    { name: "C", proficiency: "Intermediate", category: "Programming Language" },
    { name: "C++", proficiency: "Advanced", category: "Programming Language" }
];


let groupedSkills = skills.reduce((acc, skill) => {
    const { category, name, proficiency } = skill;
    if (!acc[category]) {
        acc[category] = [];
    }
    acc[category].push({ name, proficiency }); // exclude experience
    return acc;
}, {});





let formatedSkills =  skills.map((skills)=>{
        return `${skills.name} (${skills.proficiency})`
    });

let advancedSkills = skills.filter((skills)=>{
    if(skills.proficiency === "Advanced") return skills.name;
})

let sortedByName = [...skills].sort((a, b) => 
  a.name.localeCompare(b.name)
);

const experienceYears = {
    "HTML": 2,
    "CSS": 3,
    "JavaScript": 1,
    "C++": 4,
    "Python": 2,
    "Java": 2,
    "C": 3
};

let addExperience = skills.map(skill => {
    return { 
        ...skill, 
        experience: experienceYears[skill.name]  // use colon here
    };
});
console.log("Skills in Formated Manner");
console.log(formatedSkills);
console.log("");
console.log("Advanced skills only.");
console.log(advancedSkills);
console.log("");
console.log("Sorted Skills");
console.log(sortedByName);
console.log("");
console.log("Added Experience to the skills Array");
console.log(addExperience);
console.log("");
console.log("After Grouping:- ");
console.log(groupedSkills);
