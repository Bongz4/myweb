"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Download,
  Mail,
  MapPin,
  Phone,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Target,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PROFILE_IMAGE = "/profile.png";

const profile = {
  fullName: "Lazarus Bongani Senyolo",
  headline: "Data & Analytics Professional",
  subheadline:
    "Python, SQL, PowerBI, forecasting, reporting, and decision support.",
  about:
"I am a Data and Analytics professional with a background in econometrics, mathematics, and computer science. I hold a Bachelor of Science in Computational and Applied Mathematics and Economics, and a Bachelor of Economic Science (Honours) from the University of the Witwatersrand. I am currently in my third year of a Bachelor of Science in Computer Science at BITS Pilani, where I am strengthening my foundations in programming, data structures, algorithms, databases, and software engineering. Professionally, I work as a Manager: Data and Analytics at Wits Health Consortium (Ezintsha), where I design data models, build Power BI dashboards, and develop analytical frameworks that support financial, operational, and strategic decision-making. I focus on transforming complex datasets into clear, actionable insights for senior stakeholders.Previously, I worked at Air Traffic and Navigation Services (ATNS) as both an Econometrician and Target Generating Officer, where I developed forecasting models, conducted statistical analysis, and supported operational planning through data-driven insights. I am proficient in SQL, Python, Power BI, R, Stata, and MATLAB, with strong experience in data modelling, forecasting, and reporting automation. I bring a structured, analytical approach to problem-solving, with a strong interest in research, financial systems, and data-driven strategy.",
  email: "bonganilazarus4@gmail.com",
  phone: "072 175 1256",
  location: "Johannesburg, South Africa",
};

const achievements = [
  "Built dashboards and reporting views that improved visibility of operational and financial performance.",
  "Developed forecasting and planning models to support budgeting and decision-making.",
  "Automated recurring reporting workflows, reducing manual effort and improving turnaround time.",
];

const strengths = [
  {
    title: "Performance Analytics",
    description:
      "Translating operational and financial data into clear management insight.",
    icon: BarChart3,
  },
  {
    title: "Structured Problem Solving",
    description:
      "Using analytical thinking to break down complexity and support better decisions.",
    icon: Target,
  },
  {
    title: "Reliable Execution",
    description:
      "Combining technical delivery with consistency, clarity, and stakeholder trust.",
    icon: ShieldCheck,
  },
];

const projects = [
  {
    title: "Executive KPI Dashboard",
    description:
      "Designed reporting dashboards for operational and financial performance, helping leadership track key metrics clearly and consistently.",
  },
  {
    title: "Forecasting and Planning Models",
    description:
      "Built forecasting models to support budgeting, planning, and better decision-making across business functions.",
  },
  {
    title: "Reporting Automation",
    description:
      "Improved efficiency by automating recurring reporting workflows and reducing manual effort.",
  },
];

const pages = ["Home", "About", "Projects", "Contact"];

type SectionLabelProps = {
  children: React.ReactNode;
};

function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
      {children}
    </div>
  );
}

