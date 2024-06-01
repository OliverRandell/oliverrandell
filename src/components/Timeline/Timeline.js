import React from 'react';
import { SectionTitle } from '../../styles';

// Sample timeline data
const timelineData = [
  {
    id: 1,
    date: 'August 2023',
    event: 'Onboarding Strategy',
    description: 'Together as a team, developed onboarding strategy and plan to roll out using Guided Interaction',
    tag: {
      category: 'UX Strategy',
      color: '#800080'
    },
    link: {
      url: '',
      text: 'Read more'
    },
  },
  {
    id: 2,
    date: 'June 2017',
    event: 'Travel South America',
    description: '2 months backpacking around South America, Chile, Argentina, Bolivia & Peru',
    tag: {
      category: 'Personal Development',
      color: '#55D6BE'
    },
    link: {
      url: '',
      text: 'Read more'
    },
  },
  {
    id: 3,
    date: 'August 2006',
    event: 'Motorsports Engineering Degree',
    description: 'Studied Motorsport Engineering across 4 years at university, graducating from Oxford Brookes with a 2:1 B. Eng',
    tag: {
      category: 'Education',
      color: '#FC6471',
    },
    link: {
      url: '',
      text: 'Read more'
    },
  },
  // Add more events as needed
];

const TimelineItem = ({ date, event, description, color, category, url, text }) => (
  <section className="timeline-item">
    <div className="timeline-content">
      <span className='tag' style={{ background: color }}>
        {category}
      </span>
      <time className="timeline-date">{date}</time>
      <h3 className="timeline-event">{event}</h3>
      <p className="timeline-description">{description}</p>
      <a href={{url}}>{text}</a>
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
          url={item.link.url}
          text={item.link.text}
        />
      
    ))}
  </article>
);

export default Timeline;