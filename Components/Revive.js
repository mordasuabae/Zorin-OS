const Revive = () => {
  return (
    <div style={{ padding: '100px 0' }}>
      <div className="revive">
        <img src="" alt="Revive image" />
        <h1
          style={{
            fontSize: '60px',
            opacity: '0.5',
            margin: '0 0 0 385px',
            color: '#123354',
          }}
        >
          Revive your
        </h1>
        <h1
          style={{ fontSize: '60px', margin: '-1px 0 0 0', padding: '0 15px' }}
        >
          old
        </h1>
      </div>
      <div>
        <h1
          style={{
            fontSize: '60px',
            padding: '0 110px',
            display: 'flex',
            margin: '0 0 0 385px',
          }}
        >
          PC{' '}
          <h1 style={{ fontSize: '60px', opacity: '0.5', margin: '0 0 0 0' }}>
            .
          </h1>
        </h1>
      </div>
      <p
        style={{
          margin: '50px 0 0 500px',
          height: '400px',
          color: '#123354',
          width: '500px',
          fontSize: '18px',
        }}
      >
        The Zorin OS Lite edition is streamlined to work on computers as old as
        15 years, so you can keep using your PC for longer and save money on
        upgrades. No TPM required.
      </p>
      <p
        style={{
          margin: '-250px 0 0 500px',
          height: '250px',

          width: '500px',
          fontSize: '18px',
          padding: '40px 40px',
          color: '#62778e',
          backgroundColor: 'white',
          borderRadius: '15px',
        }}
      >
        "Because of the lower hardware requirements [of Zorin OS] alone, we're
        expecting to extend the life of the city's PCs by 30-40%"
        <br />
        <br />
        <p style={{ display: 'flex', justifyContent: 'flex-end' }}>
          ― City of Vicenza, Italy
        </p>
      </p>
    </div>
  );
};

export default Revive;
