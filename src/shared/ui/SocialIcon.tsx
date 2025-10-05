import { GitHubIcon } from "@/asset/svg";
import {
  Facebook,
  FacebookIcon,
  Linkedin,
  LinkedinIcon,
  Twitter,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const SocialIcon = () => {
  return (
    <ul className="flex items-center p-0 m-0 list-none">
      {/* Facebook */}
      <li className="relative mx-2 p-3 rounded-full border border-blue-400 text-blue-500 cursor-pointer transition-transform transform hover:scale-125 hover:bg-blue-500 hover:text-white">
        <a
          href="https://www.facebook.com/pervej0"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FacebookIcon />{" "}
        </a>
      </li>

      {/* LinkedIn */}
      <li className="relative mx-2 p-3 rounded-full border border-white text-white cursor-pointer transition-transform transform hover:scale-125 hover:bg-white hover:text-blue-700">
        <Link
          href="https://www.linkedin.com/in/md-pervej-hossain"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <LinkedinIcon />
        </Link>
      </li>

      {/* GitHub */}
      <li className="relative mx-2 p-2 rounded-full border border-orange-600 text-white cursor-pointer transition-transform transform hover:scale-125 hover:bg-orange-600 hover:text-white">
        <Link
          href="https://github.com/Pervej0"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <GitHubIcon />
        </Link>
      </li>

      {/* Twitter */}
      <li className="relative mx-2 p-3 rounded-full border border-blue-300 text-blue-400 cursor-pointer transition-transform transform hover:scale-125 hover:bg-blue-400 hover:text-white">
        <Link
          href="https://x.com/Pervej00"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <Twitter size={20} />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcon;
