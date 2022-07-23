const Connectext = () => {
  return (
    <div
      className="blocks"
      style={{
        width: '100%',
        display: 'flex',
        padding: '80px 50px',
      }}
    >
      <div
        style={{
          padding: '30px 65px',
          margin: '0 0 0 0',
          width: '463px',
          borderRadius: '20px',
          height: '650px',
          background: 'linear-gradient(65deg,#4b5560,#61717c)',
          color: 'white',
        }}
      >
        <p style={{ fontWeight: '600' }}>Dual boot.</p>
        <p className="blocksp">
          You can install Zorin OS
          <br />
          <strong>alongside Windows </strong>
          <p className="blocksp" style={{ margin: '0 0 0 2px' }}>
            or
          </p>
          <strong>macOS</strong>
          <p style={{ margin: '-5px 0 0 0' }} className="blocksp">
            to keep your files and apps. You'll be able to choose which OS to
            use at each boot-up.
          </p>
        </p>
      </div>
      <div
        style={{
          padding: '30px 65px',
          margin: '0 0 0 0',
          width: '463px',
          borderRadius: '20px',
          height: '650px',
          background:
            'linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05)),linear-gradient(65deg,#8e49e0,#9f74e7)',
          color: 'white',
        }}
      >
        <p style={{ fontWeight: '600' }}>Accessibility.</p>
        <p className="blocksp">
          Zorin OS is translated into
          <br />
          <strong>100 languages.</strong>
          <p className="blocksp" style={{ margin: '0 0 0 2px' }}>
            or
          </p>
          <strong>macOS</strong>
          <p style={{ margin: '-5px 0 0 0' }} className="blocksp">
            It includes a screen reader, magnifier, click assist, and other
          </p>
          <strong>assistive technologies.</strong>
        </p>
      </div>
    </div>
  );
};

export default Connectext;
