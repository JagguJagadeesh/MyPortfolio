const Footer = () => {
  return (
    <footer className="px-4 py-10 border-t border-zinc-800 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-300">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <p className="text-sm text-center text-zinc-500">
          © 2025 <span className="font-semibold text-violet-600">Jagadeesh Chakali</span> . Built using{' '}
          <span className="font-medium">React</span> &{' '}
          <span className="font-medium">TailwindCSS</span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
