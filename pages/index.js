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
    >
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
