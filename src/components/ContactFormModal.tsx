import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const RECIPIENT_EMAILS = [
  "initservices02@gmail.com",
  "syfudeensamsu@gmail.com",
  "inbatamizhan2027@gmail.com",
  "lourdusathish7offi@gmail.com",
  "dhivakar15102005@gmail.com",
].join(",");

const GOOGLE_SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbxOQ70d3Ra0FR3tRNQbCIf0MiviVcCFrybNMEwsbc-u4ixAQ78AOFkXvFczV3iyEg_d/exec";

const hasOptions = ["Website", "Mobile App", "Instagram Business", "WhatsApp Business", "None"];
const helpOptions = ["More customers", "Website", "Mobile app", "Posters / social media design", "Marketing", "Business automation"];

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactFormModal = ({ open, onOpenChange }: ContactFormModalProps) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    business: "",
    location: "",
    has: [] as string[],
    help: [] as string[],
    problem: "",
    openToCall: "",
  });

  const toggleCheckbox = (field: "has" | "help", value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const body = `
New inquiry from Init Services website

Name: ${form.name}
Phone / WhatsApp: ${form.phone}
Business: ${form.business}
Location: ${form.location}
Currently has: ${form.has.join(", ") || "None selected"}
Help needed: ${form.help.join(", ") || "None selected"}
Biggest problem: ${form.problem}
Open for a call: ${form.openToCall}
    `.trim();

    const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(RECIPIENT_EMAILS)}&su=${encodeURIComponent(`New Business Inquiry — ${form.name}`)}&body=${encodeURIComponent(body)}`;

    if (GOOGLE_SHEET_WEBHOOK && !GOOGLE_SHEET_WEBHOOK.startsWith("PASTE")) {
      fetch(GOOGLE_SHEET_WEBHOOK, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          business: form.business,
          location: form.location,
          has: form.has.join(", ") || "None",
          help: form.help.join(", ") || "None",
          problem: form.problem,
          openToCall: form.openToCall,
          gmailLink: gmailLink,
        }),
      }).catch(() => {});
    }

    window.open(gmailLink, "_blank");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-lg mx-auto max-h-[92dvh] overflow-y-auto bg-background p-5 sm:p-6 rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl sm:text-2xl font-bold">Get in Touch</DialogTitle>
          <DialogDescription className="text-muted-foreground text-sm">
            Fill in the details below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 mt-2">

          {/* Name */}
          <div className="space-y-1.5">
            <Label htmlFor="name">Name <span className="text-primary">*</span></Label>
            <Input
              id="name"
              required
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="h-11 text-base"
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone / WhatsApp Number <span className="text-primary">*</span></Label>
            <Input
              id="phone"
              required
              type="tel"
              inputMode="tel"
              placeholder="+91 XXXXX XXXXX"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="h-11 text-base"
            />
          </div>

          {/* Business + Location side-by-side on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="business">Business</Label>
              <Input
                id="business"
                placeholder="e.g. Clothing store..."
                value={form.business}
                onChange={(e) => setForm({ ...form, business: e.target.value })}
                className="h-11 text-base"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="City, State"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                className="h-11 text-base"
              />
            </div>
          </div>

          {/* Do you have any of these? */}
          <div className="space-y-2">
            <Label>Do you have any of these?</Label>
            <div className="flex flex-wrap gap-2">
              {hasOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleCheckbox("has", opt)}
                  className={`text-sm px-3 py-2 rounded-full border transition-all duration-200 min-h-[40px] ${
                    form.has.includes(opt)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border active:border-primary/70 hover:border-primary/50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* What help do you need? */}
          <div className="space-y-2">
            <Label>What help do you need?</Label>
            <div className="flex flex-wrap gap-2">
              {helpOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleCheckbox("help", opt)}
                  className={`text-sm px-3 py-2 rounded-full border transition-all duration-200 min-h-[40px] ${
                    form.help.includes(opt)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border active:border-primary/70 hover:border-primary/50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Biggest problem */}
          <div className="space-y-1.5">
            <Label htmlFor="problem">What is your biggest problem right now?</Label>
            <Textarea
              id="problem"
              placeholder="Describe your challenge..."
              rows={3}
              value={form.problem}
              onChange={(e) => setForm({ ...form, problem: e.target.value })}
              className="text-base resize-none"
            />
          </div>

          {/* Open for a call? */}
          <div className="space-y-2">
            <Label>Open for a short call to discuss solutions?</Label>
            <div className="flex gap-3">
              {["Yes", "Maybe later"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setForm({ ...form, openToCall: opt })}
                  className={`flex-1 sm:flex-none text-sm px-5 py-2.5 rounded-full border transition-all duration-200 min-h-[44px] ${
                    form.openToCall === opt
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border active:border-primary/70 hover:border-primary/50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full rounded-full h-12 text-base" size="lg">
            Submit Inquiry <Send size={16} />
          </Button>

          <p className="text-xs text-muted-foreground text-center pb-1">
            Clicking Submit will open your email app with the details pre-filled.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
