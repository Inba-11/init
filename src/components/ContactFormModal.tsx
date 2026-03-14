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
    window.open(gmailLink, "_blank");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-bold">Get in Touch</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Fill in the details below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-2">

          {/* Name */}
          <div className="space-y-1.5">
            <Label htmlFor="name">Name <span className="text-primary">*</span></Label>
            <Input
              id="name"
              required
              placeholder="Your full name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone / WhatsApp Number <span className="text-primary">*</span></Label>
            <Input
              id="phone"
              required
              placeholder="+91 XXXXX XXXXX"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          {/* Business */}
          <div className="space-y-1.5">
            <Label htmlFor="business">What is your business?</Label>
            <Input
              id="business"
              placeholder="e.g. Clothing store, Restaurant, IT firm..."
              value={form.business}
              onChange={(e) => setForm({ ...form, business: e.target.value })}
            />
          </div>

          {/* Location */}
          <div className="space-y-1.5">
            <Label htmlFor="location">Where is your business located?</Label>
            <Input
              id="location"
              placeholder="City, State"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
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
                  className={`text-sm px-3 py-1.5 rounded-full border transition-all duration-200 ${
                    form.has.includes(opt)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary/50"
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
                  className={`text-sm px-3 py-1.5 rounded-full border transition-all duration-200 ${
                    form.help.includes(opt)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Biggest problem */}
          <div className="space-y-1.5">
            <Label htmlFor="problem">What is your biggest problem in your business right now?</Label>
            <Textarea
              id="problem"
              placeholder="Describe your challenge..."
              rows={3}
              value={form.problem}
              onChange={(e) => setForm({ ...form, problem: e.target.value })}
            />
          </div>

          {/* Open for a call? */}
          <div className="space-y-2">
            <Label>Are you open for a short call to discuss solutions?</Label>
            <div className="flex gap-3">
              {["Yes", "Maybe later"].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setForm({ ...form, openToCall: opt })}
                  className={`text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                    form.openToCall === opt
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Submit */}
          <Button type="submit" className="w-full rounded-full" size="lg">
            Submit Inquiry <Send size={16} />
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Clicking Submit will open your email app with the details pre-filled.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
