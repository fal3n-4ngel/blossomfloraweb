import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      {/* Desktop Warning for Customers Hidden in Mobile View */}
      <div className="w-full font-light text-lg border-b-2 justify-start p-2 hidden md:flex">
        <div className="w-[80%] mx-auto">
          oi guys we dont have all kerala delivery and order 2 days before.
        </div>
      </div>

      <nav className="flex w-[95%] mx-auto flex-col justify-between  rounded-[10px] p-[20px] md:p-0">
        <div className="flex w-[80%] mx-auto  justify-between  rounded-[10px]">
          {/* Logo */}
          <div className="md:flex pt-3 hidden justify-start">
            <Image src="/logo.png" alt="Logo" width={120} height={120} />
          </div>
          {/* Title */}
          <div className="flex flex-col md:w-full font-logo text-2xl md:text-5xl text-center items-center justify-center font-caslon">
            <div className="md:flex hidden text-3xl ">The </div>Blossom Flora
          </div>
          {/* Icons */}
          <div className="flex gap-6 items-center h-full my-auto pt-3">
            <Image src="/search.svg" alt="Logo" width={30} height={30} />
            <Image src="/cart.png" alt="Logo" width={30} height={30} />
          </div>
        </div>

        <div className="hidden md:flex w-full text-2xl font-extralight   items-center text-center justify-center gap-8  pb-5">
          
          <span className="group relative inline-block ">
            <span className="text-black py-2">
              Home
            </span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
          <span className="group relative inline-block ">
            <span className="text-black py-2">
              About Us
            </span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
          <span className="group relative inline-block ">
            <span className="text-black py-2">
              Shop
            </span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
          <span className="group relative inline-block ">
            <span className="text-black py-2">
              Collection
            </span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
          <span className="group relative inline-block ">
            <span className="text-black py-2">
              Contact Us
            </span>
            <span className="absolute top-8 left-0 group-hover:w-full w-0 h-[2px] transition-all bg-black "></span>
          </span>
        </div>
      </nav>
      ,<section id="carousal"></section>
    </main>
  );
}
