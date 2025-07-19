import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full  text-white py-6 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between mt-18">
      <p className="text-sm text-gray-400 text-center md:text-left">
        © 2025 Chaaya Kada
      </p>
      <div className="flex items-center gap-3 mt-4 md:mt-0 text-sm text-gray-400">
        <span>Powered by</span>
        <a href="https://nextjs.org" className="underline hover:text-white transition" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
        
        </a>
      </div>
    </footer>
  );
}
