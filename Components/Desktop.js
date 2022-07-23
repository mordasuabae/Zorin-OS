const Desktop = () => {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <div
        style={{
          margin: '-400px 0 0 0',
          height: '600px',
          textAlign: 'center',
          padding: '20px 350px',
        }}
      >
        <h1
          style={{
            fontSize: '55px',
            opacity: '0.5',
            margin: '100px 0 0 0',
            color: '#123354',
          }}
        >
          A familiar desktop
          <br />
        </h1>
        <h1
          style={{
            color: '#123354',
            fontSize: '55px',
            // border: '1px solid black',
            margin: '-10px 0 0 0',
          }}
        >
          you already know how to use.
        </h1>
        <p style={{ fontSize: '20px', color: '#123354' }}>
          Zorin OS is designed to be easy, so you don't need to learn anything
          to get started. The Zorin Appearance app lets you change the desktop
          layout to feel like the environment you're familiar with, whether it's
          Windows, macOS, or Linux.
        </p>
        <img src="" alt="Desktop img" />
      </div>
    </div>
  );
};

export default Desktop;
