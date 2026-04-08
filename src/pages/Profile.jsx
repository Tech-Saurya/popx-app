export default function Profile() {
  return (
    <div className="container">
      <h2 className="title">Account Settings</h2>

      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <img
          src="https://i.pravatar.cc/100"
          style={{ width: "60px", borderRadius: "50%" }}
        />

        <div>
          <h4>Marry Doe</h4>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Marry@gmail.com
          </p>
        </div>
      </div>

      <p style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr.
      </p>
    </div>
  );
}