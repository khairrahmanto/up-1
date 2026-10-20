import Image from "next/image";

export default function Home() {
  return (
    <main>
<div className="bg-white px-23 flex items-center text-{#00000080} h-19 ">
  <div className="flex items-center gap-7">
<Image
  src="/new-logo-ayo.svg"
  alt="Ayo Logo"
  width={63}
  height={63}/>
  <div className="flex items-center gap-10 text-xl ">
    <a href="#" className="hover:text-black">sewa lapangan</a>
    <a href="#" className="hover:text-black">main bareng</a>
    <a href="#" className="hover:text-black">partner with us</a>
    <a href="#" className="hover:text-black">blog</a>
  </div>
  </div>

  <div className="flex items-center gap-5 ml-auto">
  <svg xmlns="http://www.w3.org/2000/svg" 
  fill="none"
  viewBox="0 0 24 24" 
  stroke-width="1.5" 
  stroke="currentColor" 
  className="size-15">
  <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>
  <a href="#" className="hover:text-black">masuk</a>
  <a href="#" className="hover:text-black bg-red-500 border-gray-500 text-white rounded-900 w-full flex justify-center">daftar</a>
    
  </div>
  </div>
   </main>
  );
}
