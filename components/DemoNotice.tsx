"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { site } from "@/data";

export function DemoNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("mmqf-demo-notice");
    if (!seen) {
      const t = setTimeout(() => setShow(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  function close() {
    setShow(false);
    try {
      sessionStorage.setItem("mmqf-demo-notice", "1");
    } catch {}
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-1/2 z-[60] w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-border bg-surface p-4 shadow-2xl"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber/15 text-sm">
              📷
            </span>
            <div className="text-sm text-ink-soft">
              <p className="font-semibold text-ink">Propuesta de diseño</p>
              <p className="mt-1">{site.demo.aviso}</p>
            </div>
            <button onClick={close} aria-label="Cerrar" className="text-ink-mute hover:text-ink">
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
