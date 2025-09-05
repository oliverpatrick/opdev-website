import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/oliverpatrick",
    icon: FaGithub,
    label: "GitHub",
    external: true,
  },
  {
    href: "https://linkedin.com",
    icon: FaLinkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    href: "mailto:oliver@opdev.co.uk",
    icon: MdEmail,
    label: "Email",
    external: false,
  },
];

function Socials() {
  return (
    <div className="flex items-center justify-center gap-4 rounded-sm bg-white p-5 shadow-lg">
      {SOCIAL_LINKS.map(({ href, icon: Icon, label, external }) => (
        <Link
          key={label}
          href={href}
          {...(external && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
          className="rounded-sm border-2 p-1 text-gray-600 transition-colors hover:text-gray-900"
        >
          <Icon size={24} />
          <span className="sr-only">{label}</span>
        </Link>
      ))}
    </div>
  );
}

export default Socials;
