import Image from "next/image";
import Navbar from "../components/Navbar";
import News from "../components/News";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <News />
      </div>
      <Footer />
    </main>
  );
}
