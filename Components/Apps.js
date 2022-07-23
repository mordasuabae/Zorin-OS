const Apps = () => {
  return (
    <div
      style={{ width: '100%', height: '500px', padding: '200px 250px' }}
      className="apps"
    >
      <div
        style={{
          // border: '1px black solid',
          backgroundColor: 'white',
          color: '#123354',
          fontWeight: '700',
          height: '450px',
          borderRadius: '15px',
          padding: '20px 40px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '50px' }} className="dim">
          A world or incredible
        </p>
        <p style={{ fontSize: '50px', margin: '-55px 0 0 0' }}>
          Apps{' '}
          <p style={{ margin: '-67px 0 0 135px' }} className="dim">
            .
          </p>
        </p>
      </div>
      <p
        style={{
          margin: '-210px 0 0 0',
          padding: '0 50px',
          fontSize: '18px',
          color: '#123354',
        }}
      >
        Zorin OS comes with all the essential apps you need out of the box, so
        you can get working right away. Discover thousands of powerful apps from
        the built-in Software store. You can even run many{' '}
        <a href="">
          {' '}
          Windows apps in Zorin OS
          <br /> with Windows App Support.
        </a>
      </p>
    </div>
  );
};

export default Apps;
