import Image from "next/image";
import Navbar from "../components/Navbar";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <Team />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
