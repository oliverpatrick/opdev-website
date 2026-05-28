import Link from "next/link";

interface TagProps {
  text: string;
  href?: string;
}

export const Tag: React.FC<TagProps> = ({ text, href }) => {
  return href ? (
    <Link
      href={href}
      className="mr-3 border-red-500 border bg-red-300 p-2 rounded-full text-sm font-medium uppercase text-red-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(" ").join("-")}
    </Link>
  ) : (
    <span className="mr-3 border-red-500 border bg-red-300 p-2 rounded-full text-sm font-medium uppercase text-red-500 hover:text-primary-600 dark:hover:text-primary-400">
      {text.split(" ").join("-")}
    </span>
  );
};

export default Tag;
