import { features } from "../data/restaurantData";

function AboutUs() {
  return (
    <section className="overflow-hidden bg-white px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            Why Choose Savora?
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Good Food.{" "}
            <span className="text-orange-500">Better Experience.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            We care about every detail — from the ingredients we choose to the
            moment your food reaches your table.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${feature.color} animate-fade-up`}
            >
              {/* Decorative circle */}
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-white/60 transition-all duration-500 group-hover:scale-150" />

              {/* Icon */}
              <div
                className={`relative flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition duration-500 group-hover:rotate-6 group-hover:scale-110 ${feature.iconBg}`}
              >
                {feature.icon}
              </div>

              <h3 className="relative mt-6 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="relative mt-3 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>

              <div className="mt-6 h-1 w-10 rounded-full bg-orange-400 transition-all duration-500 group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
