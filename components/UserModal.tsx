"use client";

import React, { useEffect } from "react";
import UserCard from "./UserCard";
import { X } from "lucide-react";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UserModal({ isOpen, onClose }: UserModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      {/* Backdrop with close event */}
      <div
        role="presentation"
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Content container */}
      <div className="relative z-10 transform scale-100 transition-all duration-300 animate-in fade-in zoom-in-95 duration-200">
        {/* Floating Close Button */}
        <button
          id="dev-modal-close-btn"
          onClick={onClose}
          className="absolute -top-12 right-0 md:-top-4 md:-right-12 text-zinc-400 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 p-2 rounded-full hover:scale-105 duration-200 transition-all shadow-lg cursor-pointer"
          title="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Pawan's Card */}
        <UserCard />
      </div>
    </div>
  );
}
