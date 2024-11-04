"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import PageContent from "@/components/page-content";
import Projects from "@/components/portfolio/projects";
import {
  initializeCustomSelect,
  filterItemsByCategory,
} from "@/lib/utils/dom-utils";
import config from "@/config";

const { title } = config;

/**
 * TODO: #257
 * update the document title see (#341)
 * export const metadata: Metadata = {
 *   title: `Contact | ${title}`,
 * };
 */

const Portfolio = () => {
  const pathname = usePathname();

  useEffect(() => {
    initializeCustomSelect(filterItemsByCategory);
  }, []);

  return (
    /**
     * TODO: #257
     * update the document title see (#341)
     */
    <PageContent
      documentTitle="Portfolio"
      title={title}
      header="Gaurav's Portfolio"
      page="portfolio"
      pathName={pathname}
    >
      <Projects />
    </PageContent>
  );
};

export default Portfolio;
