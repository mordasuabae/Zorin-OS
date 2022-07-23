const Nav = () => {
  return (
    <div>
      <ul className="nav">
        <li style={{ width: '220px', margin: '0 0 0 -20px' }}>LOGO</li>
        <li>
          <strong>ZORIN OS</strong>
        </li>
        <li>ZORIN GRID</li>
        <li>COMPUTERS</li>
        <li>HELP</li>
      </ul>
      <ul className="fixednav">
        <li style={{ margin: '15px 0 0 10px', width: '580px' }}>
          Z O R I N O S
        </li>
        <li
          style={{
            margin: '15px 0 0 10px',

            width: '80px',
          }}
        >
          <strong>Overview</strong>
        </li>
        <li
          style={{
            margin: '15px 0 0 10px',
            fontStyle: 'bold',
            width: '80px',
          }}
        >
          For Schools
        </li>
        <li
          style={{
            margin: '15px 0 0 10px',

            width: '80px',
          }}
        >
          Pro
        </li>
        <button className="buttonnav">
          <strong>DOWNLOAD</strong>
        </button>
      </ul>
    </div>
  );
};

export default Nav;
