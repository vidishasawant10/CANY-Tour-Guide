import React, {useState} from 'react';
import './Questions.css';
import Accordion from './Accordion';

const Questions = () => {
  const [active, setActive] = useState("How do I choose the right destination for me?");
  return (
    <div className ='questions section container'>
      <div className="secHeading">
        <h3>Frequently Asked Question</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid">
          <Accordion 
          title = "How do I choose the right destination for me?" 
          desc = "Consider your interests, budget, desired experiences and the type of environment you enjoy Research destinations that align with your preferences and offer attractions or activities you find appealing."
                  active={active} 
                  setActive={setActive}
          />
          <Accordion 
              title = "What are the best time to visit California?" 
              desc = "Summertime is the most popular time to visit California key vacation spots, for both domestic and international visitors. So, visiting the beaches, Disneyland, Lake Tahoe, Yosemite and other fun spot will be very busy in June, July and August."
              active={active} 
              setActive={setActive}
          />
          <Accordion 
              title = "What are the best time to visit New York?" 
              desc = "The best time to visit New York City is from April to June and September to early November when the weather is best and the crowds are not as big. Summer and winter may also be good times to visit depending on your planned activities and budget."
              active={active} 
              setActive={setActive}
          />

        <Accordion 
          title = "How can I find budget-friendly travel options and deals?" 
          desc = "Consider your interests, budget, desired experiences and the type of environment you enjoy Research destinations that align with your preferences and offer attractions or activities you find appealing."
                  active={active} 
                  setActive={setActive}
          />
          
        </div>
        <div className="form">
          <div className="secHeading">
            <h4>Do you have any specific question?</h4>
            <p>Please fill the form below and our dedicated team 
              will get in touch with you as soon as possible</p>
          </div>
          <div className="formContent grid">
            <input type='email' placeholder='Enter email address'/>
            <textarea placeholder='Enter your question here'></textarea>
            <button className='btn'>Submit Inquiry</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Questions;