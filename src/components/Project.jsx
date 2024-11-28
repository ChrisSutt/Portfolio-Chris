const projects = [
    { title: "Aurora Lighting Solutions", link: "https://auroralightingsolutions.com", desc: "shopfiy ecommerce store" },
    { title: "Project Management Tool", link: "#", desc: "A tool to manage tasks effectively"}
];

const Projects = () => (
    <section id="projects" className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-600">Projects</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.desc}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" classname="mt-4 inline-block text-blue-500 font-semibold hover:underline">
                    View Project
                </a>
            </div>
                ))}
        </div>
    </div>

    </section>
);

export default Projects;