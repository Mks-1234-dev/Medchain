import Image from "next/image";
import Navbar from "../components/Navbar";
import Connect from "../components/Connect";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <Connect />
      </div>
      <Footer />
    </main>
  );
}
