// // WelcomePage.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';
// import WelcomeImg from '../assets/Images/Image.png'
// import Image from '../assets/Images/Image(1).png'
// // import './WelcomePage.css'; // We'll create this CSS file for styling

// function WelcomePage() {
//   const navigate = useNavigate();

//   const handleEnter = () => {
//     navigate('/home'); // Redirect to Home page on button click
//   };

//   return (
//     <div className="welcome-page">
//       <div className="welcome-image">
//         <img src={WelcomeImg} alt="Welcome Illustration" />
//       </div>
//       <div className="welcome-content">
//         <img class="logo" src={Image} alt="" />
//         <h1>BailReckoner</h1>
//         <p>Legal Interface</p>
//         <button className="enter-button" onClick={handleEnter}>
//           Enter
//         </button>
//       </div>
//     </div>
//   );
// }

// export default WelcomePage;




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../App.css';
// import WelcomeImg from '../assets/Images/Image.png';
// import Image from '../assets/Images/Image(1).png';
// // import './WelcomePage.css'; // CSS for styling

// function WelcomePage() {
//   const [loading, setLoading] = useState(true);  // For the loading animation
//   const [fadeOut, setFadeOut] = useState(false); // For the page exit transition
//   const navigate = useNavigate();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false); // Stop loading after 2 seconds (or adjust the time)
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleEnter = () => {
//     setFadeOut(true); // Trigger fade-out animation
//     setTimeout(() => {
//       navigate('/home'); // Redirect to Home page after the fade-out
//     }, 500); // Delay navigation by 0.5 seconds for the animation
//   };

//   return (
//     <div className={`welcome-page ${fadeOut ? 'fade-out' : ''}`}>
//       {loading ? (
//         <div className="loading-spinner"></div>
//       ) : (
//         <>
//           <div className="welcome-image">
//             <img src={WelcomeImg} alt="Welcome Illustration" />
//           </div>
//           <div className="welcome-content">
//             <img className="logo" src={Image} alt="" />
//             <h1>BailReckoner</h1>
//             <p>Legal Interface</p>
//             <button className="enter-button" onClick={handleEnter}>
//               Enter
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default WelcomePage;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import WelcomeImg from '../assets/Images/Image.png';
import Image from '../assets/Images/Image(1).png';
// import './WelcomePage.css'; // CSS for styling

function WelcomePage() {
  const [loading, setLoading] = useState(true);  // For the loading animation
  const [fadeOut, setFadeOut] = useState(false); // For the page exit transition
  const [contentVisible, setContentVisible] = useState(false); // For fade-in effect
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
      setContentVisible(true); // Start fade-in animation after loading
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setFadeOut(true); // Trigger fade-out animation
    setTimeout(() => {
      navigate('/home'); // Redirect to Home page after the fade-out
    }, 500); // Delay navigation by 0.5 seconds for the animation
  };

  return (
    <div className={`welcome-page ${fadeOut ? 'fade-out' : ''}`}>
      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <>
          <div className={`welcome-image ${contentVisible ? 'fade-in' : ''}`}>
            <img src={WelcomeImg} alt="Welcome Illustration" />
          </div>
          <div className={`welcome-content ${contentVisible ? 'fade-in' : ''}`}>
            <img className="logo" src={Image} alt="" />
            <h1>BailReckoner</h1>
            <p>Legal Interface</p>
            <button className="enter-button" onClick={handleEnter}>
              Enter
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default WelcomePage;
