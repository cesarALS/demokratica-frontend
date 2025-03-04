"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import IconLogo from "../0.atoms/2.IconLogo";

interface DialogoWIPProps {
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
}

export default function DialogoWIP({ isOpen, onClose, duration = 2500 }: DialogoWIPProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose, duration]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="absolute top-10 left-10 bg-white p-6 rounded-2xl shadow-lg w-80 text-center relative"
      >
        <h2 className="text-xl font-bold text-gray-800">Estamos trabajando en ello</h2>
        <p className="text-gray-600 mt-2">Esta función estará disponible pronto.</p>
        <div className="mt-4">
          <IconLogo />
        </div>
      </motion.div>
    </div>
  );
};
