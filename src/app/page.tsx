import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <div className="w-full font-light text-lg border-b-2 justify-start p-2 hidden md:flex">

        <div className="w-[80%] mx-auto">
          oi guys we dont have all kerala delivery and order 2 days before.
        </div>
        
      </div>
      <nav className="flex w-[95%] mx-auto flex-col justify-between  rounded-[10px] p-[20px] md:p-0">
        <div className="flex w-full  justify-between  rounded-[10px]">
          <div className="md:flex pt-3 hidden justify-start">
            <Image src="/logo.png" alt="Logo" width={120} height={120} />
          </div>

          <div className="flex flex-col md:w-full font-logo text-2xl md:text-5xl text-center items-center justify-center font-caslon">
            <div className="md:flex hidden text-3xl ">The </div>Blossom Flora
          </div>
          <div className="flex gap-4 items-center h-full my-auto">
            <Image src="/search.svg" alt="Logo" width={30} height={30} />
            <Image src="/cart.png" alt="Logo" width={30} height={30} />
          </div>
        </div>
        <div className="hidden md:flex w-full text-2xl font-light items-center text-center justify-center gap-8  pb-5">
          <div className=" hover:cursor-pointer transition-all">Home</div>
          <div className=" hover:cursor-pointer transition-all">Order Now</div>
          <div className=" hover:cursor-pointer transition-all">Services</div>
          <div className=" hover:cursor-pointer transition-all">Contact Us</div>
        </div>
      </nav>
    </main>
  );
}
