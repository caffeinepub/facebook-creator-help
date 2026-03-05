import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Clock,
  Copyright,
  DollarSign,
  Ghost,
  LayoutDashboard,
  Loader2,
  Lock,
  Megaphone,
  MessageCircle,
  Play,
  Send,
  Settings,
  Shield,
  Star,
  TrendingDown,
  UserX,
  Wrench,
  Zap,
} from "lucide-react";
import { AnimatePresence, type Variants, motion } from "motion/react";
import { useRef, useState } from "react";
import { useActor } from "./hooks/useActor";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormState {
  name: string;
  pageLink: string;
  problemDescription: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROBLEMS = [
  {
    icon: DollarSign,
    title: "Monetization Not Working",
    desc: "Can't earn from your Facebook page? We'll diagnose and fix it.",
  },
  {
    icon: TrendingDown,
    title: "Low Reach on Reels",
    desc: "Your reels aren't reaching the right audience — we optimize for growth.",
  },
  {
    icon: Copyright,
    title: "Copyright Strikes",
    desc: "Unfair or false copyright claims dragging your page down.",
  },
  {
    icon: Ghost,
    title: "Fake Accounts or Pages",
    desc: "Imposters hurting your brand and stealing your audience.",
  },
  {
    icon: Lock,
    title: "Page Restrictions",
    desc: "Page blocked or limited by Facebook for unknown reasons.",
  },
  {
    icon: Settings,
    title: "Technical Account Issues",
    desc: "Login problems, hacked accounts, or access issues resolved.",
  },
];

const SERVICES = [
  { icon: DollarSign, title: "Facebook Page Monetization Help" },
  { icon: Shield, title: "Copyright Issue Resolution" },
  { icon: UserX, title: "Fake Account / Page Removal" },
  { icon: Megaphone, title: "Facebook Ads & Promotion Guidance" },
  { icon: BarChart3, title: "Page Growth & Engagement Strategy" },
  { icon: Wrench, title: "Technical Problems & Account Recovery" },
  { icon: LayoutDashboard, title: "Page Setup & Optimization" },
  { icon: Play, title: "Reels Reach Optimization" },
];

const TRUST_SIGNALS = [
  {
    icon: Star,
    title: "4+ Years of Experience",
    desc: "Deep expertise in Facebook's ever-changing algorithms and policies.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Creator Success",
    desc: "Helped dozens of creators recover, grow, and monetize their pages.",
  },
  {
    icon: Zap,
    title: "Fast, Practical Support",
    desc: "No fluff — real solutions delivered quickly so you can get back to creating.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Send Your Facebook Page Link",
    desc: "Share your page URL so we can understand your current situation and goals.",
  },
  {
    num: "02",
    title: "We Review Your Page",
    desc: "Our team thoroughly analyzes your page for issues, opportunities, and growth levers.",
  },
  {
    num: "03",
    title: "Get a Solution & Growth Strategy",
    desc: "Receive a personalized action plan with clear steps to fix problems and accelerate growth.",
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const EASE_OUT: [number, number, number, number] = [0.0, 0.0, 0.2, 1.0];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

// ─── Sub-Components ───────────────────────────────────────────────────────────

function Navbar({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-border/50 bg-background/80">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-neon flex items-center justify-center shadow-neon-sm">
            <AlertCircle className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-700 text-base sm:text-lg text-foreground tracking-tight">
            Facebook<span className="text-neon"> Creator</span> Help
          </span>
        </div>
        <Button
          onClick={onCTAClick}
          className="bg-neon text-primary-foreground font-semibold text-sm px-4 py-2 h-9 hover:bg-neon/90 shadow-neon-sm hover:shadow-neon transition-all duration-300 rounded-md"
          data-ocid="nav.primary_button"
        >
          Get Free Review
        </Button>
      </nav>
    </header>
  );
}

function HeroSection({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden grid-pattern">
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, oklch(0.82 0.22 143) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-6"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-neon text-sm font-medium border border-neon/30 rounded-full px-4 py-1.5 bg-neon/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
              Facebook Page Expert Services
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tight"
          >
            Fix Your Facebook Page{" "}
            <span className="text-neon neon-text-glow">Issues</span> &amp; Grow{" "}
            <span className="text-neon neon-text-glow">Faster</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We help Facebook creators solve monetization problems, copyright
            issues, and grow their page reach — so you can focus on creating.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button
              onClick={onCTAClick}
              size="lg"
              className="bg-neon text-primary-foreground font-bold text-base px-8 py-6 h-auto hover:bg-neon/90 shadow-neon hover:shadow-neon-lg transition-all duration-300 rounded-lg group"
              data-ocid="hero.primary_button"
            >
              Send Your Page for Free Review
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.p variants={fadeUp} className="text-muted-foreground text-sm">
            Free review • No commitment required • Fast response
          </motion.p>
        </motion.div>

        {/* Floating stat badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            { label: "Creators Helped", value: "200+" },
            { label: "Years Experience", value: "4+" },
            { label: "Issues Resolved", value: "500+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-xl px-6 py-4 text-center"
            >
              <div className="text-2xl font-display font-black text-neon">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-xs mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProblemsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-neon text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Common Pain Points
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground"
          >
            Are You Facing <span className="text-neon">These Issues?</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto"
          >
            Thousands of creators struggle with these problems every day. You
            don't have to fight them alone.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PROBLEMS.map((problem, i) => (
            <motion.div
              key={problem.title}
              variants={cardVariant}
              className="card-hover bg-card border border-border rounded-xl p-6 cursor-default"
              data-ocid={`problems.item.${i + 1}`}
            >
              <div className="w-11 h-11 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center mb-4">
                <problem.icon className="w-5 h-5 text-neon" />
              </div>
              <h3 className="font-display font-bold text-foreground text-base mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-neon text-sm font-semibold uppercase tracking-widest mb-3"
          >
            What We Do
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground"
          >
            Our <span className="text-neon">Services</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto"
          >
            Comprehensive support for every Facebook creator challenge — from
            technical fixes to growth strategies.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              className="card-hover bg-card border border-border rounded-xl p-5 cursor-default group"
              data-ocid={`services.item.${i + 1}`}
            >
              <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center mb-3 group-hover:bg-neon/20 transition-colors">
                <service.icon className="w-5 h-5 text-neon" />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm leading-snug">
                {service.title}
              </h3>
              <ChevronRight className="w-4 h-4 text-neon/50 mt-2 group-hover:text-neon group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-5"
          style={{
            background:
              "radial-gradient(circle, oklch(0.82 0.22 143) 0%, transparent 70%)",
          }}
        />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-neon text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Our Track Record
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground"
          >
            Why Creators <span className="text-neon">Trust Us</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TRUST_SIGNALS.map((signal, i) => (
            <motion.div
              key={signal.title}
              variants={cardVariant}
              className="card-hover bg-card border border-border rounded-xl p-8 text-center cursor-default"
              data-ocid={`trust.item.${i + 1}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-neon/10 border border-neon/30 flex items-center justify-center mx-auto mb-5 shadow-neon-sm">
                <signal.icon className="w-7 h-7 text-neon" />
              </div>
              <h3 className="font-display font-bold text-foreground text-lg mb-3">
                {signal.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {signal.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-neon text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Simple Process
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground"
          >
            How It <span className="text-neon">Works</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto"
          >
            Get started in minutes. Three simple steps to fix your Facebook page
            and start growing.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="space-y-5"
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              variants={cardVariant}
              className="card-hover bg-card border border-border rounded-xl p-6 sm:p-8 flex gap-6 items-start cursor-default"
              data-ocid={`process.item.${i + 1}`}
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center shadow-neon-sm">
                  <span className="font-display font-black text-neon text-lg neon-text-glow">
                    {step.num}
                  </span>
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-display font-bold text-foreground text-lg sm:text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden sm:flex flex-shrink-0 self-center">
                  <ArrowRight className="w-5 h-5 text-neon/40" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTABanner({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-neon/5 border-y border-neon/20" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.82 0.22 143 / 0.08) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-4">
            <Clock className="w-8 h-8 text-neon" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-5 leading-tight"
          >
            Don't Let Issues Hold{" "}
            <span className="text-neon neon-text-glow">Your Page Back</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto"
          >
            Send your page link for a free review and get expert guidance. Most
            issues can be fixed faster than you think.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button
              onClick={onCTAClick}
              size="lg"
              className="bg-neon text-primary-foreground font-bold text-base px-10 py-6 h-auto hover:bg-neon/90 shadow-neon hover:shadow-neon-lg transition-all duration-300 rounded-lg group"
              data-ocid="cta.primary_button"
            >
              Get Your Free Page Review
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>({
    name: "",
    pageLink: "",
    problemDescription: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: FormState) => {
      if (!actor) throw new Error("Service not available. Please try again.");
      return actor.submitLead(
        data.name,
        data.pageLink,
        data.problemDescription,
      );
    },
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutation.mutate(form);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleReset() {
    mutation.reset();
    setForm({ name: "", pageLink: "", problemDescription: "" });
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-neon text-sm font-semibold uppercase tracking-widest mb-3"
          >
            Free Review
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground"
          >
            Get Expert <span className="text-neon">Guidance</span> Today
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto"
          >
            Reach out via WhatsApp for instant support, or fill the form for a
            detailed page review.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* WhatsApp card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center mb-6 shadow-neon-sm">
                <MessageCircle className="w-7 h-7 text-neon" />
              </div>
              <h3 className="font-display font-bold text-foreground text-xl mb-3">
                Chat on WhatsApp
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Get instant answers and real-time support. We respond quickly so
                you can get back to creating.
              </p>
              <ul className="space-y-2 mb-8">
                {[
                  "Instant replies during business hours",
                  "Send screenshots directly",
                  "Get quick guidance on urgent issues",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-neon flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp_button"
            >
              <Button
                size="lg"
                className="w-full bg-neon text-primary-foreground font-bold hover:bg-neon/90 shadow-neon-sm hover:shadow-neon transition-all duration-300 rounded-lg"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Message Us on WhatsApp
              </Button>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <AnimatePresence mode="wait">
              {mutation.isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center h-full min-h-[320px] text-center"
                  data-ocid="contact.success_state"
                >
                  <div className="w-16 h-16 rounded-full bg-neon/10 border border-neon/30 flex items-center justify-center mb-5 shadow-neon">
                    <CheckCircle2 className="w-8 h-8 text-neon" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-xl mb-3">
                    Review Submitted!
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    Thanks! We'll review your page and get back to you soon with
                    a personalized strategy.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-6 border-border text-muted-foreground hover:text-foreground hover:border-neon/50"
                    onClick={handleReset}
                  >
                    Submit Another Request
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <h3 className="font-display font-bold text-foreground text-xl mb-1">
                      Free Page Review
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Fill out the form and we'll get back to you within 24
                      hours.
                    </p>
                  </div>

                  {mutation.isError && (
                    <div
                      className="flex items-start gap-3 bg-destructive/10 border border-destructive/30 rounded-lg p-4"
                      data-ocid="contact.error_state"
                    >
                      <AlertCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                      <p className="text-destructive text-sm">
                        Something went wrong. Please try again or contact us via
                        WhatsApp.
                      </p>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-foreground text-sm font-medium"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. Alex Johnson"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="bg-input border-border focus:border-neon/50 focus:ring-neon/20 text-foreground placeholder:text-muted-foreground"
                      data-ocid="contact.name_input"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="pageLink"
                      className="text-foreground text-sm font-medium"
                    >
                      Facebook Page Link
                    </Label>
                    <Input
                      id="pageLink"
                      name="pageLink"
                      type="url"
                      placeholder="https://facebook.com/yourpage"
                      value={form.pageLink}
                      onChange={handleChange}
                      required
                      className="bg-input border-border focus:border-neon/50 focus:ring-neon/20 text-foreground placeholder:text-muted-foreground"
                      data-ocid="contact.pagelink_input"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="problemDescription"
                      className="text-foreground text-sm font-medium"
                    >
                      Describe Your Problem
                    </Label>
                    <Textarea
                      id="problemDescription"
                      name="problemDescription"
                      placeholder="Tell us about the issues you're facing with your Facebook page..."
                      value={form.problemDescription}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-input border-border focus:border-neon/50 focus:ring-neon/20 text-foreground placeholder:text-muted-foreground resize-none"
                      data-ocid="contact.problem_textarea"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    size="lg"
                    className="w-full bg-neon text-primary-foreground font-bold hover:bg-neon/90 shadow-neon-sm hover:shadow-neon transition-all duration-300 rounded-lg disabled:opacity-60"
                    data-ocid="contact.submit_button"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2
                          className="mr-2 w-4 h-4 animate-spin"
                          data-ocid="contact.loading_state"
                        />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Send for Free Review
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-neon flex items-center justify-center shadow-neon-sm">
            <AlertCircle className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-foreground text-sm">
            Facebook<span className="text-neon"> Creator</span> Help
          </span>
        </div>
        <p className="text-muted-foreground text-sm text-center">
          © {year} Facebook Creator Help. All rights reserved.
        </p>
        <p className="text-muted-foreground text-xs">
          Built with ❤️ using{" "}
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon/70 hover:text-neon transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}

// ─── App Root ─────────────────────────────────────────────────────────────────

export default function App() {
  const contactRef = useRef<HTMLElement | null>(null);

  function scrollToContact() {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Set page meta
  if (typeof document !== "undefined") {
    document.title = "Facebook Creator Help – Fix Page Issues & Grow Faster";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Expert help for Facebook creators: fix monetization problems, resolve copyright issues, recover hacked accounts, and grow your page reach.";
      document.head.appendChild(meta);
    }
  }

  void contactRef; // suppress unused warning

  return (
    <div className="min-h-screen bg-background">
      <Navbar onCTAClick={scrollToContact} />
      <main>
        <HeroSection onCTAClick={scrollToContact} />
        <ProblemsSection />
        <ServicesSection />
        <TrustSection />
        <ProcessSection />
        <CTABanner onCTAClick={scrollToContact} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
