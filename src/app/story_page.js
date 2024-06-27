import Image from "next/image";
import Navbar from "../components/Navbar";
import Story from "../components/Story";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <Story />
      </div>
      <Footer />
    </main>
  );
}
