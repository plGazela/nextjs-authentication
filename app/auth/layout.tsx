export default function AuthLayout({ 
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="p-5 h-screen grid grid-cols-1 grid-rows-1 justify-items-center items-center">
      { children }
    </main>
  );
}