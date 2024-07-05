const Footer = () => {
  return (
    <footer className="footer footer-center bg-black opacity-50 text-base-content p-4">
      <aside>
        <p className="text-white font-main p-5">
          Copyright © ${new Date().getFullYear()} - All right reserved by{" "}
          <span className="text-purple-500">Mahdi Hasan</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
