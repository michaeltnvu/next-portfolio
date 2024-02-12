import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Michael
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            repudiandae soluta eos, fuga facere qui laborum id inventore, quia
            labore magnam! Inventore, tempora asperiores! Accusantium facilis
            cumque hic! Odit, modi.
          </p>
        </div>
        <div className="col-span-5">
          <Image
            className="rounded-full"
            src="/images/profile.jpg"
            alt="profile image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
