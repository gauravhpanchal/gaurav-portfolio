import IconTitle from "./icon-title";
import TimelineList from "./timeline-list";
import type { TimelineSection } from "@/types/resume";

interface TimeLineProps {
  data: TimelineSection;
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
