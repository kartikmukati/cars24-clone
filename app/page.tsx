import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src={"/images/landing-page-cover.webp"} alt="cover" width={0} height={0} sizes="100vw" className="w-full"></Image>
    </div>
  );
}
