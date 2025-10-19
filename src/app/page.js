import Camera from "./components/Camera";
import Footer from "./components/Footer";
import Navheader from "./components/Navheader";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen text-amber-50">
      <div className="max-w-2xl mx-auto space-y-8 px-4">
        <Navheader/>
        <Camera/>
        <Footer/>
      </div>
    </main>
  );
}
