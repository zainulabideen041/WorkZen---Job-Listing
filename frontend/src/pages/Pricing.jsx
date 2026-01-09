import Navbar from "../components/Navbar";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: [
        "Up to 10 employees",
        "Basic scheduling",
        "Email support",
        "Mobile app access",
        "Basic analytics",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      features: [
        "Up to 50 employees",
        "Advanced scheduling",
        "Priority support",
        "Mobile app access",
        "Advanced analytics",
        "Custom reports",
        "API access",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      features: [
        "Unlimited employees",
        "Advanced scheduling",
        "24/7 dedicated support",
        "Mobile app access",
        "Advanced analytics",
        "Custom reports",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
      ],
      highlighted: false,
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-primary via-primary-dark to-gray-50"
      style={{
        background:
          "linear-gradient(180deg, #4ecdc4 0%, #44a39d 20%, #f7f7f7 20%, #f7f7f7 100%)",
      }}
    >
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6">
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.highlighted ? "ring-4 ring-primary scale-105" : ""
              }`}
            >
              {plan.highlighted && (
                <div className="bg-primary text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-extrabold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-600 text-lg">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
