import Link from "next/link";

import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdAttachment } from "react-icons/md";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

import config from "@/config";

const { about } = config;

const { socialMedia } = about;
const { githubUsername, twitterUsername, linkedinUsername, mediumUsername } =
  socialMedia;

const socialLinks = [
  {
    url: `https://github.com/${githubUsername}`,
    icon: <SiGithub />,
    name: "GitHub",
  },
  {
    url: `https://www.linkedin.com/in/${linkedinUsername}/`,
    icon: <FaLinkedinIn />,
    name: "LinkedIn",
  },
  {
    url: `https://www.fiverr.com/gauravpanchal33`,
    icon: <TbBrandFiverr />,
    name: "Fiverr",
  },
  {
    url: `https://www.upwork.com/freelancers/~018c46c393ab84c7ec`,
    icon: <SiUpwork />,
    name: "Upwork",
  },
  { url: `./cv.pdf`, icon: <MdAttachment />, name: "CV" },
];

const SocialList: React.FC = () => {
  return (
    <ul className="social-list">
      {socialLinks.map(({ url, icon, name }) => (
        <li className="social-item" key={name}>
          <Link
            href={url}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
