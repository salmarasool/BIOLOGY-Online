import Hero from "@/components/custom/hero";
import Navbar from "@/components/custom/navbar";

// import Blogs from "@/components/custom/blogs";
export default function Home() {
  return (
    <>
      <Navbar/>
      {/* Navbar */}
      <Hero/>
      {/* Cards */}

      {/* <Blogs /> */}

      {/* Footer */}

      <footer>
        <div className="flex justify-center items-center h-24 bg-gray-700 text-white">
          <p>Copyright &copy; 2023 Blog Site, Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}