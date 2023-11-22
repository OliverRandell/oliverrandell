import React from 'react';
import { SectionTitle } from '../../styles';

// Sample timeline data
const timelineData = [
  {
    id: 1,
    date: 'January 2023',
    event: 'Event 1',
    description: 'Description of Event 1',
    tag: {
      category: 'Career',
      color: 'blue'
    },
    link: {
      url: '',
      text: 'Read more'
    },
  },
  {
    id: 2,
    date: 'February 2023',
    event: 'Event 2',
    description: 'Description of Event 2',
    tag: {
      category: 'Career',
      color: 'green'
    },
    link: {
      url: '',
      text: 'Read more'
    },
  },
  {
    id: 3,
    date: 'March 2023',
    event: 'Event 3',
    description: 'Description of Event 3',
    tag: {
      category: 'Career',
      color: 'red',
    },
    link: {
      url: '',
      text: 'Read more'
    },
  },
  // Add more events as needed
];

const TimelineItem = ({ date, event, description, color, category }) => (
  <section className="timeline-item">
    <div className="timeline-content">
      <span className='tag' style={{ background: color }}>
        {category}
      </span>
      <div className="timeline-date">{date}</div>
      <div className="timeline-event">{event}</div>
      <div className="timeline-description">{description}</div>
      <span className="circle" />
    </div>
  </section>
);

const Timeline = () => (
    
  <article className="timeline">
    
    {timelineData.map((item) => (
      
        <TimelineItem
          key={item.id}
          date={item.date}
          event={item.event}
          description={item.description}
          tag={item.tag}
          color={item.tag.color}
          category={item.tag.category}
        />
      
    ))}
  </article>
);

export default Timeline;