import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const canvasRef = useRef(null);

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hashinishavindya19@gmail.com&su=Message%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\nMessage:\n" + formData.message)}`;
    window.open(gmailUrl, '_blank');
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      color: 'rgba(52, 211, 153, ' + (Math.random() * 0.5 + 0.2) + ')',
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const projects = [
    {
      title: "My Portfolio Website",
      category: "Web Development",
      tech: "Vite, React, Tailwind CSS",
      desc: "Developed a modern, responsive personal portfolio website featuring interactive animations, direct Gmail compose integration, and project showcase.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600",
      github: "https://github.com/Hashini19/Portfolio.git",
      demo: "Portfolio.mp4"
    },
    {
      title: "Campus Hub (Unisphere)",
      category: "Full Stack Web",
      tech: "Vite, React, MySQL",
      desc: "Developing a centralized platform to improve communication and streamline academic and administrative services for students and staff.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600",
      github: "https://github.com/shehan4001/unisphere-nova-solution.git",
      demo: "CampusHub.mp4"
    },
    {
      title: "Student Management System",
      category: "Desktop Application",
      tech: "C# / Visual Studio 2022",
      desc: "Developed a system for managing student records, attendance and academic information efficiently.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600",
      github: "https://github.com/Hashini19",
      demo: "Student Management System.mp4"
    },
    {
      title: "Cinema Booking System",
      category: "Desktop Application",
      tech: "Java / VS Code",
      desc: "Developed a booking application for managing movie schedules, seat reservations and ticket bookings.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=600",
      github: "https://github.com/Hashini19/Cinema-Booking-System.git",
      demo: "Cinema booking.mp4"
    },
    {
      title: "3D Treasure Hunting Game",
      category: "Game Development",
      tech: "C# / Unity",
      desc: "Developed a 3D game featuring multiple levels and interactive challenges designed to enhance player engagement.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600",
      github: "https://github.com/Hashini19/3D-Game.git",
      demo: "3D Game.mp4"
    },
    {
      title: "Banking System",
      category: "Desktop Application",
      tech: "Java / Eclipse",
      desc: "Developed a banking application for managing customer accounts, transactions and basic financial operations.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600",
      github: "https://github.com/Hashini19/Banking-System.git",
      demo: "Simple banking System.mp4"
    },
    {
      title: "Mock E-commerce Website",
      category: "Web Development",
      tech: "HTML, CSS, JavaScript, PHP",
      desc: "Developing a mock e-commerce website simulating product listings, online-shopping features and user interactions.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600",
      github: "https://github.com/Hashini19/E-Commerce-System.git",
      demo: "/ecommerce-demo.mp4"
    }
  ];

  const skillsList = [
    { name: 'Java', level: 90 },
    { name: 'C#', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'HTML / CSS', level: 95 },
    { name: 'React', level: 88 },
    { name: 'MySQL / Firebase', level: 85 }
  ];

  return (
    <div className="relative min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-emerald-500 selection:text-black">
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors pl-2">
            Hashini Shavindya
          </a>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-emerald-400 focus:outline-none pr-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-emerald-500/20 px-6 py-4 space-y-3">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block hover:text-emerald-400">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block hover:text-emerald-400">About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block hover:text-emerald-400">Projects</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block hover:text-emerald-400">Skills</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block hover:text-emerald-400">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-12">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-emerald-500 to-teal-300 shadow-[0_0_30px_rgba(16,185,129,0.3)] mb-8 overflow-hidden">
          <img 
            src="/photo.jpeg" 
            alt="Hashini Shavindya Munagama" 
            className="w-full h-full object-cover object-top rounded-full bg-gray-900"
            onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400"}} 
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Hi, I'm <span className="text-emerald-400">Hashini Shavindya</span>
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
          Motivated and detail-oriented Computer Science undergraduate specializing in Software Engineering, blending technical proficiency in Java, C#, React, and Python with strong project leadership.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="px-6 py-3 rounded-full bg-emerald-500 text-gray-950 font-semibold hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
            View My Work
          </a>
          <a href="#contact" className="px-6 py-3 rounded-full border border-emerald-500/50 hover:bg-emerald-500/10 font-semibold transition-all">
            Get In Touch
          </a>
          {/* Download CV Button */}
          <a 
           href="/cv.pdf" 
           download="Hashini_Shavindya_CV.pdf" 
           className="px-6 py-3 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold hover:bg-emerald-500/30 transition-all flex items-center gap-2">
           <span>Download CV 📄</span>
         </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-emerald-400 mb-3">About Me</h2>
          <p className="text-gray-400 text-sm md:text-base">An aspiring professional in Computer Science and Software Engineering.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center bg-gray-900/40 p-8 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
          <div className="rounded-xl overflow-hidden border border-emerald-500/30 shadow-lg h-96">
            <img 
              src="/photo.jpeg" 
              alt="About Hashini" 
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              onError={(e)=>{e.target.src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600"}}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-200">My Journey & Passion</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Specializing in Software Engineering at CINEC Campus, Malabe, with a strong foundation in building database-driven applications, UI development, and robust desktop/web systems.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Demonstrates strong problem-solving, teamwork, leadership, and time-management skills, with a passion for writing clean, reliable code.
            </p>
            <div className="pt-4">
              <span className="inline-block px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-sm font-medium">
                📍 Athurugiriya, Sri Lanka
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-emerald-400 mb-3">My Projects</h2>
          <p className="text-gray-400 text-sm md:text-base">Explore a collection of my recent work, ranging from desktop applications to modern web solutions.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-gray-900/90 border border-emerald-500/30 rounded-2xl overflow-hidden hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300 flex flex-col justify-between">
              
              <div className="relative h-48 overflow-hidden border-b border-emerald-500/20 bg-gray-950">
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-90" 
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-gray-950/80 px-3 py-1 rounded-full border border-emerald-500/40 backdrop-blur-md">
                    {proj.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{proj.title}</h3>
                  <p className="text-xs text-emerald-400 mb-3 font-mono">Tech: {proj.tech}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{proj.desc}</p>
                </div>
                
                <div className="space-y-3 pt-4 border-t border-gray-800">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-sm font-medium border border-gray-700 transition-colors">
                    <span>💻 View on GitHub</span>
                  </a>
                  <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-sm font-medium border border-emerald-500/30 transition-colors">
                    <span>▶ Watch Demo Video</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-emerald-400 mb-3">Skills & Expertise</h2>
          <p className="text-gray-400 text-sm md:text-base">Technical stack, programming languages, and proficiency levels based on project implementation.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 border border-emerald-500/20 p-8 rounded-2xl backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 text-emerald-400">Technical Skills</h3>
            <div className="space-y-5 text-sm">
              {skillsList.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1.5">
                    <span className="font-medium text-gray-300">{skill.name}</span>
                    <span className="text-emerald-400 font-mono font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden p-0.5 border border-emerald-500/20">
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-400 h-full rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-900/50 border border-emerald-500/20 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Problem Solving', 'Teamwork', 'Leadership', 'Time Management', 'Adaptability', 'Critical Thinking'].map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-900/50 border border-emerald-500/20 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-emerald-400">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {['VS Code', 'Visual Studio 2022', 'Eclipse', 'Unity', 'GitHub', 'Figma', 'XAMPP'].map((tool, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 text-xs font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-emerald-400 mb-3">Get In Touch</h2>
          <p className="text-gray-400 text-sm md:text-base">Let's discuss your next project or collaboration.</p>
        </div>
        <div className="bg-gray-900/50 border border-emerald-500/20 p-8 rounded-2xl backdrop-blur-sm grid md:grid-cols-2 gap-10">
          
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Name *</label>
              <input 
                type="text" 
                required 
                placeholder="Your full name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none text-white" 
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Email *</label>
              <input 
                type="email" 
                required 
                placeholder="your.email@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none text-white" 
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">Message *</label>
              <textarea 
                rows="4" 
                required 
                placeholder="Type your message here..." 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-gray-950 border border-gray-800 rounded-xl px-4 py-3 text-sm focus:border-emerald-500 focus:outline-none text-white"
              ></textarea>
            </div>
            <button type="submit" className="w-full py-3 rounded-xl bg-emerald-500 text-gray-950 font-bold hover:bg-emerald-400 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              Send Message
            </button>
          </form>

          <div className="space-y-6 flex flex-col justify-center">
            {/* Email Box */}
            <div className="p-4 rounded-xl bg-gray-950/50 border border-gray-800 flex items-center justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-emerald-400 mb-1">Email</h4>
                <p className="text-gray-200 text-sm">hashinishavindya19@gmail.com</p>
              </div>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hashinishavindya19@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold border border-emerald-500/30 transition-colors"
              >
                Send Email ✉
              </a>
            </div>

            {/* Phone Box */}
            <div className="p-4 rounded-xl bg-gray-950/50 border border-gray-800 flex items-center justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-emerald-400 mb-1">Phone</h4>
                <p className="text-gray-200 text-sm">+94 77 653 6568</p>
              </div>
              <a 
                href="tel:+94776536568" 
                className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold border border-emerald-500/30 transition-colors"
              >
                Call Now 📞
              </a>
            </div>

            {/* Location Box */}
            <div className="p-4 rounded-xl bg-gray-950/50 border border-gray-800 flex items-center justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-emerald-400 mb-1">Location</h4>
                <p className="text-gray-200 text-sm">Athurugiriya, Sri Lanka</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Obix+Pvt+Ltd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-semibold border border-emerald-500/30 transition-colors"
              >
                Open Map 🗺
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-emerald-500/20 py-8 text-center text-xs text-gray-500 space-y-3">
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.linkedin.com/in/hashini-shavindya-munagama-0b3bb137b/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium flex items-center gap-1"
          >
            <span>🔗 LinkedIn Profile</span>
          </a>
        </div>
        <p>© 2026 Hashini Shavindya Munagama. All rights reserved.</p>
      </footer>
    </div>
  );
}