const posts=[
{title:"Why Do Wings Generate Lift?",category:"Flight Fundamentals",description:"A beginner-friendly look at pressure, airflow, angle of attack, and what actually happens around a wing."},
{title:"The Language of an Aircraft",category:"Aircraft Design",description:"A first look at the major parts of an aircraft and why every shape has a job."},
{title:"Inside a Jet Engine",category:"Propulsion",description:"Following air through the basic stages of a turbofan and understanding where thrust comes from."},
{title:"What Is Boundary Layer?",category:"Aerodynamics",description:"The thin region of air next to a surface — and why engineers care so much about it."},
{title:"Can Aircraft Fly Without Conventional Wings?",category:"Advanced Concepts",description:"Exploring unconventional configurations and the ideas behind future aircraft."},
{title:"How an Aircraft Becomes an Aircraft",category:"Aviation Industry",description:"A simplified journey from concept and design to manufacturing, testing, certification, and service."}
];
function render(){
 const box=document.getElementById("blog-posts"); if(!box)return;
 const p=new URLSearchParams(location.search), category=p.get("category");
 const title=document.getElementById("category-title"), desc=document.getElementById("category-description");
 const shown=category?posts.filter(x=>x.category===category):posts;
 if(category){title.textContent=category==="Advanced Concepts"?"Advance Concepts":category;desc.textContent=`Notes, explanations, and things I’m learning in ${category.toLowerCase()}.`;}
 box.innerHTML=shown.map(x=>`<article class="post"><div class="cat">${x.category}</div><h2>${x.title}</h2><p>${x.description}</p><a class="read" href="#" onclick="event.preventDefault();alert('This note is ready for your full article text. Add it to script.js.');">READ NOTE →</a></article>`).join("");
}
document.addEventListener("DOMContentLoaded",render);
