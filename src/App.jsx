import './App.css'
import Dashboard from "./component/Dashboard.jsx";

const WaveBg = () => (
  <div className="wave-container">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 408" preserveAspectRatio="xMidYMid slice" className="wave-svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient y2="0" y1="0" x2="1" x1="0" id="lg-ca780xlr0a">
          <stop offset="0" stopColor="#d3f3fe"/>
          <stop offset="1" stopColor="#e7f9fd"/>
        </linearGradient>
      </defs>
      <path opacity="0.4" fill="url(#lg-ca780xlr0a)" d="M 0 0 L 0 244.14 Q 192 304.06 384 260.94 T 768 266.05 T 1152 297 T 1536 230.82 T 1920 231.95 L 1920 0 Z"/>
      <path opacity="0.4" fill="url(#lg-ca780xlr0a)" d="M 0 0 L 0 273.766 Q 192 284.578 384 262.913 T 768 277.524 T 1152 242.727 T 1536 284.585 T 1920 283.984 L 1920 0 Z"/>
      <path opacity="0.4" fill="url(#lg-ca780xlr0a)" d="M 0 0 L 0 297.797 Q 192 284.594 384 247.843 T 768 242.369 T 1152 267.588 T 1536 280.511 T 1920 289.211 L 1920 0 Z"/>
      <path opacity="0.4" fill="url(#lg-ca780xlr0a)" d="M 0 0 L 0 245.679 Q 192 300.131 384 255.925 T 768 266.065 T 1152 260.202 T 1536 276.06 T 1920 234.076 L 1920 0 Z"/>
      <path opacity="0.4" fill="url(#lg-ca780xlr0a)" d="M 0 0 L 0 246.391 Q 192 313.615 384 283.591 T 768 271.291 T 1152 241.404 T 1536 270.413 T 1920 268.389 L 1920 0 Z"/>
    </svg>
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen">
      <WaveBg />
      <div className="w-full max-w-screen-2xl mx-auto pt-8 pb-12">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