export default function PortfolioCvWebsite() {
  const [page, setPage] = useState(0);

  const nextPage = () => setPage((prev) => Math.min(prev + 1, pages.length - 1));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 0));

  const renderPage = () => {
    switch (pages[page]) {
      case "Home":
        return (
          <div className="space-y-12">
            <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <SectionLabel>Professional Profile</SectionLabel>
                <h1 className="max-w-3xl text-5xl font-bold tracking-[-0.04em] text-slate-950 md:text-7xl leading-[0.98]">
                  {profile.fullName}
                </h1>
                <p className="mt-5 text-2xl font-semibold text-slate-800 md:text-3xl">
                  {profile.headline}
                </p>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
                  {profile.subheadline}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="rounded-md bg-amber-700 px-8 py-6 text-white shadow-[0_14px_35px_rgba(120,53,15,0.22)] hover:bg-amber-800"
                  >
                    <a href="/cv.pdf" download="Lazarus_Bongani_Senyolo_CV.pdf">
                      Download CV <Download className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => setPage(2)}
                    className="rounded-md border-amber-200 px-8 py-6 font-medium text-amber-800 hover:bg-amber-50"
                  >
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="relative w-full max-w-xs">
                  <div className="absolute -inset-4 bg-amber-200/40 blur-2xl" />
                  <div className="relative border border-amber-200 bg-white p-3 shadow-[0_20px_50px_rgba(120,53,15,0.18)] rounded-md">
                    <img
                      src={PROFILE_IMAGE}
                      alt="Profile"
                      className="w-full rounded-sm object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-5 lg:grid-cols-3">
              {strengths.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={index}
                    className="rounded-md border-amber-200 bg-white shadow-[0_14px_35px_rgba(15,23,42,0.06)]"
                  >
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-amber-700 text-white shadow-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-slate-950">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base leading-7 text-slate-700">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </section>
          </div>
        );

      case "About":
        return (
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="overflow-hidden rounded-md border border-amber-200 bg-white p-3 shadow-[0_20px_50px_rgba(120,53,15,0.14)]">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={PROFILE_IMAGE}
                  alt="Profile"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <SectionLabel>About</SectionLabel>
              <h2 className="text-4xl font-bold tracking-[-0.03em] text-slate-950 md:text-5xl">
                Analytical, structured, and decision-focused.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                {profile.about}
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-md border border-amber-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                    Core strengths
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    Dashboarding, forecasting, reporting automation, business insight, and stakeholder-facing analytics.
                  </p>
                </div>
                <div className="rounded-md border border-amber-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                    Working style
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    Clear communication, structured problem solving, commercial awareness, and consistent delivery.
                  </p>
                </div>
              </div>

              <div className="mt-8 border-l-4 border-amber-700 pl-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                  Selected achievements
                </p>
                <div className="mt-4 space-y-4">
                  {achievements.map((item, index) => (
                    <div key={index} className="text-base leading-7 text-slate-700">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "Projects":
        return (
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-bold tracking-[-0.03em] text-slate-950 md:text-5xl">
                  Projects and capabilities.
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
                  A concise view of the kinds of work I have delivered across analytics, reporting, and decision support.
                </p>
              </div>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="rounded-md border-amber-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.07)] transition hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-amber-700 text-white shadow-md">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-950">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base leading-7 text-slate-700">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case "Contact":
        return (
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="text-4xl font-bold tracking-[-0.03em] text-slate-950 md:text-5xl">
                Let’s connect.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
                I am open to opportunities where strong analytical thinking, reporting capability, and practical execution are valued.
              </p>
            </div>
            <div className="rounded-md border border-amber-200 bg-white p-8 shadow-[0_20px_50px_rgba(120,53,15,0.10)]">
              <div className="space-y-5 text-slate-800">
                <div className="flex items-center gap-3 border-b border-amber-100 pb-4">
                  <Mail className="h-5 w-5 text-amber-800" />
                  <span>{profile.email}</span>
                </div>
                <div className="flex items-center gap-3 border-b border-amber-100 pb-4">
                  <Phone className="h-5 w-5 text-amber-800" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-3 border-b border-amber-100 pb-4">
                  <MapPin className="h-5 w-5 text-amber-800" />
                  <span>{profile.location}</span>
                </div>

                <div className="pt-4 space-y-3">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">
                    Social Profiles
                  </p>

                  <div className="space-y-3">
                    <a href="https://facebook.com/bongani.senyolo" target="_blank" rel="noopener noreferrer" className="block">
                      <div className="flex items-center justify-between rounded-md border border-amber-200 bg-amber-50 px-4 py-3 hover:bg-amber-100 transition">
                        <span className="font-medium text-amber-800">Facebook</span>
                        <ArrowRight className="h-4 w-4 text-amber-800" />
                      </div>
                    </a>

                    <a href="https://www.linkedin.com/in/lazarus-bongani-senyolo-bb039914a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B35sC2iq3ToWOV%2FEXovcPQA%3D%3D" target="_blank" rel="noopener noreferrer" className="block">
                      <div className="flex items-center justify-between rounded-md border border-amber-200 bg-amber-50 px-4 py-3 hover:bg-amber-100 transition">
                        <span className="font-medium text-amber-800">LinkedIn</span>
                        <ArrowRight className="h-4 w-4 text-amber-800" />
                      </div>
                    </a>

                    <a href="https://github.com/Bongz4" target="_blank" rel="noopener noreferrer" className="block">
                      <div className="flex items-center justify-between rounded-md border border-amber-200 bg-amber-50 px-4 py-3 hover:bg-amber-100 transition">
                        <span className="font-medium text-amber-800">GitHub</span>
                        <ArrowRight className="h-4 w-4 text-amber-800" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f5f0] px-6 py-8 text-slate-900 md:px-10 md:py-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 border-b border-amber-200 pb-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">
                Personal Website
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                {profile.fullName}
              </h1>
            </div>
            <nav className="flex flex-wrap gap-2">
              {pages.map((item, index) => (
                <Button
                  key={item}
                  onClick={() => setPage(index)}
                  variant="outline"
                  className={`rounded-md px-5 font-medium ${
                    page === index
                      ? "border-amber-700 bg-amber-700 text-white hover:bg-amber-800"
                      : "border-amber-200 bg-white text-amber-800 hover:bg-amber-50"
                  }`}
                >
                  {item}
                </Button>
              ))}
            </nav>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>

        <footer className="mt-12 border-t border-amber-200 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-amber-800">
              Page {page + 1} of {pages.length}
            </p>
            <div className="flex gap-3">
              <Button
                onClick={prevPage}
                disabled={page === 0}
                variant="outline"
                className="rounded-md border-amber-200 bg-white text-amber-800 hover:bg-amber-50"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button
                onClick={nextPage}
                disabled={page === pages.length - 1}
                className="rounded-md bg-amber-700 text-white hover:bg-amber-800 shadow"
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}