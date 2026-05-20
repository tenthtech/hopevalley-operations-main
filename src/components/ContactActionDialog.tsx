import type { ReactNode } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CONTACT_PHONE } from "@/lib/site-content";

type ContactActionDialogProps = {
  children: ReactNode;
};

export function ContactActionDialog({ children }: ContactActionDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[calc(100%-2rem)] max-w-sm rounded-lg border-white/10 bg-[color-mix(in_oklab,var(--surface)_96%,black)] p-5 text-foreground shadow-2xl shadow-black/50">
        <DialogHeader>
          <DialogTitle>Choose contact app</DialogTitle>
          <DialogDescription>
            Select phone or WhatsApp to contact hopeValley BPO.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3">
          <a
            href={`tel:${CONTACT_PHONE.tel}`}
            className="flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <PhoneCall className="h-5 w-5 shrink-0 text-primary" aria-hidden />
            <span className="grid min-w-0 gap-1">
              <span>Phone</span>
              <span className="break-all text-xs font-normal text-soft">{CONTACT_PHONE.label}</span>
            </span>
          </a>

          <a
            href={CONTACT_PHONE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            <MessageCircle className="h-5 w-5 shrink-0 text-primary" aria-hidden />
            <span className="grid min-w-0 gap-1">
              <span>WhatsApp</span>
              <span className="break-all text-xs font-normal text-soft">
                {CONTACT_PHONE.whatsapp.replace("https://", "")}
              </span>
            </span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
