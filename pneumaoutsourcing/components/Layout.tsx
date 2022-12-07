import Footer from "./Footer";
import NavBar from "./NavBar";

export  const Layout = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    return (
        <>
        <NavBar />
        <main style={{minHeight: '70vh'}}>
          {/* Primary column */}
          {children}
        </main>
        <Footer />
        </>
    )
}