import IconTitle from "./icon-title";
import TimelineList from "./timeline-list";
import type { ProfessionalExperience } from "@/types/resume";
import type { Education } from "@/types/resume";

interface TimeLineProps {
  data: ProfessionalExperience | Education;
}

const TimeLine: React.FC<TimeLineProps> = ({ data }) => {
  const { icon } = data;
  const { title } = data;
  const { items } = data;

  return (
    <section className="timeline">
      <IconTitle icon={icon} title={title} />
      <TimelineList items={items} />
    </section>
  );
};

export default TimeLine;
