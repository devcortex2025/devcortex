import React from 'react';
import './CustomerReviews.css';

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Dr. Priya Sharma",
      position: "Chief Medical Officer, NICU Care Center",
      quote: "The NICU Patient Tracker system DevCortex built for us has revolutionized our neonatal care. Patient safety improved by 85% and our medical staff efficiency increased significantly.",
      rating: 5
    },
    {
      name: "Captain Arjun Singh",
      position: "Head of Digital Operations, City Police Department",
      quote: "DevCortex's Law Enforcement Portal transformed our case management. The biometric authentication and advanced reporting capabilities have streamlined our investigations dramatically.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      position: "Environmental Director, SmartCity Corp",
      quote: "The Smart Waste Management system has reduced our collection costs by 40% and increased recycling rates by 60%. The IoT integration is seamless and reliable.",
      rating: 5
    },
    {
      name: "Dr. Rajesh Kumar",
      position: "Founder, Panchakarma Wellness Center",
      quote: "Our Ayurvedic Wellness Platform has expanded our reach nationwide. The personalized health assessments and treatment recommendations have improved patient outcomes significantly.",
      rating: 5
    },
    {
      name: "Dr. Meera Reddy",
      position: "Clinical Psychologist, MindSound Therapy",
      quote: "The Audio Therapy Platform is groundbreaking. Our patients love the personalized sessions and the AI-powered response analysis has improved therapy effectiveness by 70%.",
      rating: 5
    },
    {
      name: "Rahul Sharma",
      position: "CEO, VegHigh",
      quote: "DevCortex built our farmer-consumer platform that's now connecting thousands of farmers directly to consumers. The transparent pricing and quality assurance features are game-changers.",
      rating: 5
    },
    {
      name: "Kavita Verma",
      position: "City Manager, SmartCity Initiative",
      quote: "The Smart City Dashboard gives us real-time control over urban infrastructure. Traffic optimization and utility management have improved city efficiency by 35%.",
      rating: 5
    },
    {
      name: "Dr. Amit Khanna",
      position: "Pharmacy Director, MedCare Network",
      quote: "The Digital Prescription System has eliminated medication errors and streamlined our workflow. Patient safety and compliance reporting have never been better.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section customer-reviews-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Our Customers Simply Love Us</h2>
          <p className="section-subtitle">
            Hear from our satisfied clients about their experience working with DevCortex
          </p>
        </div>
        
        <div className="reviews-scroll-container">
          <div className="reviews-scroll">
            {reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <div className="review-content">
                  <div className="review-quote">
                    <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                    <p className="review-text">{review.quote}</p>
                  </div>
                  <div className="review-author">
                    <div className="author-info">
                      <h4 className="author-name">{review.name}</h4>
                      <p className="author-position">{review.position}</p>
                    </div>
                    <div className="review-rating">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CustomerReviews;
