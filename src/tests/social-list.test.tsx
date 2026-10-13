import React from "react";
import { render, screen } from "@testing-library/react";
import SocialList from "../components/side-bar/social-list";
import config from "@/config";

const { about } = config;

describe("SocialList", () => {
  it("should render the correct number of social links", () => {
    render(<SocialList />);
    const socialLinks = screen.getAllByRole("listitem");
    expect(socialLinks).toHaveLength(socialLinks.length);
  });

  it("should render the correct social links", () => {
    render(<SocialList />);
    const { socialMedia } = about;
    const {
      githubUsername,
      linkedinUsername,
    } = socialMedia;

    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      `https://github.com/${githubUsername}`
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      `https://www.linkedin.com/in/${linkedinUsername}/`
    );
    expect(screen.getByRole("link", { name: "Fiverr" })).toHaveAttribute(
      "href",
      "https://www.fiverr.com/gauravpanchal33"
    );
    expect(screen.getByRole("link", { name: "Upwork" })).toHaveAttribute(
      "href",
      "https://www.upwork.com/freelancers/~018c46c393ab84c7ec"
    );
    expect(screen.getByRole("link", { name: "CV" })).toHaveAttribute(
      "href",
      "/GauravPanchalCV.pdf"
    );
  });

  it('should open links in a new tab with rel="noopener noreferrer"', () => {
    render(<SocialList />);
    const socialLinks = screen.getAllByRole("link");
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
