const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-neutral text-primary-content footer-center">
      <p className="text-xs font-light text-slate-400">
        Copyright &copy; {footerYear} All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
