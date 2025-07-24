import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 text-white border-t border-zinc-700 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="text-center space-y-6">
          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Jagadeesh Chakali
            </h3>
            <p className="text-zinc-400">Full Stack Developer & Problem Solver</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: FaGithub, href: "https://github.com/JagguJagadeesh", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/jagadeesh15", label: "LinkedIn" },
              { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" }, // Replace if you have an actual Twitter
              { icon: FaEnvelope, href: "mailto:jaggujagadeesh447@gmail.com", label: "Email" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-800 dark:bg-zinc-900 hover:bg-violet-600 dark:hover:bg-violet-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label={social.label}
              >
                <social.icon className="text-lg" />
              </a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto"></div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-sm"
          >
            <p className="flex items-center justify-center gap-2 flex-wrap text-center">
              © {currentYear} <span className="font-semibold text-violet-400">Jagadeesh Chakali</span>
              <span className="flex items-center gap-1">
                Made with <FaHeart className="text-red-500 text-xs animate-pulse" /> using
              </span>
              <span className="font-medium text-blue-400">React</span> &
              <span className="font-medium text-cyan-400">TailwindCSS</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
