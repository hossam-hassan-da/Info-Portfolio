import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Activity, Database, BarChart3, Code2, LineChart, Table, GitBranch, Terminal, Mail, Linkedin, Github, ExternalLink, ArrowRight, ChevronRight, X, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const base = import.meta.env.BASE_URL;

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
              I transform raw data into actionable insights across healthcare, retail, and technology — turning complex datasets from any domain into clear, strategic decisions.
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
                          src={`${base}healthcare_dashboard.png`} 
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
                        <img src={`${base}healthcare_dashboard.png`} alt="Power BI Dashboard" className="w-full h-auto" />
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
                          <img src={`${base}healthcare_schema.png`} alt="Data Schema" className="w-full h-auto rounded mix-blend-screen" />
                        </div>
                      </div>
                    </div>

                    {/* Workflow */}
                    <div className="space-y-4 bg-background/30 p-6 rounded-xl border border-border/30">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <GitBranch className="w-5 h-5 text-primary" /> Project Workflow
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {["1. Data Collection & Cleaning", "2. Star Schema Design (MySQL)", "3. SQL Analytical Queries", "4. Power BI Dashboard & DAX"].map((step, i) => (
                          <div key={i} className="bg-card rounded-lg p-3 border border-border/50 text-sm text-muted-foreground">
                            {step}
                          </div>
                        ))}
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


              {/* Project 2 */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all cursor-pointer group bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] mt-6">
                    <div className="md:flex h-full">
                      <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity"></div>
                        <img
                          src={`${base}retail_dashboard.png`}
                          alt="Retail Sales Dashboard Preview"
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
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Sales & Customer Analytics Report</h3>
                          <p className="text-muted-foreground mb-6 line-clamp-3">
                            Interactive retail dashboard analyzing $456K in sales across 1,000 transactions — uncovering customer demographics, product category trends, and temporal patterns to drive data-driven business decisions.
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
                    <DialogTitle className="text-xl font-bold">Sales & Customer Analytics Report</DialogTitle>
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
                        <h2 className="text-3xl font-extrabold">Retail Sales & Customer Analytics</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          An interactive Power BI dashboard analyzing retail transaction data to extract actionable insights on sales performance, customer demographics, product category trends, and temporal purchasing patterns.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                          <Button asChild className="rounded-full shadow-[0_0_10px_rgba(0,212,255,0.3)]">
                            <a href="https://app.powerbi.com/links/VCtMebx-DD?ctid=5bf578da-db20-4df2-b8d2-c2357607e377&pbi_source=linkShare" target="_blank" rel="noreferrer">
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

                      <div className="w-full md:w-1/3 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4">
                        <Card className="bg-background/50 border-border/50">
                          <CardContent className="p-5 flex flex-col items-center justify-center text-center">
                            <span className="text-3xl font-bold text-primary mb-1">$456K</span>
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Total Sales</span>
                          </CardContent>
                        </Card>
                        <Card className="bg-background/50 border-border/50">
                          <CardContent className="p-5 flex flex-col items-center justify-center text-center">
                            <span className="text-3xl font-bold text-primary mb-1">1,000</span>
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Transactions</span>
                          </CardContent>
                        </Card>
                        <Card className="bg-background/50 border-border/50">
                          <CardContent className="p-5 flex flex-col items-center justify-center text-center">
                            <span className="text-3xl font-bold text-primary mb-1">$456</span>
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Avg. Sale Value</span>
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
                        <img src={`${base}retail_dashboard.png`} alt="Retail Sales Power BI Dashboard" className="w-full h-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground text-center mt-2">Interactive Power BI Dashboard with gender slicer, category breakdown, temporal trends, and demographic analysis.</p>
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
                              <span className="font-semibold">Category Sales:</span> Beauty leads at <span className="text-primary font-mono bg-primary/10 px-1 rounded">$157K (34.41%)</span>, followed by Clothing $156K (34.12%) and Electronics $144K (31.47%) — a balanced distribution across all three.
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(0,212,255,1)]" />
                            <div>
                              <span className="font-semibold">Peak Demographics:</span> The <span className="text-primary">40-49 age group</span> drives the highest transaction volume, with 50-59 as the second-largest segment.
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(0,212,255,1)]" />
                            <div>
                              <span className="font-semibold">Seasonal Trends:</span> <span className="text-primary">February</span> is the peak sales month; May, July, and December also perform strongly. September records the lowest volume.
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(0,212,255,1)]" />
                            <div>
                              <span className="font-semibold">Gender Distribution:</span> Relatively balanced Male/Female purchasing patterns across all categories and days.
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                          <Database className="w-6 h-6 text-primary" /> Data Model
                        </h3>
                        <p className="text-muted-foreground">
                          Built a Star Schema with 3 dimension tables (product, customer, date/time) feeding a central fact_sales_table for optimized analytical queries.
                        </p>
                        <div className="rounded-xl overflow-hidden border border-border/50 bg-background/50 p-4">
                          <img src={`${base}retail_schema.png`} alt="Retail Star Schema" className="w-full h-auto rounded mix-blend-screen" />
                        </div>
                      </div>
                    </div>

                    {/* Workflow */}
                    <div className="space-y-4 bg-background/30 p-6 rounded-xl border border-border/30">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <GitBranch className="w-5 h-5 text-primary" /> Project Workflow
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {["1. Raw Data Import & Cleaning", "2. Star Schema Design (MySQL)", "3. SQL Analytical Queries", "4. Power BI Dashboard & DAX"].map((step, i) => (
                          <div key={i} className="bg-card rounded-lg p-3 border border-border/50 text-sm text-muted-foreground">
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SQL Analysis */}
                    <div className="space-y-6 bg-background/30 p-6 rounded-xl border border-border/30">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-primary" /> SQL Analyses Performed
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Transactions by Age Group</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Sales by Product Category</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Average Sales per Category</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Top Customer Identification</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Monthly Sales Trends</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Gender & Day-of-Week Analysis</Badge>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>



              {/* Project 3 */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all cursor-pointer group bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] mt-6">
                    <div className="md:flex h-full">
                      <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity"></div>
                        <img
                          src={`${base}ai_dashboard_country.png`}
                          alt="AI Job Market Dashboard Preview"
                          className="w-full h-full object-cover object-left-top group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="md:w-3/5 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">Power BI</Badge>
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">SQL</Badge>
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">DAX</Badge>
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">MySQL</Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">AI Job Market Trends 2026</h3>
                          <p className="text-muted-foreground mb-6 line-clamp-3">
                            Comprehensive analysis of 52K+ global AI job postings — benchmarking salaries at $113.44K average, mapping in-demand skills across roles, and identifying geographic hiring hotspots across 7 countries.
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
                    <DialogTitle className="text-xl font-bold">AI Job Market Trends 2026</DialogTitle>
                  </div>

                  <div className="p-6 md:p-8 space-y-12">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-1 space-y-6">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="border-primary/30 text-primary">MySQL</Badge>
                          <Badge variant="outline" className="border-primary/30 text-primary">Power BI</Badge>
                          <Badge variant="outline" className="border-primary/30 text-primary">DAX</Badge>
                          <Badge variant="outline" className="border-primary/30 text-primary">SQL</Badge>
                        </div>
                        <h2 className="text-3xl font-extrabold">End-to-End AI Job Market Analysis</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          A comprehensive analysis of 52,000+ global AI job postings — transforming raw CSV data into an interactive Power BI dashboard that benchmarks salaries, maps in-demand skills, tracks geographic opportunities, and surfaces hiring urgency trends across 7 countries (2020–2026).
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                          <Button asChild className="rounded-full shadow-[0_0_10px_rgba(0,212,255,0.3)]">
                            <a href="https://app.powerbi.com/links/l0JBrwZxmB?ctid=5bf578da-db20-4df2-b8d2-c2357607e377&pbi_source=linkShare" target="_blank" rel="noreferrer">
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

                      <div className="w-full md:w-1/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                        <Card className="bg-background/50 border-border/50">
                          <CardContent className="p-5 flex flex-col items-center justify-center text-center">
                            <span className="text-3xl font-bold text-primary mb-1">52K+</span>
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Job Opportunities</span>
                          </CardContent>
                        </Card>
                        <Card className="bg-background/50 border-border/50">
                          <CardContent className="p-5 flex flex-col items-center justify-center text-center">
                            <span className="text-3xl font-bold text-primary mb-1">$113.44K</span>
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Avg. Salary</span>
                          </CardContent>
                        </Card>
                        <Card className="bg-background/50 border-border/50">
                          <CardContent className="p-5 flex flex-col items-center justify-center text-center">
                            <span className="text-3xl font-bold text-primary mb-1">7</span>
                            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Countries Analyzed</span>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <Separator className="bg-border/50" />

                    {/* Dashboard Visuals — two views */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold flex items-center gap-2">
                        <BarChart3 className="w-6 h-6 text-primary" /> Dashboard Views
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="rounded-xl overflow-hidden border border-border/50 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                          <img src={`${base}ai_dashboard_country.png`} alt="Country View" className="w-full h-auto" />
                          <p className="text-xs text-muted-foreground text-center py-2 bg-card/50">Country & Industry View</p>
                        </div>
                        <div className="rounded-xl overflow-hidden border border-border/50 shadow-[0_0_20px_rgba(0,0,0,0.4)]">
                          <img src={`${base}ai_dashboard_jobs.png`} alt="Jobs & Skills View" className="w-full h-auto" />
                          <p className="text-xs text-muted-foreground text-center py-2 bg-card/50">Salary & Skills View</p>
                        </div>
                      </div>
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
                              <span className="font-semibold">Salary Benchmarks:</span> <span className="text-primary">AI Engineers & ML Engineers</span> command the highest compensation, significantly outperforming traditional analyst roles.
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(0,212,255,1)]" />
                            <div>
                              <span className="font-semibold">Skills in Demand:</span> Top 5 competencies across all roles — <span className="text-primary">Cloud, Deep Learning, ML, Python, SQL</span> — distributed consistently (~20% each), indicating a full-stack data expectation.
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(0,212,255,1)]" />
                            <div>
                              <span className="font-semibold">Hiring Urgency:</span> Senior-level roles show the highest salary premiums in high-urgency markets. Mid-to-Senior positions dominate demand.
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 shadow-[0_0_5px_rgba(0,212,255,1)]" />
                            <div>
                              <span className="font-semibold">Geographic Hotspots:</span> <span className="text-primary">Germany, Canada & Australia</span> show the highest salary-to-opportunity ratios; India offers the highest volume at competitive salaries.
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                          <Database className="w-6 h-6 text-primary" /> Data Model
                        </h3>
                        <p className="text-muted-foreground">
                          Designed a Star Schema in MySQL with 4 dimension tables (job_description, company_table, date_table, technical_job_required_skills) and a central fact_table linking all entities.
                        </p>
                        <div className="rounded-xl overflow-hidden border border-border/50 bg-background/50 p-4">
                          <img src={`${base}ai_schema.png`} alt="AI Job Market Star Schema" className="w-full h-auto rounded mix-blend-screen" />
                        </div>
                      </div>
                    </div>

                    {/* Workflow */}
                    <div className="space-y-4 bg-background/30 p-6 rounded-xl border border-border/30">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <GitBranch className="w-5 h-5 text-primary" /> Project Workflow
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {["1. CSV Cleaning & Standardization", "2. Star Schema Design (MySQL)", "3. SQL Analytical Queries", "4. Power BI Dashboard & DAX"].map((step, i) => (
                          <div key={i} className="bg-card rounded-lg p-3 border border-border/50 text-sm text-muted-foreground">
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SQL Analysis */}
                    <div className="space-y-6 bg-background/30 p-6 rounded-xl border border-border/30">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-primary" /> SQL Analyses Performed
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Job Count by Remote Type</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Required Skills by Job Title</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Salary by Education Level</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Salary by Company Size</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Opportunities by Country</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Year-over-Year Trends</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Salary by Hiring Urgency</Badge>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Project 4 */}
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all cursor-pointer group bg-card/50 backdrop-blur-sm shadow-lg hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] mt-6">
                    <div className="md:flex h-full">
                      <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity"></div>
                        <img
                          src={`${base}pharmacy_schema.png`}
                          alt="Pharmacy Sales Data Warehouse Schema"
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="md:w-3/5 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">MySQL</Badge>
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">SQL</Badge>
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">Excel</Badge>
                            <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">Star Schema</Badge>
                          </div>
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Pharmacy Sales Data Warehouse</h3>
                          <p className="text-muted-foreground mb-6 line-clamp-3">
                            End-to-end data warehouse solution transforming 5 months of raw pharmacy transactional data into a normalized MySQL Star Schema — covering data cleaning, ETL, DDL design, and referential integrity for analytical querying.
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <img src="https://img.shields.io/github/stars/hossam-hassan-da/pharmacy-sales-data-warehouse?style=flat&logo=github&color=00d4ff&labelColor=0d1b2a&logoColor=00d4ff" alt="GitHub Stars" className="h-5" />
                            <img src="https://img.shields.io/github/forks/hossam-hassan-da/pharmacy-sales-data-warehouse?style=flat&logo=github&color=00d4ff&labelColor=0d1b2a&logoColor=00d4ff" alt="GitHub Forks" className="h-5" />
                            <img src="https://img.shields.io/badge/Status-Complete-00d4ff?style=flat&labelColor=0d1b2a" alt="Status" className="h-5" />
                          </div>
                        </div>
                        <div className="flex items-center text-primary font-medium text-sm">
                          View Case Study <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border/50">
                  <DialogHeader className="pb-4 border-b border-border/30">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge className="bg-primary/10 text-primary border-primary/20">MySQL</Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20">SQL</Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20">Excel</Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20">Star Schema</Badge>
                      <Badge className="bg-primary/10 text-primary border-primary/20">ETL</Badge>
                    </div>
                    <DialogTitle className="text-2xl font-bold">Pharmacy Sales Data Warehouse</DialogTitle>
                    <DialogDescription className="text-base text-muted-foreground">
                      A structured data warehouse solution transforming 5 months of raw transactional pharmacy data into a normalized, query-optimized MySQL database using a Star Schema design — with full ETL documentation and referential integrity.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-8 pt-6">
                    {/* KPI Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: "Monthly Tables", value: "5", sub: "Dimension Tables" },
                        { label: "Transactions", value: "~5K", sub: "Records Linked" },
                        { label: "Columns / Table", value: "9", sub: "Fields per Month" },
                        { label: "Data Months", value: "Jan–May", sub: "Coverage" },
                      ].map((kpi) => (
                        <div key={kpi.label} className="bg-background/50 rounded-xl p-4 border border-border/50 text-center">
                          <div className="text-2xl font-bold text-primary">{kpi.value}</div>
                          <div className="text-xs font-semibold mt-1">{kpi.label}</div>
                          <div className="text-xs text-muted-foreground">{kpi.sub}</div>
                        </div>
                      ))}
                    </div>

                    {/* Star Schema */}
                    <div className="space-y-4 bg-background/30 p-6 rounded-xl border border-border/30">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Database className="w-5 h-5 text-primary" /> Star Schema Design
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Designed a Star Schema with 5 monthly dimension tables (january_sales → may_sales) feeding a central fact_sales_table linked by foreign keys — enabling fast aggregations and month-over-month trend analysis.
                      </p>
                      <div className="rounded-xl overflow-hidden border border-border/50 bg-background/50 p-4">
                        <img src={`${base}pharmacy_schema.png`} alt="Pharmacy Star Schema" className="w-full h-auto rounded" />
                      </div>
                    </div>

                    {/* Data Cleaning */}
                    <div className="space-y-4 bg-background/30 p-6 rounded-xl border border-border/30">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Activity className="w-5 h-5 text-primary" /> Data Cleaning Process (Excel)
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {[
                          { step: "Missing Values", desc: "Filled blank transaction numbers, replaced empty numerics with 0, added 'No notes' for empty notes fields" },
                          { step: "Date Standardization", desc: "Converted all dates to YYYY-MM-DD using Excel TEXT() function across all 5 months" },
                          { step: "Time Standardization", desc: "Normalized time entries to HH:MM:SS format using Excel TEXT() function" },
                          { step: "Duplicate Removal", desc: "Used Excel Remove Duplicates on transaction_number as the unique key column" },
                          { step: "Discount Validation", desc: "Recalculated discount values: Discount = Transaction Price × (Discount % / 100)" },
                          { step: "Data Type Consistency", desc: "All price columns formatted as Number (2 decimal places), text columns validated for consistency" },
                        ].map((item) => (
                          <div key={item.step} className="bg-card rounded-lg p-3 border border-border/50">
                            <div className="text-sm font-semibold text-primary mb-1">{item.step}</div>
                            <div className="text-xs text-muted-foreground">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SQL Screenshots */}
                    <div className="space-y-4 bg-background/30 p-6 rounded-xl border border-border/30">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-primary" /> SQL Implementation
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="rounded-xl overflow-hidden border border-border/50 shadow-md">
                          <img src={`${base}pharmacy_january_table.png`} alt="Creating January Sales Table" className="w-full h-auto" />
                          <p className="text-xs text-muted-foreground text-center py-2 bg-card/50">Monthly Dimension Table DDL</p>
                        </div>
                        <div className="rounded-xl overflow-hidden border border-border/50 shadow-md">
                          <img src={`${base}pharmacy_fact_table.png`} alt="Creating Fact Sales Table" className="w-full h-auto" />
                          <p className="text-xs text-muted-foreground text-center py-2 bg-card/50">Central Fact Table with Foreign Keys</p>
                        </div>
                        <div className="rounded-xl overflow-hidden border border-border/50 shadow-md md:col-span-2">
                          <img src={`${base}pharmacy_insert_sql.png`} alt="Recursive CTE Insert" className="w-full h-auto" />
                          <p className="text-xs text-muted-foreground text-center py-2 bg-card/50">Recursive CTE for Bulk Data Insertion (5000 rows)</p>
                        </div>
                      </div>
                    </div>

                    {/* Workflow */}
                    <div className="space-y-4 bg-background/30 p-6 rounded-xl border border-border/30">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <GitBranch className="w-5 h-5 text-primary" /> Project Workflow
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {["1. Excel Data Cleaning & Validation", "2. Star Schema Design (MySQL)", "3. DDL Scripts & Foreign Keys", "4. Recursive CTE Data Loading"].map((step, i) => (
                          <div key={i} className="bg-card rounded-lg p-3 border border-border/50 text-sm text-muted-foreground">
                            {step}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* SQL Analyses */}
                    <div className="space-y-6 bg-background/30 p-6 rounded-xl border border-border/30">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Terminal className="w-5 h-5 text-primary" /> SQL Techniques Used
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">DDL Table Creation</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Foreign Key Constraints</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Recursive CTE (WITH RECURSIVE)</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Bulk INSERT via CTE</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">AUTO_INCREMENT Primary Keys</Badge>
                        <Badge variant="secondary" className="bg-card hover:bg-card border-border/50 text-foreground py-1.5 px-3">Referential Integrity Design</Badge>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-4 pt-2">
                      <div className="flex flex-wrap gap-2">
                        <img src="https://img.shields.io/github/stars/hossam-hassan-da/pharmacy-sales-data-warehouse?style=flat&logo=github&color=00d4ff&labelColor=0d1b2a&logoColor=00d4ff" alt="GitHub Stars" className="h-5" />
                        <img src="https://img.shields.io/github/forks/hossam-hassan-da/pharmacy-sales-data-warehouse?style=flat&logo=github&color=00d4ff&labelColor=0d1b2a&logoColor=00d4ff" alt="GitHub Forks" className="h-5" />
                        <img src="https://img.shields.io/github/last-commit/hossam-hassan-da/pharmacy-sales-data-warehouse?style=flat&color=00d4ff&labelColor=0d1b2a" alt="Last Commit" className="h-5" />
                        <img src="https://img.shields.io/badge/Status-Complete-00d4ff?style=flat&labelColor=0d1b2a" alt="Status" className="h-5" />
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <a href="https://github.com/hossam-hassan-da/pharmacy-sales-data-warehouse" target="_blank" rel="noreferrer"
                          className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 hover:border-primary/50 text-sm font-medium hover:text-primary transition-colors bg-card">
                          <Github className="w-4 h-4" /> View on GitHub
                        </a>
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
                <div className="space-y-6">

                  {/* Freelance */}
                  <div className="relative pl-5 border-l-2 border-primary/40">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background shadow-[0_0_8px_rgba(0,212,255,0.7)]"></div>
                    <div className="p-5 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors shadow-sm">
                      <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                        <span className="text-primary text-xs font-bold tracking-wider uppercase">Present</span>
                      </div>
                      <h3 className="font-bold text-lg">Freelance Data Analyst</h3>
                      <p className="text-xs text-muted-foreground mb-3 font-medium">Independent · Remote</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Deliver end-to-end data analytics solutions for clients across healthcare, retail, and technology sectors. Responsibilities include requirements gathering, data modeling, SQL-based extraction and transformation, and building interactive Power BI dashboards that drive measurable business decisions.
                      </p>
                    </div>
                  </div>

                  {/* ALX Academy */}
                  <div className="relative pl-5 border-l-2 border-border/40">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-border/60 bg-background"></div>
                    <div className="p-5 rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-colors shadow-sm">
                      <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                        <span className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">6 Months · Completed</span>
                      </div>
                      <h3 className="font-bold text-lg">Data Analytics Trainee</h3>
                      <p className="text-xs text-muted-foreground mb-3 font-medium">ALX Academy · Cairo, Egypt</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Completed an intensive 6-month professional development program focused on Data Analytics for the Digital Age. Executed hands-on, end-to-end projects encompassing data collection, cleaning and transformation with SQL, exploratory data analysis, and business intelligence visualization using Power BI — building a production-ready analytical skill set.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Education */}
              <div id="education">
                <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
                  <Code2 className="text-primary w-6 h-6" /> Education
                </h2>
                <div className="space-y-6">
                  <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Bachelor of Pharmacy</CardTitle>
                      <CardDescription className="text-primary font-medium">Sohag University</CardDescription>
                      <p className="text-sm text-muted-foreground pt-1">Graduated 2024</p>
                    </CardHeader>
                  </Card>

                  <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">Professional Certificate in Data Analytics</CardTitle>
                      <CardDescription className="text-primary font-medium">ALX Academy</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        Intensive industry-aligned program covering end-to-end data analytics with hands-on projects and real-world applications.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["SQL", "Power BI", "Excel", "Statistics", "Data Storytelling", "Agile Methodologies"].map((skill) => (
                          <span key={skill} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {skill}
                          </span>
                        ))}
                      </div>
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

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a href="https://github.com/hossam-hassan-da/hossam-hassan-da" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-primary/10 border border-border/40 hover:border-primary/40">
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/hossam-dataanalyst/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-primary/10 border border-border/40 hover:border-primary/40">
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="mailto:hossamhassann244@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-primary/10 border border-border/40 hover:border-primary/40">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">hossamhassann244@gmail.com</span>
              </a>
              <a href="tel:+201147699721" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-primary/10 border border-border/40 hover:border-primary/40">
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">01147699721</span>
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
