"use client";

import Giscus from "@giscus/react";

const Comments: React.FC = () => {
  return (
    <Giscus
      id="comments"
      repo="1chooo/1chooo.com"
      repoId="R_kgDOLBatdw"
      category="General"
      categoryId="DIC_kwDOLBatd84CjpPs"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="bottom"
      theme="dark"
      data-theme="dark"
      lang="en"
      loading="lazy"
    />
  );
}

export default Comments;