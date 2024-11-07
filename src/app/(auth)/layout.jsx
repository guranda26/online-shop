import ThemeButton from "../components/ThemeButton";

export default function AuthLayout({ children }) {
  return (
    <div classnem="h-screen text-center">
      <header className="bg-contactBackground p-10 flex justify-end">
        <ThemeButton />
      </header>
      <main className="main bg-contactBackground w-screen h-screen">
        {children}
      </main>
    </div>
  );
}
