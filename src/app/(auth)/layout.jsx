export default function AuthLayout({ children }) {
  return (
    <>
      <header className="login-header"></header>

      <main className="main">{children}</main>
    </>
  );
}
