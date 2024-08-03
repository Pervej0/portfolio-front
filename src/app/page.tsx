import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";

export default function Home() {
  return (
    <main>
      <header>{<Navbar />}</header>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
