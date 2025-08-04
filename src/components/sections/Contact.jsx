import { useState } from "react";
import emailjs from "emailjs-com"; // Make sure this is imported
import { RevealOnScroll } from "../RevealOnScroll";
export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isLoading, setIsLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID, e.target,
            import.meta.env.VITE_PUBLIC_KEY)
            .then(() => {
                setFormData({ name: "", email: "", message: "" });
                setIsLoading(false);
                setShowPopup(true);
                setTimeout(() => setShowPopup(false), 3000);
            })
            .catch(() => {
                setIsLoading(false);
                alert("Oops! Something went wrong. Please try again.");
            });
    };

    return (
        <div className="   relative flex flex-col justify-center mb-20 items-center  " id="contact">
            <RevealOnScroll>
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    {" "}
                    Get In Touch
                </h2>
                {/* Form */}
                <form onSubmit={handleSubmit} className={`w-64 sm:w-100 text-center space-y-6  ${isLoading ? "blur-sm pointer-events-none" : ""}`}>
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500"
                            placeholder="Name.."
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500"
                            placeholder="example@gmail.com"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            rows={5}
                            required
                            className="w-full resize-none  bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500"
                            placeholder="Your Message..."
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="cursor-pointer  bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:bg-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        Send Message
                    </button>
                </form>

                {/* Loading Overlay */}
                {isLoading && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                        <div className="text-white text-xl flex flex-col items-center">
                            <span>Sending...</span>
                            <div className="animate-spin mt-2 h-8 w-8 border-4 border-t-transparent border-white rounded-full"></div>
                        </div>
                    </div>
                )}

                {/* Success Popup */}
                {showPopup && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                        <div className="bg-black text-black p-6 rounded-xl shadow-lg text-center">
                            <p className="text-lg font-semibold text-white">✅ Message Sent!</p>
                        </div>
                    </div>
                )}
            </RevealOnScroll>
        </div>
    );
};

