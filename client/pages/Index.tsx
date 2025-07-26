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
  Sparkles
} from "lucide-react";

export default function Index() {
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
    { name: "D3.js", category: "Visualization", level: "Intermediate" }
  ];

  const projects = [
    {
      title: "Neural Network Optimization Framework",
      description: "Developed a novel optimization algorithm that improves training efficiency by 40% for large-scale neural networks.",
      tech: ["Python", "PyTorch", "CUDA", "Docker"],
      link: "#",
      type: "Research"
    },
    {
      title: "Real-time Anomaly Detection System",
      description: "Built an ML pipeline for detecting anomalies in financial transactions with 99.2% accuracy and sub-second latency.",
      tech: ["Python", "Apache Kafka", "TensorFlow", "AWS"],
      link: "#",
      type: "Industry"
    },
    {
      title: "Multimodal Data Fusion for Healthcare",
      description: "Created a deep learning model combining medical imaging and clinical data for improved diagnosis prediction.",
      tech: ["Python", "TensorFlow", "OpenCV", "SQL"],
      link: "#",
      type: "Research"
    }
  ];

  const publications = [
    {
      title: "Efficient Neural Architecture Search via Gradient-based Optimization",
      venue: "ICML 2024",
      citations: 47,
      link: "#"
    },
    {
      title: "Federated Learning for Privacy-Preserving Healthcare Analytics",
      venue: "Nature Machine Intelligence 2023",
      citations: 123,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-neutral-gradient-start to-neural-gradient-end">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-foreground">DataSci.PhD</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#research" className="text-muted-foreground hover:text-foreground transition-colors">Research</a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-tech-orange/10 border border-tech-orange/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-tech-orange" />
              <span className="text-sm font-medium text-tech-orange">PhD Candidate • Data Science</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transforming Data Into
              <span className="bg-gradient-to-r from-tech-steel to-tech-orange bg-clip-text text-transparent">
                {" "}Intelligence
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              PhD researcher specializing in machine learning optimization and neural architecture search.
              Passionate about bridging the gap between cutting-edge research and real-world applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-tech-orange hover:bg-tech-orange/90 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Research
              </Button>
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <a href="#" className="text-muted-foreground hover:text-tech-orange transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-tech-orange transition-colors">
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
      <section id="about" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning machine learning, data engineering, and research methodologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-tech-orange/30">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge research and applications that push the boundaries of what's possible with data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:border-tech-blue/30">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant={project.type === "Research" ? "default" : "secondary"}>
                      {project.type}
                    </Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-tech-blue transition-colors cursor-pointer" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
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
      <section id="research" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Research Impact</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My research focuses on developing efficient machine learning algorithms and neural architectures 
                that can scale to real-world applications while maintaining theoretical rigor.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-blue">15+</div>
                  <div className="text-sm text-muted-foreground">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-purple">300+</div>
                  <div className="text-sm text-muted-foreground">Citations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-tech-emerald">5</div>
                  <div className="text-sm text-muted-foreground">Awards</div>
                </div>
              </div>

              <Button variant="outline" className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white">
                <BookOpen className="mr-2 h-4 w-4" />
                View Full Publications
              </Button>
            </div>

            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary">{pub.venue}</Badge>
                      <div className="text-sm text-muted-foreground">{pub.citations} citations</div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{pub.title}</h3>
                    <Button variant="ghost" size="sm" className="text-tech-blue hover:text-tech-blue/80 p-0">
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
      <section id="contact" className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Let's Collaborate</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in discussing research opportunities, industry applications, or potential collaborations? 
            I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-tech-blue hover:bg-tech-blue/90 text-white">
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
