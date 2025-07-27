import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Brain,
  Database,
  TrendingUp,
  Code,
  BookOpen,
  Award,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Index() {
  const intelligenceRef = useRef<HTMLSpanElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Welcome screen timeout
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 4500); // 4.5 seconds

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const gradientPosition = 50 + scrolled * 0.1;

      if (intelligenceRef.current) {
        intelligenceRef.current.style.backgroundPosition = `${gradientPosition}% ${gradientPosition}%`;
      }
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, observerOptions);

    // Observe project cards
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => observer.observe(card));

    // Observe other animated elements
    const animatedElements = document.querySelectorAll(
      ".fade-in-up, .fade-in-left, .fade-in-right",
    );
    animatedElements.forEach((el) => observer.observe(el));

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);
  const skills = [
    { name: "Python", category: "Programming", level: "Expert" },
    { name: "R", category: "Programming", level: "Advanced" },
    { name: "SQL", category: "Database", level: "Expert" },
    { name: "TensorFlow", category: "ML/AI", level: "Advanced" },
    { name: "PyTorch", category: "ML/AI", level: "Advanced" },
    { name: "Scikit-learn", category: "ML/AI", level: "Expert" },
    { name: "Pandas", category: "Data Analysis", level: "Expert" },
    { name: "NumPy", category: "Data Analysis", level: "Expert" },
    { name: "Docker", category: "DevOps", level: "Intermediate" },
    { name: "AWS", category: "Cloud", level: "Intermediate" },
    { name: "Tableau", category: "Visualization", level: "Advanced" },
    { name: "D3.js", category: "Visualization", level: "Intermediate" },
  ];

  const projects = [
    {
      title: "Neural Network Optimization Framework",
      description:
        "Developed a novel optimization algorithm that improves training efficiency by 40% for large-scale neural networks.",
      tech: ["Python", "PyTorch", "CUDA", "Docker"],
      link: "#",
      type: "Research",
    },
    {
      title: "Real-time Anomaly Detection System",
      description:
        "Built an ML pipeline for detecting anomalies in financial transactions with 99.2% accuracy and sub-second latency.",
      tech: ["Python", "Apache Kafka", "TensorFlow", "AWS"],
      link: "#",
      type: "Industry",
    },
    {
      title: "Multimodal Data Fusion for Healthcare",
      description:
        "Created a deep learning model combining medical imaging and clinical data for improved diagnosis prediction.",
      tech: ["Python", "TensorFlow", "OpenCV", "SQL"],
      link: "#",
      type: "Research",
    },
  ];

  const publications = [
    {
      title:
        "Efficient Neural Architecture Search via Gradient-based Optimization",
      venue: "ICML 2024",
      citations: 47,
      link: "#",
    },
    {
      title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
      venue: "Nature Machine Intelligence 2023",
      citations: 123,
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen neural-bg">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-foreground">DataSci.PhD</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#research"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Research
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 floating-shapes data-particles relative">
        {/* Data Visualization Background */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <svg
            className="absolute top-10 right-10 w-96 h-96 animate-pulse"
            viewBox="0 0 400 400"
          >
            <defs>
              <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#A8B2C7" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            {/* Neural Network Nodes */}
            <circle cx="50" cy="100" r="8" fill="url(#nodeGrad)">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="50" cy="150" r="8" fill="url(#nodeGrad)">
              <animate
                attributeName="opacity"
                values="1;0.4;1"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="50" cy="200" r="8" fill="url(#nodeGrad)">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="150" cy="75" r="10" fill="url(#nodeGrad)">
              <animate
                attributeName="opacity"
                values="1;0.4;1"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="150" cy="125" r="10" fill="url(#nodeGrad)">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="150" cy="175" r="10" fill="url(#nodeGrad)">
              <animate
                attributeName="opacity"
                values="1;0.4;1"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="150" cy="225" r="10" fill="url(#nodeGrad)">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="250" cy="100" r="8" fill="url(#nodeGrad)">
              <animate
                attributeName="opacity"
                values="1;0.4;1"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="250" cy="150" r="8" fill="url(#nodeGrad)">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="3.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="250" cy="200" r="8" fill="url(#nodeGrad)">
              <animate
                attributeName="opacity"
                values="1;0.4;1"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="350" cy="150" r="12" fill="url(#nodeGrad)">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur="4.2s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Connections */}
            <line
              x1="58"
              y1="100"
              x2="142"
              y2="75"
              stroke="#FF6B35"
              strokeWidth="2"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.1;0.6;0.1"
                dur="3s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="58"
              y1="150"
              x2="142"
              y2="125"
              stroke="#A8B2C7"
              strokeWidth="2"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.6;0.1;0.6"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="58"
              y1="200"
              x2="142"
              y2="225"
              stroke="#737373"
              strokeWidth="2"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.1;0.6;0.1"
                dur="4s"
                repeatCount="indefinite"
              />
            </line>

            <line
              x1="160"
              y1="75"
              x2="242"
              y2="100"
              stroke="#FF6B35"
              strokeWidth="2"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.6;0.1;0.6"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="160"
              y1="125"
              x2="242"
              y2="150"
              stroke="#A8B2C7"
              strokeWidth="2"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.1;0.6;0.1"
                dur="2s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="160"
              y1="175"
              x2="242"
              y2="200"
              stroke="#FF6B35"
              strokeWidth="2"
              opacity="0.3"
            >
              <animate
                attributeName="opacity"
                values="0.6;0.1;0.6"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </line>

            <line
              x1="258"
              y1="100"
              x2="338"
              y2="150"
              stroke="#A8B2C7"
              strokeWidth="3"
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.7;0.2"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="258"
              y1="150"
              x2="338"
              y2="150"
              stroke="#FF6B35"
              strokeWidth="3"
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.7;0.2;0.7"
                dur="3.8s"
                repeatCount="indefinite"
              />
            </line>
            <line
              x1="258"
              y1="200"
              x2="338"
              y2="150"
              stroke="#737373"
              strokeWidth="3"
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.2;0.7;0.2"
                dur="2.2s"
                repeatCount="indefinite"
              />
            </line>
          </svg>

          {/* Data Chart Background */}
          <svg
            className="absolute bottom-10 left-10 w-80 h-64 opacity-20"
            viewBox="0 0 320 200"
          >
            <defs>
              <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Chart bars */}
            <rect x="20" y="120" width="30" height="80" fill="url(#chartGrad)">
              <animate
                attributeName="height"
                values="80;120;80"
                dur="4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="120;80;120"
                dur="4s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="60" y="90" width="30" height="110" fill="url(#chartGrad)">
              <animate
                attributeName="height"
                values="110;60;110"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="90;140;90"
                dur="3s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="100" y="60" width="30" height="140" fill="url(#chartGrad)">
              <animate
                attributeName="height"
                values="140;90;140"
                dur="5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="60;110;60"
                dur="5s"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="140"
              y="100"
              width="30"
              height="100"
              fill="url(#chartGrad)"
            >
              <animate
                attributeName="height"
                values="100;150;100"
                dur="3.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="100;50;100"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="180" y="70" width="30" height="130" fill="url(#chartGrad)">
              <animate
                attributeName="height"
                values="130;80;130"
                dur="4.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="70;120;70"
                dur="4.5s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="220" y="40" width="30" height="160" fill="url(#chartGrad)">
              <animate
                attributeName="height"
                values="160;110;160"
                dur="2.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="40;90;40"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="260" y="80" width="30" height="120" fill="url(#chartGrad)">
              <animate
                attributeName="height"
                values="120;170;120"
                dur="6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values="80;30;80"
                dur="6s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-tech-orange/10 border border-tech-orange/20 rounded-full px-4 py-2 mb-6 badge-enter">
              <Sparkles className="h-4 w-4 text-tech-orange" />
              <span className="text-sm font-medium text-tech-orange">
                PhD Candidate • Data Science
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="clean-title-text">
                Decoding the World Through
              </span>
              <br />
              <span
                ref={intelligenceRef}
                className="gradient-intelligence parallax-text"
              >
                Data, Code &amp; Curiosity...
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed typewriter-subtitle">
              Ph.D. student in Data Science at OU specializing in computer vision, SLAM, and robotics perception using Python, C++, and ROS.
            </p>

            {/* Welcome Video Section */}
            <div className="mb-12 hero-enter" style={{ animationDelay: "5s" }}>
              <div className="max-w-2xl mx-auto video-container">
                <div className="aspect-video bg-gradient-to-br from-tech-steel/20 to-tech-orange/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for video - replace with your actual video */}
                  <div className="absolute inset-0 bg-gradient-to-br from-tech-steel/10 to-tech-orange/10"></div>
                  <div className="relative z-10 text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 bg-tech-orange/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-tech-orange"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Welcome Video
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Click to play introduction
                    </p>
                  </div>
                  {/* Add your video element here:
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster="/path-to-your-poster.jpg"
                  >
                    <source src="/path-to-your-video.mp4" type="video/mp4" />
                  </video>
                  */}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center buttons-enter">
              <Button
                size="lg"
                className="bg-tech-orange hover:bg-tech-orange/90 text-white"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Research
              </Button>
            </div>

            <div className="flex justify-center gap-6 mt-8 social-enter">
              <a
                href="#"
                className="text-muted-foreground hover:text-tech-orange transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-tech-orange transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="animate-bounce text-center">
            <ChevronDown className="h-6 w-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-16 px-6 matrix-bg relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl matrix-header mb-4 fade-in-up">
              Technical_Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
              A comprehensive toolkit spanning machine learning, data
              engineering, and research methodologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:border-tech-orange/30"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">
                      {skill.name}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {skill.category}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-6 relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(103, 119, 170, 0.12), rgba(255, 107, 53, 0.08))",
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl matrix-purple mb-4 fade-in-up">
              Featured_Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
              Cutting-edge research and applications that push the boundaries of
              what's possible with data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`project-card fade-in-up group hover:shadow-xl transition-all duration-300 hover:border-tech-orange/30 hover:scale-[1.02] ${index === 1 ? "fade-in-up" : index === 0 ? "fade-in-left" : "fade-in-right"}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge
                      variant={
                        project.type === "Research" ? "default" : "secondary"
                      }
                    >
                      {project.type}
                    </Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-tech-orange transition-colors cursor-pointer" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section id="research" className="py-16 px-6 code-rain relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="text-3xl md:text-4xl code-header-white mb-6">
                Research_Impact
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My research focuses on developing efficient machine learning
                algorithms and neural architectures that can scale to real-world
                applications while maintaining theoretical rigor.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-steel">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Publications
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-orange">
                    300+
                  </div>
                  <div className="text-sm text-muted-foreground">Citations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-purple">5</div>
                  <div className="text-sm text-muted-foreground">Awards</div>
                </div>
              </div>

              <Button
                variant="outline"
                className="border-tech-orange text-tech-orange hover:bg-tech-orange hover:text-white"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                View Full Publications
              </Button>
            </div>

            <div className="space-y-6 fade-in-right">
              {publications.map((pub, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary">{pub.venue}</Badge>
                      <div className="text-sm text-muted-foreground">
                        {pub.citations} citations
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {pub.title}
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-tech-orange hover:text-tech-orange/80 p-0"
                    >
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Read Paper
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-6 data-particles relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(139, 93, 168, 0.12))",
        }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl matrix-header mb-6 fade-in-up">
            Lets_Collaborate
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto fade-in-up">
            Interested in discussing research opportunities, industry
            applications, or potential collaborations? I'd love to hear from
            you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up">
            <Button
              size="lg"
              className="bg-tech-orange hover:bg-tech-orange/90 text-white"
            >
              <Mail className="mr-2 h-4 w-4" />
              email@university.edu
            </Button>
            <Button variant="outline" size="lg">
              <Award className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 PhD Data Science Portfolio. Designed to impress and inspire.
          </p>
        </div>
      </footer>
    </div>
  );
}
