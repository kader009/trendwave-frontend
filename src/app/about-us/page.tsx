import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <Container>
    <div className="min-h-screen bg-white text-gray-800 dark:bg-black dark:text-white">
      {/* Hero Section */}
      <section className=" py-10 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold mb-4">About TrendWave</h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg dark:text-white">
          Empowering vendors, delighting customers TrendWave is your ultimate multivendor marketplace.
        </p>
      </section>

      {/* About Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 mb-4 dark:text-white">
            TrendWave is a dynamic multivendor e-commerce platform designed to bring together a wide range of sellers and customers under one roof. Whether you are a small business owner or a brand-lover customer — TrendWave connects you to what matters most.
          </p>
          <p className="text-gray-600 dark:text-white">
            We aim to provide a seamless, secure, and satisfying shopping experience, all while supporting local and global entrepreneurs.
          </p>
        </div>
        <div className="relative w-full h-72 sm:h-96">
          <Image
            src="https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About TrendWave"
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-medium mb-2">Our Mission</h3>
              <p className="text-gray-600 dark:text-white">
                To empower sellers and enhance buyer satisfaction by offering a reliable, diverse, and innovative marketplace.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Our Vision</h3>
              <p className="text-gray-600 dark:text-white">
                To become the leading multivendor platform where creativity meets commerce, and everyone has the freedom to grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to explore TrendWave?</h2>
        <p className="text-gray-600 mb-6 dark:text-white">Join our community of sellers and shoppers today!</p>
        <Link href="/products">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition dark:bg-gray-600">
            Start Shopping
          </button>
        </Link>
      </section>
    </div>
    </Container>
  );
};

export default AboutPage;
