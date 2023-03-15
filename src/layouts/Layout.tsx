import Header from "@components/Header";
import Footer from "@components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-bgbase p-4 text-text md:p-8 lg:p-16 xl:p-24">
      <main className="h-full w-full border">
        <Header />
        <div className="flex h-full flex-col items-center justify-center">
          {children}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout;
