

import Navbar from "@/components/shared/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="">
        
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
