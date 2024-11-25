const projects = [
    { title: "Aurora Lighting Solutions", link: "https://auroralightingsolutions.com", desc: "shopfiy ecommerce store" },
    { title: "Project Management Tool", link: "#", desc: "A tool to manage tasks effectively"}
];

const Projects = () => (
    <section className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
        {projects.map((project) => (
            <div key={project.title} classname="project-card">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.link} target="_blank" rel="noopeneer noreferrer">
                    View Project
                </a>
            </div>
        ))}
        </div>
    </section>
);

export default Projects;