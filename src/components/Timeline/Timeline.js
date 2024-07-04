import React from 'react';
import { SectionTitle } from '../../styles';

// Sample timeline data
const timelineData = [
  {
    id: 1,
    date: 'Feb 2023',
    event: 'Automation & Efficiency',
    description: 'Collaborated with the Customer Success team to automate response workflows using AI, significantly reducing time, cost and improving response times for common customer inquiries.',
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
    date: 'Aug 2023',
    event: 'Product Onboarding & User Engagement',
    description: 'Engineered and implemented a scalable onboarding process using Intercom, which increased user engagement by 25% across all account clients. This initiative directly contributed to higher customer satisfaction and decreased churn rate.',
    tag: {
      category: 'Product Design',
      color: '#55D6BE'
    },
    link: {
      url: '',
      text: 'Read more'
    },
  },
  {
    id: 3,
    date: 'May 2022',
    event: 'Sales & Marketing',
    description: 'Conducted global product presentations that effectively communicated unique features tailored to brand needs, securing over 10 new clients on annual licenses, significantly boosting company revenue.',
    tag: {
      category: 'Presentation',
      color: '#FC6471',
    },
    link: {
      url: '',
      text: 'Read more'
    },
  },
  {
    id: 4,
    date: 'Sept 2021',
    event: 'Product Rebuild & Launch',
    description: 'Spearheaded a cross-functional team of 12 engineers and designers to overhaul and maintain a global marketing content creation platform, serving thousands of users. Enhanced team communication and stakeholder engagement to define product direction and priorities.',
    tag: {
      category: 'Leadership',
      color: '#FC6471',
    },
    link: {
      url: '',
      text: 'Read more'
    },
  }
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