import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Stock Portfolio Management
                            </h3>
                            <p>
                                A Full-stack web application that allows users to track and manage their stock investments efficiently. The system enables users to add, update, and remove stock holdings while providing real-time price updates and portfolio value calculations.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4 mt-4">
                                {["React", "Vite", "CSS", "Java", "Spring Boot", "My SQL", "Postman", "Alpha Vantage API"].map(
                                    (tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a target="_blank" href="https://github.com/tarunmedisetti13/portfolio_management_backend" className="text-blue-400 m-4 hover:text-blue-300 transition-colors"> View Project → </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                Voting System
                            </h3>
                            <p>
                                a decentralized voting system using blockchain technology to ensure transparency, security, and immutability of votes. The system eliminates the risk of vote tampering and promotes trust among voters by leveraging smart contracts and distributed ledger principles.                            </p>
                            <div className="flex flex-wrap gap-2 mb-4 mt-3">
                                {["React", "Web3.js", "AWS", "Solidity", "Ethereum", "Ganache", "Truffle"].map(
                                    (tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a target="_blank" href="https://github.com/tarunmedisetti13/VotingSystem/tree/VSbranch" className="text-blue-400 m-4 hover:text-blue-300 transition-colors"> View Project → </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">
                                To do List
                            </h3>
                            <p>
                                A responsive and intuitive To-Do List app built
                                using the MERN stack, designed to streamline daily task management.
                                Features include real-time CRUD operations, RESTful API integration,
                                and clean UI with Tailwind CSS. Deployed on Render and Netlify for seamless accessibility across devices.                            </p>
                            <div className="flex flex-wrap gap-2 mb-4 mt-3">
                                {["React", "Tailwind CSS", "Node.js", "Express.js"].map(
                                    (tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a target="_blank" href="https://github.com/tarunmedisetti13/MERN-TODO-LIST" className="text-blue-400 m-4 hover:text-blue-300 transition-colors"> View Project → </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2 mt-4">
                                Sudoku Solver
                            </h3>
                            <p>
                                A console-based Sudoku Solver game developed in Java, using a backtracking algorithm to efficiently solve any valid Sudoku puzzle. Features a user-friendly command-line interface for puzzle input and visualized output. Focused on algorithm optimization, input validation, and clean modular code design.                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {["Java", "Intellij IDE"].map(
                                    (tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a target="_blank" href="https://github.com/tarunmedisetti13/Sudoku_Game" className="text-blue-400 m-4 hover:text-blue-300 transition-colors"> View Project → </a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                            <h3 className="text-xl font-bold mt-4 mb-4">
                                Shopping Website
                            </h3>
                            <p>
                                A dynamic shopping website built using HTML, CSS, and JavaScript, featuring a responsive layout, interactive product listings, and a functional cart system. Users can browse items, add/remove products to/from the cart, and view real-time updates to total pricing. Emphasized clean UI, responsive design, and smooth user interactions.                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "Javascript"].map(
                                    (tech, key) => (
                                        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition-all">
                                            {tech}
                                        </span>
                                    )
                                )}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/tarunmedisetti13/Shopping-Website" className="text-blue-400 m-4 hover:text-blue-300 transition-colors"> View Project → </a>
                            </div>
                        </div>


                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};