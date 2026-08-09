import Navigation from "./Navigation";
import SideBar from "./SideBar";
import MainSection from "./MainSection";
import "./index.css";

function AmazonPage2() {
  return (
    <>
      <Navigation />

      <div className="content">
        <SideBar />
        <MainSection />
      </div>
    </>
  );
}

export default AmazonPage2;