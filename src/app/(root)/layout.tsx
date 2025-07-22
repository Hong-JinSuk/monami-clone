import Footer from './_components/Footer';
import Header from './_components/Header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full relative flex flex-col overflow-auto">
      <Header />
      <div className="pt-[150px] w-full">{children}</div>
      <Footer />
    </div>
  );
}
