import React from 'react';
import { Sparkles } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
            <div className="flex justify-center max-w-7xl mx-auto px-4 py-4">
                {/* Bottom Bar */}
                <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    © {currentYear} JOJA AI. All rights reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
