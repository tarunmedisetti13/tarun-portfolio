import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const fronendSkills = ["HTML", "CSS", "Tailwind CSS", "React", "Vite"];
    const backendSkills = ["Node.js", "Express.js", "Python", "Java", "Spring Boot", "Mongo DB", "My SQL"];
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl max-auto px-4 ">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent">{""} About Me</h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:border-blue-500/30">
                        <p className="text-gray-300 mb-6">
                            Passionate developer with expertise in building scalable web applications
                            and creating innovative solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        fronendSkills.map((tech, key) => (
                                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        backendSkills.map((tech, key) => (
                                            <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                {tech}
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30">
                            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                            <div className="grid grid-cols-1 gap-5 mt-4">
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>B.Tech in Computer Science and Engineering</strong>-SRKR Engineering College
                                        (2022 - 2025)
                                    </li>
                                    <li>
                                        Relevant Coursework: Data Structures, Web Development, Machine Learning...
                                    </li>
                                </ul>

                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>Diploma in Computer Enginerring</strong>-AANM & VVRSR Poytechnic College
                                        (2019 - 2022)
                                    </li>
                                    <li>
                                        Relevant Coursework: C Language, Computer Fundamentals, Mobile Application Development...
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all hover:border-blue-500/30">
                            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                            <div className="space-y-4 text-gray-300">
                                <div>
                                    <h4 className="font-semibold"> Django Internship at IIDT Blackbucks (Jan 2025 - Apr 2025)</h4>
                                    <p>Developed a task management application with  full CRUD functionality using Django views and forms for managing tasks, deadlines,
                                        and statuses. </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold"> Machine Learning Internship at Henotic Technology (Jul 2023 – Sep 2023 )</h4>
                                    <p>Worked on used car price prediction using data preprocessing, regression modeling, and evaluation
                                        techniques.  </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}