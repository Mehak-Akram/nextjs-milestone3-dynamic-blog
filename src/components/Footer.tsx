import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="h-[300px] sm:h-[200px] bg-custom text-center py-10">
          <ul className="text-white flex flex-col gap-8 sm:flex sm:flex-row sm:justify-center sm:gap-16 font-bold">
            <Link href="../">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="../">
              <li>blogs</li>
            </Link>
          </ul>
          <div className="flex justify-center mt-6">
            <div className=" bg-accent h-[1.9px] sm:w-[520px] left-[37%] rounded-md text-center">
              <p className="text-heading text-white mt-8 sm:mt-4">
                © 2024 Mehak Akram | All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
