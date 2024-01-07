import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here{" "}
              <Image
                src="assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={15}
                height={16}
              />
            </p>
            <h1 className="head-text">
              <span className="text-red-500">ShopBuddy</span> Unleashing Deals,
              Taming Prices – Your Savings Sidekick With Every Click!
            </h1>
            <p className="mt-6 text-2xl text-gray-500">
              Powerful, self-serve product and growth analytics to help you
              convert, engage and retain more
            </p>
            <SearchBar />z
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {[" Iphone 15", "Book", "Sneakers"].map((product) => (
            <div>{product}</div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
