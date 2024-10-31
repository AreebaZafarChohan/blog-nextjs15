import Image from "next/image";

const Header = () => {
  return (
    <header className="flex justify-start items-center mb-6">
      <Image
        src="/images/nextjs.png"
        alt="Next.js 15"
        width={120}
        height={120}
        className="p-4"
      />
    </header>
  );
};

export default Header;

