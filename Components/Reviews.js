const Reviews = () => {
  return (
    <div className="reviews" style={{ margin: '400px 0', width: '100%' }}>
      <ul style={{ display: 'flex', margin: '0 0 0 auto' }}>
        <li
          style={{
            padding: '0 50px',
            width: '300px',
          }}
        >
          <p style={{ fontWeight: '800' }}>Forbes</p>
          <p>
            “[Zorin OS] is just so clean and polished. I don’t really anticipate
            a learning curve for new users.”
          </p>
        </li>
        <li
          style={{
            padding: '0 50px',
            width: '300px',
          }}
        >
          <p style={{ fontWeight: '800' }}>TechRepublic</p>
          <p>
            “Who is Zorin OS 16 for? Anyone. Period. That's how good Zorin OS 16
            is.”
          </p>
        </li>
        <li
          style={{
            padding: '0 50px',
            width: '300px',
          }}
        >
          <p style={{ fontWeight: '800' }}>TechRadar</p>
          <p>
            “It has everything in terms of offering a friendly and usable
            experience to those coming from… Windows or macOS”
          </p>
        </li>
        <li
          style={{
            padding: '0 50px',
            width: '300px',
          }}
        >
          <p style={{ fontWeight: '800' }}>PCWorld</p>
          <p>“When speed is of the essence, Zorin OS really shines”</p>
        </li>
      </ul>
    </div>
  );
};

export default Reviews;
