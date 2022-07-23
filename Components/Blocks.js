const Blocks = () => {
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
          height: '800px',
          background:
            'linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05)),linear-gradient(65deg,#029be9,#22c5fd)',
          color: 'white',
        }}
      >
        <p style={{ fontWeight: '600' }}>Reliable.</p>
        <p className="blocksp">
          With an Ubuntu and Linux foundation, Zorin OS is built on the same
          Open Source software that powers the
          <br />
          <strong>U.S. Department of Defense</strong>
          <p className="blocksp" style={{ margin: '0 0 0 2px' }}>
            and computers on the
          </p>
          <strong>International Space Station</strong>
          <p style={{ margin: '-5px 0 0 0' }} className="blocksp">
            .
          </p>
        </p>
      </div>
      <div
        style={{
          padding: '30px 65px',
          margin: '0 0 0 0',
          width: '463px',
          borderRadius: '20px',
          height: '700px',
          background:
            'linear-gradient(rgba(0,0,0,.05),rgba(0,0,0,.05)),linear-gradient(65deg,#1bbe81,#2ae18e)',
          color: 'white',
        }}
      >
        <p style={{ fontWeight: '600' }}>Secure.</p>
        <p className="blocksp">
          Thanks to the advanced security features of Linux, Zorin OS is
          <strong style={{ margin: '0 0 0 10px' }}>
            resistant to PC viruses and malware
          </strong>
          . Security patches and software updates arrive quickly and are
          available for years to come.
        </p>
      </div>
    </div>
  );
};

export default Blocks;
