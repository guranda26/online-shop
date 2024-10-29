export default function AuthLayout({ children }) {
  return (
    <>
      <header className="login-header"></header>

      <main className="main">{children}</main>

      <footer className="login-page-footer">
        <p style={{ textAlign: "center" }} className="login-page-footer__txt">
          Georgia, Copyright &copy; 2024
        </p>
      </footer>
    </>
  );
}
