// import React from 'react';
// import DecisionSupport from './DecisionSupport';
// import JudgeDecision from './JudgeDecision';
// import '../App.css';
// import CaseSelection from './CaseSelection';
// import AIAnalysis from './AiAnalysis';

// function JudicialAuthority() {
//   return (
//     <div className="JudicialAuthority">
//       <header>
//         <h1>Judicial Case System</h1>
//       </header>
//       <main>
//         <CaseSelection />
//         {/* <CaseSelection /> */}
//         <div className="analysis-section">
//           <AIAnalysis />
//           <DecisionSupport />
//         </div>
//         <JudgeDecision />
//       </main>
//     </div>
//   );
// }

// export default JudicialAuthority;



import React, { useState } from 'react';
import Attach from '../assets/Images/attach.png'
// import './App.css';

function JudicialAuthority() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { type: 'user', text: input }]);
      setInput('');
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { type: 'bot', text: 'The individual is facing charges for cybercrime and crimes against women, including online harassment, unauthorized data access, and misuse of digital platforms to intimidate and exploit women. Legal action has been initiated under relevant cyber and gender protection laws.' }]);
      }, 500); // Simulate bot response delay
    }
  };

  const handleFileUpload = (event) => {
    const fileName = event.target.files[0].name;
    if (event.target.files[0].type === "application/pdf") {
      setMessages([...messages, { type: 'user', text: `PDF attached: ${fileName}` }]);
    } else {
      alert("Please upload a PDF file.");
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Judicial Case System</h1>
      </header>
      <div className="main-container">
        <div className="chatbot-section">
          <h2>Chatbot for Decision-Making</h2>
          <div className="chatbot">
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className={`chat-message ${message.type}`}>
                  {message.text}
                </div>
              ))}
            </div>
            <div className="chat-input-section">
              <label htmlFor="pdf-upload" className="pdf-button">
                <img src={Attach} alt="" />
              </label>
              <input 
                type="text" 
                placeholder="Type your question here..." 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
            
              <input 
                id="pdf-upload" 
                type="file" 
                accept="application/pdf" 
                onChange={handleFileUpload} 
                style={{ display: 'none' }} 
              />
              <button className="submit-button" onClick={handleSendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="decision-section">
          <div className="ai-decision">
            <h2>AI Decision</h2>
            <div className="analog-meter">
              <div className="meter">
                <div className="needle"></div>
                <div className="red-zone"> <span style={{color: 'white'}}>DENY</span></div>
                <div className="green-zone"><span style={{color: 'white'}}>AWARD</span></div>
              </div>
              <div className="labels">
                
               
              </div>
            </div>
          </div>
          <div className="judge-decision">
            <h2>Judge's Decision</h2>
            <button className="accept-button">Accept Bail</button>
            <button className="reject-button">Reject Bail</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JudicialAuthority;