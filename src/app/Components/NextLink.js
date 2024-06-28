// NextLink.js
import Link from "next/link";

const NextLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <div className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">
        {children}
      </div>
    </Link>
  );
};

export default NextLink;
