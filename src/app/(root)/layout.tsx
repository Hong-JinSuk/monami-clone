import Header from './_components/Header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full relative flex flex-col">
      <Header />
      <div className="mt-[150px] w-full flex-1">{children}</div>
      <footer></footer>
      {/* 추후 footer도 component로 바꿀예정 */}
    </div>
  );
}
