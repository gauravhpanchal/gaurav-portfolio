import { IoCloudDownloadOutline } from "react-icons/io5";
import IconBox from "../icon-box";
import "@/styles/resume/download-cv.css";

const DownloadCV = () => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <IconBox icon={IoCloudDownloadOutline} />

        <a
          href="/GauravPanchalCV.pdf"
          target="_blank"
          className="hyperlink-highlight"
        >
          Download Gaurav&apos;s Curriculum Vitae / Resume
        </a>
      </div>
    </section>
  );
};

export default DownloadCV;
