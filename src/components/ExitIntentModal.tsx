import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FrictionCalculator from "./FrictionCalculator";

const ExitIntentModal = () => {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered) {
        setTriggered(true);
        setOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [triggered]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto bg-background border-border">
        {!started ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl font-bold text-foreground">
                Curious how much manual friction is slowing you down?
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-base mt-2">
                Take the 30-second ThinkFlow Audit and get your personalized Automation Score.
              </DialogDescription>
            </DialogHeader>
            <div className="flex gap-3 mt-4">
              <Button onClick={() => setStarted(true)} className="gap-2">
                Start Audit <span>→</span>
              </Button>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Maybe Later
              </Button>
            </div>
          </>
        ) : (
          <div className="pt-2">
            <FrictionCalculator embedded />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentModal;
