import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="row  items-center justify-between">
        <div>
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac
            pellentesque dolor. Nullam elementum urna vel imperdiet scelerisque.
            Donec nec erat in urna lacinia ultrices. Nullam nec fermentum
            libero. Nullam nec fermentum libero. Nullam nec fermentum libero.
          </p>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1652795385751-9ab5ef874039"
            alt="profile"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
