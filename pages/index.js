import '../styles/globals.css';
export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '50px' }}>
      <h1>Kül ve Gül Arasında</h1>
      <p>Şiirsel seramiğin dijital vitrinine hoş geldiniz.</p>
    </div>
  );
}
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/mist.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        padding: '50px',
        color: 'white',
      }}
    >// pages/index.tsx veya pages/index.js
export default function Home() {
  return (
    <div className="homepage">
      <div className="overlay">
        <h1>Kül ve Gül Arasında</h1>
        <p>Şiirsel seramiğin dijital vitrinine hoş geldiniz.</p>
        <a className="button" href="#koleksiyon">Koleksiyona Göz At</a>
      </div>

      <style jsx>{`
        .homepage {
          background-image: url('/mist.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          animation: mistMove 20s infinite alternate ease-in-out;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          background-color: rgba(0, 0, 0, 0.4);
          padding: 40px;
          border-radius: 12px;
          text-align: center;
          color: #f0f0f0;
          font-family: 'Georgia', serif;
        }

        .button {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 24px;
          background-color: #444;
          color: #fff;
          border-radius: 8px;
          text-decoration: none;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        .button:hover {
          background-color: #666;
        }

        @keyframes mistMove {
          from {
            background-position: center;
            opacity: 0.7;
          }
          to {
            background-position: center top;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
      <h1>Kül ve Gül Arasında</h1>
      <p>Şiirsel seramiğin dijital vitrinine hoş geldiniz.</p>

      <button
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          border: '1px solid white',
          borderRadius: '8px',
          color: 'white',
          cursor: 'pointer',
          backdropFilter: 'blur(4px)',
        }}
      >
        Koleksiyona Göz At
      </button>
    </div>
  );
}
// pages/index.tsx veya pages/index.js
export default function Home() {
  return (
    <div className="homepage">
      <div className="overlay">
        <h1>Kül ve Gül Arasında</h1>
        <p>Şiirsel seramiğin dijital vitrinine hoş geldiniz.</p>
        <a className="button" href="#koleksiyon">Koleksiyona Göz At</a>
      </div>

      <style jsx>{`
        .homepage {
          background-image: url('/mist.png');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          animation: mistMove 20s infinite alternate ease-in-out;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          background-color: rgba(0, 0, 0, 0.4);
          padding: 40px;
          border-radius: 12px;
          text-align: center;
          color: #f0f0f0;
          font-family: 'Georgia', serif;
        }

        .button {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 24px;
          background-color: #444;
          color: #fff;
          border-radius: 8px;
          text-decoration: none;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }

        .button:hover {
          background-color: #666;
        }

        @keyframes mistMove {
          from {
            background-position: center;
            opacity: 0.7;
          }
          to {
            background-position: center top;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
