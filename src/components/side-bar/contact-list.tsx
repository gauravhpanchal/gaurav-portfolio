import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbPhoneCalling } from "react-icons/tb";
import ContactItem from "./contact-item";
import Link from "next/link";

import "@/styles/side-bar/contact-list.css";

const ContactsList: React.FC = () => {
  return (
    <ul className="contacts-list">
      <ContactItem icon={HiOutlineMail} title="Email">
        <Link href="gauravhpanchal2@gmail.com" className="contact-link">
          gauravhpanchal2@gmail.com
        </Link>
      </ContactItem>

      <ContactItem icon={TbPhoneCalling} title="Phone">
        <p className="contact-link">+91 8286112257 📲</p>
      </ContactItem>

      <ContactItem icon={IoCalendarOutline} title="Birthday">
        <time dateTime="1997-04-04">Apr. 04, 1997 🐻</time>
      </ContactItem>

      <ContactItem icon={MdOutlineLocationOn} title="Location">
        <address>Pune, Maharashtra, India</address>
      </ContactItem>
    </ul>
  );
};

export default ContactsList;
