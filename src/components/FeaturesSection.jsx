const features = [
  {
    icon: "",
    title: "Fast Performance",
    description:
      "Lightning-fast load times and smooth interactions that keep your users engaged.",
  },
  {
    icon: "",
    title: "Beautiful Design",
    description:
      "Stunning visuals and modern interface that captivates your audience.",
  },
  {
    icon: "",
    title: "Responsive",
    description:
      "Works perfectly on all devices, from mobile phones to desktop computers.",
  },
  {
    icon: "",
    title: "Secure",
    description:
      "Built with security in mind to protect your data and privacy.",
  },
  {
    icon: "",
    title: "Easy to Use",
    description:
      "Intuitive interface that anyone can use without any training.",
  },
  {
    icon: "",
    title: "Innovative",
    description:
      "Cutting-edge technology that keeps you ahead of the competition.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="content-section dark" id="features">
      <div className="container">
        <h2>Our Features</h2>
        <p>Discover what makes us special</p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>
                {feature.icon} {feature.title}
              </h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
