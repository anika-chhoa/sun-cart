import Banner from "@/components/Banner";
import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="">
        <Banner/>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
