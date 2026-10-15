import React from "react";
import "./Join.css";

const reasons = [
  { text: "Cancel or switch plans anytime", emoji: "🤝" },
  { text: "A safe place just for kids", emoji: "❤️" },
  { text: "Watch on your favourite devices", emoji: "💻" },
  { text: "Stories tailored to your taste", emoji: "✨" },
];

const faqs = [
  { question: "What is Netflix?", answer: "Netflix is a streaming service..." },
  {
    question: "How much does Netflix cost?",
    answer: "Plans start at ₹149 per month...",
  },
  {
    question: "Where can I watch?",
    answer: "Watch on phones, tablets, smart TVs, etc.",
  },
  {
    question: "How do I cancel?",
    answer: "You can cancel your plan anytime from settings.",
  },
  {
    question: "What can I watch on Netflix?",
    answer: "Movies, TV shows, documentaries and more.",
  },
  {
    question: "Is Netflix good for kids?",
    answer: "Yes, Netflix has a kids mode with content for children.",
  },
];

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  toggleFAQ = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <div className="section-container">
        <h2>More reasons to join</h2>
        <div className="reasons">
          {reasons.map((item, index) => (
            <div key={index} className="reason-card">
              <span>{item.text}</span>
              <span className="emoji">{item.emoji}</span>
            </div>
          ))}
        </div>

        <h2>Frequently Asked Questions</h2>
        <div className="faq-section">
          {faqs.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => this.toggleFAQ(index)}
              >
                {item.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Join;