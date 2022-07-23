const Lastblock = () => {
  return (
    <div className="lastblock">
      <div
        style={{
          border: '1px solid black',
          margin: '0 0 50px 0',
          height: '550px',
          padding: '110px 45px',
          borderRadius: '20px',
          display: 'flex',
          background: 'linear-gradient(65deg,#1e2529,#354249)',
        }}
      >
        {/* <p
          style={{
            border: '1px solid black',
            width: '275px',
            textAlign: 'center',
            padding: '150px 0',
          }}
        >
          ICON
        </p> */}
        <p
          style={{
            // border: '1px solid black',

            width: '620px',
            margin: '-55px 0 0 0',
          }}
        >
          Privacy-respecting.
          <p style={{ fontSize: '35px', margin: '-50px 0 0 0' }}>
            <br />
            <p className="dim">
              We believe privacy is a fundamental human right. That's why Zorin
              OS
            </p>
            <p style={{ margin: '-40px 0 0 5px' }}>
              doesn't collect personal data
            </p>
            <br />
            <p style={{ margin: '-50px 0 0 0' }} className="dim">
              , so advertisers and governments can't spy on your activity. Zorin
              OS is
            </p>
            <p style={{ margin: '0 0 0 5px' }}>
              Open Source
              <p className="dim" style={{ margin: '-5px 0 0 0' }}>
                , so anyone can audit its
                <br /> source code to verify its privacy.
              </p>
            </p>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Lastblock;
