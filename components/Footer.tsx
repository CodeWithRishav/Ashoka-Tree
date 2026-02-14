import React from 'react';
import { Sprout } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 text-earth-100 py-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2 mb-4">
          <Sprout className="w-6 h-6 text-earth-400" />
          <span className="text-2xl font-serif font-bold">Ashoka Tree Memorial</span>
        </div>
        <p className="text-earth-300 max-w-md mb-8">
          Dedicated to the preservation and appreciation of nature's gifts. Planted with love by the students of CBHDP Group.
        </p>
        <div className="w-full h-px bg-earth-800 mb-8"></div>
        <p className="text-sm text-earth-400">
          © {new Date().getFullYear()} CBHDP Group. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;