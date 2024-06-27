import Image from "next/image";
import Navbar from "./components/Navbar";
import Content from "./components/HomePage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <Content />
      </div>
      <Footer />
    </main>
  );
}
