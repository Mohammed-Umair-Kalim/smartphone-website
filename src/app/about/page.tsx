import React from "react";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import Link from "next/link";

import img1 from "../../../public/images/about1.jpg";
import img2 from "../../../public/images/about2.jpg";

const About = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[60vh] flex flex-col"
        style={{
          backgroundImage: "url('/images/bg1.0.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-50"></div>

        {/* Centered Content */}
        <div className="relative z-10 flex-grow flex items-center justify-center text-center">
          <div className="text-black">
            {/* Logo */}
            <div className="ml-[38%] sm:ml-[25%] md:ml-[35%]">
              <span className="text-3xl font-bold">
                <Image src={logo} alt="logo" width={40} height={40} />
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-semibold mb-2">About</h1>

            {/* Breadcrumbs */}
            <nav className="text-sm text-gray-950">
              <span className="font-semibold">
                <Link href="/">Home</Link>
              </span>
              &nbsp; &#62; &nbsp;
              <span>About</span>
            </nav>
          </div>
        </div>
      </section>

      <h1 className="text-5xl text-gray-800 mt-10 font-semibold text-center px-4 sm:px-8 md:px-12">
        The Rise of Foldable Smartphones:
        <br /> A Revolution in Mobile Technology
      </h1>

      <p className="text-gray-600 mt-5 mb-5 ml-2 sm:ml-4 md:ml-8">
        The smartphone industry is ever-evolving, consistently pushing the
        boundaries of technology and design. Among the most recent and exciting
        innovations is the advent of foldable smartphones. These devices, once
        considered a futuristic concept, are now a reality, reshaping how we
        interact with mobile technology. This article explores the development,
        advantages, challenges, and future of foldable smartphones, a
        revolutionary trend in the tech world.
      </p>

      <h2 className="text-4xl font-semibold mt-5 ml-5 mb-5 text-gray-800">
        The Evolution of Foldable Smartphones:
      </h2>

      <p className="text-gray-600 mt-5 mb-5 ml-2 sm:ml-4 md:ml-8">
        The idea of foldable devices dates back decades, often depicted in
        science fiction as a symbol of advanced technology. However, it wasnt
        until the late 2010s that companies began introducing prototypes and
        commercial models. Samsung, Huawei, and Motorola were among the
        pioneers, with Samsungs Galaxy Fold debuting in 2019 as one of the first
        mainstream foldable smartphones. Since then, the market has expanded.
        Foldable smartphones typically fall into two categories: <br />
        clamshell designs that resemble traditional flip phones and larger
        book-like designs that unfold into tablet-sized screens. These devices
        leverage cutting-edge materials such as flexible OLED displays and
        advanced hinge mechanisms to achieve their foldable form factors.
      </p>

      <div className="flex justify-center">
        <Image src={img1} alt="foldable-img" height={500} width={1200} className="w-full sm:w-[80%] lg:w-[70%]" />
      </div>

      <h2 className="text-4xl font-semibold mt-5 ml-5 mb-5 text-gray-800">
        Advantages of Foldable Smartphones:
      </h2>

      <h3 className="text-3xl font-semibold mt-5 ml-5 mb-5 text-gray-800">
        Enhanced Versatility:
      </h3>

      <p className="text-gray-600 mt-5 mb-5 ml-2 sm:ml-4 md:ml-8">
        One of the primary advantages of foldable smartphones is their
        versatility. Users can enjoy a compact device that easily fits into a
        pocket while unfolding it into a larger screen for tasks like watching
        videos, gaming, or multitasking. This flexibility offers a seamless
        transition between phone and tablet functionalities.
      </p>

      <h3 className="text-3xl font-semibold mt-5 ml-5 mb-5 text-gray-800">
        Improved Productivity:
      </h3>

      <p className="text-gray-600 mt-5 mb-5 ml-2 sm:ml-4 md:ml-8">
        Foldable smartphones excel in productivity. With larger screens, users
        can run multiple apps simultaneously, boosting efficiency. Features like
        split-screen mode and drag-and-drop functionality enhance the user
        experience, particularly for professionals who rely on mobile devices
        for work.
      </p>

      <h3 className="text-3xl font-semibold mt-5 ml-5 mb-5 text-gray-800">
        Immersive Entertainment:
      </h3>

      <p className="text-gray-600 mt-5 mb-5 ml-2 sm:ml-4 md:ml-8">
        The expansive displays of foldable smartphones provide an immersive
        experience for media consumption. Whether its streaming movies, browsing
        photos, or playing games, these devices deliver superior visual quality
        and an engaging experience compared to traditional smartphones.
      </p>

      <div className="flex justify-center">
        <Image src={img2} alt="foldable2-img" height={500} width={600} className="w-full sm:w-[80%] lg:w-[70%]" />
      </div>

      <h3 className="text-3xl font-semibold mt-5 ml-5 mb-1 text-gray-800 text-center">
        Conclusion:
      </h3>

      <p className="text-gray-600 mt-1 mb-5 ml-2 text-center px-4 sm:px-8 md:px-20">
        Foldable smartphones represent a significant leap forward in mobile
        technology, blending innovation with practicality. While they are not
        without their challenges, their potential to transform how we use and
        interact with devices is undeniable. As the market matures, foldable
        smartphones are poised to become a mainstream choice, driving the next
        wave of innovation in the tech industry. Whether youre a tech enthusiast
        or a casual user, foldable smartphones offer a glimpse into the future
        of mobile technology, where flexibility and adaptability take center
        stage.
      </p>
    </div>
  );
};

export default About;
