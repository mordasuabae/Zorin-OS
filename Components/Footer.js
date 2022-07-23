const Footer = () => {
  return (
    <div className="footer">
      <ul
        style={{
          display: 'flex',
          // border: '1px gray solid',
          padding: '20px 0',
          height: '100px',
        }}
      >
        <li style={{ width: '310px', padding: '0 20px' }}>LOGO</li>
        <li style={{ width: '230px', padding: '0 20px', fontSize: '15px' }}>
          <p style={{ margin: '-0px 0 0 0' }}>
            Get the latest news about Zorin and tips in your
            <br /> inbox.
          </p>
        </li>
        <button
          className="footerbutton"
          style={{
            width: '310px',
            height: '55px',
            padding: '0 0px',
            fontSize: '20px',
            textAlign: 'center',
            margin: '0 0 0 -15px',
          }}
        >
          <strong>
            <p style={{ margin: '-5px 0 0 0' }}>Subscribe to our newsletter</p>
          </strong>
        </button>
      </ul>
      <ul
        style={{
          display: 'flex',
          // border: '1px gray solid',
          padding: '10px 0',
          height: '200px',
        }}
      >
        <li style={{ width: '310px', padding: '0 20px', fontSize: '20px' }}>
          <p>Made with ☘️ in Ireland.</p>
          <p>3 social logos.</p>
        </li>
        <li style={{ width: '200px', padding: '0 20px', fontSize: '15px' }}>
          <h3 style={{ letterSpacing: '2px' }}>PRODUCTS</h3>
          <p>Zyro OS</p>
          <p>Zyro Grid</p>
          <p>Computers</p>
        </li>
        <li style={{ width: '230px', padding: '0 20px', fontSize: '15px' }}>
          <h3 style={{ letterSpacing: '2px' }}>HELP</h3>
          <p>How to install Zorin OS</p>
          <p>System Requirements</p>
          <p>Switch your organization</p>
          <p>Other Help Articles</p>
        </li>
        <li style={{ width: '230px', padding: '0 20px', fontSize: '15px' }}>
          <h3 style={{ letterSpacing: '2px' }}>COMPANY</h3>
          <p>About</p>
          <p>Blog</p>
          <p>Press Kit</p>
          <p>Donate</p>
        </li>
      </ul>

      <ul
        style={{
          // border: '1px gray solid',
          padding: '10px 0',
          height: '100px',
          margin: '50px 0 0 0',
        }}
      >
        <p
          style={{
            width: '400px',
            padding: '0 20px',
            textAlign: 'center',
            margin: '0 0 0 300px',
          }}
        >
          © 2008 - 2022 Zorin Group All Rights Reserved.
        </p>
        <p
          style={{
            width: '800px',
            padding: '0 20px',
            textAlign: 'center',
            margin: '0 0 0 100px',
          }}
        >
          Any trademarks or logos used on this site are property of their
          respective owners.
        </p>
        <ul style={{ display: 'flex', margin: '20px 0 0 250px' }}>
          <li>Terms of Service </li>
          <li>Privacy Policy</li>
          <li>Cookies Policy</li>
        </ul>
      </ul>
    </div>
  );
};

export default Footer;
