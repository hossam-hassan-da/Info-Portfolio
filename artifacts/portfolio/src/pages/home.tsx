import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Activity, Database, BarChart3, Code2, LineChart, Table, GitBranch, Terminal, Mail, Linkedin, Github, ExternalLink, ArrowRight, ChevronRight, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold tracking-tighter text-lg shadow-[0_0_15px_rgba(0,212,255,0.5)]">
              HHR
            </div>
            <span className="font-semibold text-lg hidden sm:inline-block tracking-tight">Hossam Hassan</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#education" className="hover:text-primary transition-colors">Education</a>
          </nav>
          <Button asChild className="rounded-full px-6 shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] transition-shadow">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center max-w-4xl">
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary bg-primary/5 px-4 py-1.5 rounded-full uppercase tracking-wider text-xs font-semibold animate-in fade-in slide-in-from-bottom-4 duration-700">
              Data Analyst
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Translating <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 drop-shadow-[0_0_10px_rgba(0,212,255,0.4)]">complexity</span> into clarity.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              I bridge clinical knowledge with data-driven thinking to transform raw data into actionable healthcare insights.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Button size="lg" asChild className="rounded-full shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.6)] transition-all group">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full border-border hover:bg-white/5 hover:text-primary transition-colors">
                <a href="https://github.com/hossam-hassan-da/hossam-hassan-da" target="_blank" rel="noreferrer">
                  <Github className="mr-2 w-4 h-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-card/30 border-y border-border/40">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
              <div className="w-16 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(0,212,255,0.5)]"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { name: "SQL (MySQL)", icon: Database },
                { name: "Power BI", icon: BarChart3 },
                { name: "Python", icon: Terminal },
                { name: "Excel", icon: Table },
                { name: "Data Modeling", icon: GitBranch },
                { name: "Statistical Analysis", icon: LineChart },
                { name: "DAX", icon: Code2 },
                { name: "ETL", icon: Activity },
              ].map((skill, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all group">
                  <skill.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium text-sm text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 relative">
          <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="flex flex-col items-start mb-12 max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Portfolio</Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
              <p className="text-muted-foreground text-lg">Detailed case studies demonstrating end-to-end data workflows.</p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Project 1 */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all cursor-pointer group bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]">
                    <div className="md:flex h-full">
                      <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity"></div>
                        <img 
                          src="/healthcare_dashboard.png" 
                          alt="Healthcare Dashboard Preview" 
                          className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="md:w-3/5 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">Power BI</Badge>
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">SQL</Badge>
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">DAX</Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Healthcare Data Analysis</h3>
                          <p className="text-muted-foreground mb-6 line-clamp-3">
                            End-to-end healthcare analytics dashboard analyzing 55,000 cases and $1.42 Billion in medical costs to uncover patterns in cost drivers, patient demographics, and insurance provider performance.
                          </p>
                        </div>
                        <div className="flex items-center text-primary font-medium text-sm">
                          View Detailed Case Study <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-5xl w-[90vw] max-h-[90vh] overflow-y-auto bg-card border-border/50 p-0 hide-scrollbar rounded-xl">
                  <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-border bg-card/95 backdrop-blur">
                    <DialogTitle className="text-xl font-bold">Healthcare Analytics Dashboard</DialogTitle>
                  </div>
                  
                  <div className="p-6 md:p-8 space-y-12">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-1 space-y-6">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-primary/30 text-primary">SQL (MySQL)</Badge>
                          <Badge variant="outline" className="border-primary/30 text-primary">Power BI</Badge>
                          <Badge variant="outline" className="border-primary/30 text-primary">DAX</Badge>
                        </div>
                        <h2 className="text-3xl font-extrabold">End-to-End Healthcare Data Analysis</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          A comprehensive dashboard analyzing 55,000 cases and $1.42 Billion in medical costs to uncover patterns in cost drivers, patient demographics, medication analysis, and insurance provider performance.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                          <Button asChild className="rounded-full shadow-[0_0_10px_rgba(0,212,255,0.3)]">
                            <a href="https://app.powerbi.com/links/FwD5AWfFyo?ctid=5bf578da-db20-4df2-b8d2-c2357607e377&pbi_source=linkShare" target="_blank" rel="noreferrer">
                              <ExternalLink className="mr-2 w-4 h-4" /> Interactive Dashboard
                            </a>
                          </Button>
                          <Button variant="outline" asChild className="rounded-full border-border">
                            <a href="https://github.com/hossam-hassan-da/hossam-hassan-da" target="_blank" rel="noreferrer">
                              <Github className="mr-2 w-4 h-4" /> View Repository
                            </a>
                          </Button>
                        </div>
                      </div>
                      
                      <div className="w-full md:w-1/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card className="bg-background/50 border-border/50">
                          <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                            <span className="text-3xl font-bold text-primary mb-2">$1.42B</span>
                            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Total Cost</span>
                          </CardContent>
                        </Card>
                        <Card className="bg-background/50 border-border/50">
                          <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                            <span className="text-3xl font-bold text-primary mb-2">55K</span>
                            <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Total Cases</span>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <Separator className="bg-border/50" />

                    {/* Dashboard Visual */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold flex items-center gap-2">
                        <BarChart3 className="w-6 h-6 text-primary" /> Dashboard Implementation
                      </h3>
                      <div className="rounded-xl overflow-hidden border border-border/50 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        <img src="/healthcare_dashboard.png" alt="Power BI Dashboard" className="w-full h-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground text-center mt-2">Interactive Power BI Dashboard showcasing high-level KPIs and drill-down capabilities.</p>
                    </div>

                    {/* Key Findings */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                          <Activity className="w-6 h-6 text-primary" /> Key Findings
                        </h3>
                        <ul className="space-y-4">
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(0,212,255,1)]" />
                            <div>
                              <span className="font-semibold text-foreground">Admission Costs:</span> Urgent Care is the highest cost contributor at <span className="text-primary font-mono bg-primary/10 px-1 rounded">$477.54M</span> (33.69%), followed closely by Emergency ($473.98M) and Elective ($465.77M).
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(0,212,255,1)]" />
                            <div>
                              <span className="font-semibold text-foreground">Demographics:</span> The <span className="text-primary">Under 30</span> age group represents the highest case volume across the dataset.
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(0,212,255,1)]" />
                            <div>
                              <span className="font-semibold text-foreground">Medications:</span> Top prescribed medications include Lipitor, Ibuprofen, Aspirin, Paracetamol, and Penicillin, distributed relatively evenly (~16-17%) per condition.
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                          <Database className="w-6 h-6 text-primary" /> Data Model
                        </h3>
                        <p className="text-muted-foreground">
                          Engineered a robust Star Schema optimized for analytical queries, consisting of 1 Fact table and 4 Dimension tables.
                        </p>
                        <div className="rounded-xl overflow-hidden border border-border/50 bg-background/50 p-4">
                          <img src="/healthcare_schema.png" alt="Data Schema" className="w-full h-auto rounded mix-blend-screen" />
                        </div>
                      </div>
                    </div>

                    {/* SQL Analysis */}
                    <div className="space-y-6 bg-background/30 p-6 rounded-xl border border-border/30">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-primary" /> SQL Analyses Performed
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Medication by Medical Condition</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Age Group Distribution</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Insurance Provider Analysis</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Admission Type Cost Breakdown</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Yearly/Monthly Trends</Badge>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="py-20 bg-card/30 border-t border-border/40">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
              
              {/* Experience */}
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
                  <Activity className="text-primary w-6 h-6" /> Experience
                </h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/20 before:to-transparent hidden-before-mobile">
                  
                  {/* Timeline Item 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary bg-background shadow-[0_0_10px_rgba(0,212,255,0.8)] absolute left-0 md:left-1/2 -translate-x-1/2"></div>
                    <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] pl-4 md:pl-0 md:pr-8 text-left md:text-right">
                      <div className="p-5 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors shadow-sm">
                        <span className="text-primary text-xs font-bold tracking-wider uppercase mb-1 block">Current</span>
                        <h3 className="font-bold text-lg">Data Analyst</h3>
                        <p className="text-sm text-muted-foreground mt-2">Transforming complex datasets into actionable insights using SQL, Power BI, and Python to drive strategic decisions.</p>
                      </div>
                    </div>
                  </div>

                  {/* Add more timeline items if needed */}

                </div>
              </div>

              {/* Education */}
              <div id="education">
                <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
                  <Code2 className="text-primary w-6 h-6" /> Education
                </h2>
                <div className="space-y-6">
                  <Card className="bg-card/50 border-border/50">
                    <CardHeader>
                      <CardTitle className="text-xl">Clinical Background</CardTitle>
                      <CardDescription className="text-primary">Bridging Healthcare & Data</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Leveraging domain expertise in healthcare to build highly contextualized data models and analytical solutions that address real clinical needs.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's Connect</h2>
            <p className="text-muted-foreground text-lg mb-10">
              Interested in discussing data, analytics, or potential opportunities? Reach out.
            </p>
            
            <Card className="bg-card border-border/50 shadow-xl text-left backdrop-blur-sm">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" placeholder="John Doe" required className="bg-background/50 border-border/50 focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="bg-background/50 border-border/50 focus-visible:ring-primary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" placeholder="How can I help you?" rows={4} required className="bg-background/50 border-border/50 focus-visible:ring-primary resize-none" />
                  </div>
                  <Button type="submit" className="w-full shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)] transition-shadow">
                    Send Message <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 flex items-center justify-center gap-6">
              <a href="https://github.com/hossam-hassan-da/hossam-hassan-da" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/hossam-hassan-da" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-primary/10">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-border/40 text-center text-sm text-muted-foreground bg-background">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Hossam Hassan Ragab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
