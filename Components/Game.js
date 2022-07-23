const Game = () => {
  return (
    <div
      style={{ width: '100%', height: '1000px', padding: '200px 250px' }}
      className="apps"
    >
      <p
        style={{
          fontSize: '50px',
          color: '#123354',
          fontWeight: '700',
          borderRadius: '15px',
          padding: '20px 140px',
        }}
        className="dim"
      >
        {' '}
        Ready.Set.
      </p>
      <p
        style={{
          textAlign: 'center',
          fontSize: '50px',
          color: '#123354',
          fontWeight: '700',
          borderRadius: '15px',
          textAlign: 'center',
          margin: '-135px 0 0 180px',
        }}
      >
        {' '}
        Game!
      </p>
      <p
        style={{
          padding: '0 50px',
          fontSize: '18px',
          color: '#123354',
        }}
      >
        Play an enormous library of your favorite games, whether they're AAA
        titles or indie games. Install native Linux and Windows games from
        Steam, Lutris, and other sources. Zorin OS comes loaded with NVIDIA &
        AMD Radeon graphics drivers and game optimizations, so you can get the
        best performance easily.
      </p>
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
          margin: '20px 0 0 0',
        }}
      >
        <p style={{ fontSize: '25px' }}>Play thousands of games from...</p>
        <ul style={{ display: 'flex', margin: '100px 0 0 0' }}>
          <li>Stream</li>
          <li>Lutris</li>
          <li>Software store</li>
          <li>itch.io</li>
        </ul>
        <p style={{ margin: '100px 0 0 0' }}>GOG logo GOG</p>
      </div>
    </div>
  );
};

export default Game;
