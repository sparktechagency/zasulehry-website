"use client";

import Link from "next/link";
import { FC } from "react";
import { FaTimes, FaArrowLeft } from "react-icons/fa";

interface AppDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppDownloadModal: FC<AppDownloadModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="bg-[#1E2A37] border border-white/10 rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes size={20} />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FaArrowLeft className="text-teal-500 text-3xl rotate-180" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">
            Apply via Our Mobile App
          </h3>
          <p className="text-gray-400 mb-8">
            To apply for this position, please download our app from the store.
            It's fast, easy, and secure.
          </p>

          <div className="flex flex-col gap-4">
            <Link
              href="https://play.google.com/store"
              target="_blank"
              className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all group"
            >
              <svg
                className="w-8 h-8 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-gray-500 -mb-1">
                  Get it on
                </div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </Link>

            <Link
              href="https://apple.com/app-store"
              target="_blank"
              className="flex items-center justify-center bg-white text-black px-6 py-3 rounded-xl hover:bg-gray-100 transition-all group"
            >
              <svg
                className="w-8 h-8 mr-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-[10px] uppercase font-bold text-gray-500 -mb-1">
                  Download on the
                </div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadModal;
