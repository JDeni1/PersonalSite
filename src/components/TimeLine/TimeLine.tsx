import './TimeLine.css'
import type { TimelineItem } from '../../Types'
import { timelineData } from './TimeLineData'

const TimeLineCard = ({ data }: { data: TimelineItem }) => (
  <div className="timeline-item">
    <span
      className="timeline-circle"
      style={{
        backgroundColor: data.category.color,
        border: '3px solid #616465',
      }}
    />
    <div className="timeline-item-content">
      <span
        className="timeline-tag"
        style={{ background: data.category.color }}
      >
        {data.category.tag}
      </span>
      <time className="timeline-date">{data.date}</time>
      <p className="timeline-text">{data.text}</p>
      {data.description && (
        <p className="timeline-description">{data.description}</p>
      )}
      {data.link && (
        <a
          href={data.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="timeline-link"
        >
          {data.link.text}
        </a>
      )}
    </div>
  </div>
)

const TimeLine = () => {
  if (timelineData.length === 0) return null

  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">Timeline</h2>
      <div className="timeline-container">
        {timelineData.map((item) => (
          <TimeLineCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  )
}

export default TimeLine