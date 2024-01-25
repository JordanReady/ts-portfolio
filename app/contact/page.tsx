import React from "react";
import styles from "./Contact.module.css";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import Logo from "@/public/LogoRound.png";
import Reveal from "@/components/Reveal";

function Contact() {
  return (
    <div
      className={` ${styles.container} container grid grid-cols-1 md:grid-cols-2 gap-8 p-8 `}
    >
      {/* Left Column */}
      <div className="md:col-span-1 flex justify-center">
        <div
          className={`relative p-0.5 mb-2  overflow-hidden text-sm font-medium rounded-lg ${styles.contactContainer} bg-gradient-to-br from-purple-600 to-blue-500 `}
        >
          <div
            className={`max-w-md mx-auto relative px-5 py-2.5 ${styles.contactCard} bg-white dark:bg-slate-900 rounded-md group-hover:bg-opacity-0`}
          >
            <Reveal direction="top" delayTime={0} color="#9333ea">
              <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-4xl mb-2 font-semibold">
                Jordan Ready
              </h2>
            </Reveal>
            <Reveal direction="top" delayTime={0.1} color="#9333ea">
              <div
                className={`${styles.logo} relative p-0.5 mb-2  overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500`}
              >
                <Image
                  src={Logo}
                  alt="Logo"
                  width={130}
                  height={130}
                  className={`${styles.logoImg}  bg-white dark:bg-slate-900 `}
                  loading="lazy"
                  placeholder="blur"
                  sizes="fill"
                />
              </div>
            </Reveal>
            <div className={styles.contactInfo}>
              <Reveal direction="top" delayTime={0.2} color="#9333ea">
                <p className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-3xl mb-2 font-semibold">
                  Personal Info
                </p>
              </Reveal>
              <Reveal direction="top" delayTime={0.25} color="grey">
                <p className=" mb-2">Software Developer</p>
              </Reveal>
              <Reveal direction="top" delayTime={0.3} color="grey">
                <p className=" mb-2">Location: Dubuque, IA</p>
              </Reveal>
              <Reveal direction="top" delayTime={0.35} color="grey">
                <p className=" mb-2">Phone: 563-593-3110</p>
              </Reveal>
              <Reveal direction="top" delayTime={0.4} color="grey">
                <p className=" mb-4">Email: jready112@gmail.com</p>
              </Reveal>
              <Reveal direction="top" delayTime={0.5} color="#9333ea">
                <CustomButton
                  link="https://www.linkedin.com/in/your-linkedin"
                  text="LinkedIn"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:col-span-1 flex justify-center">
        <div
          className={`relative p-0.5 mb-2  overflow-hidden text-sm font-medium rounded-lg ${styles.formContainer} bg-gradient-to-br from-purple-600 to-blue-500 `}
        >
          <form
            className={`max-w-md mx-auto relative px-5 py-2.5 ${styles.form} bg-white dark:bg-slate-900 rounded-md group-hover:bg-opacity-0`}
          >
            <div className="mb-4">
              <Reveal direction="top" delayTime={0} color="#9333ea">
                <label className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl mb-2 font-semibold">
                  Name{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl font-semibold">
                    *
                  </span>
                </label>
              </Reveal>
              <Reveal
                width="100%"
                direction="top"
                delayTime={0.05}
                color="grey"
              >
                <input
                  placeholder="Jane Doe"
                  type="text"
                  className={` ${styles.input} dark:bg-slate-800 border rounded-md p-2`}
                  required
                />
              </Reveal>
            </div>

            <div className="mb-4">
              <Reveal direction="top" delayTime={0.1} color="#9333ea">
                <label className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl mb-2 font-semibold">
                  Email{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl font-semibold">
                    *
                  </span>
                </label>
              </Reveal>
              <Reveal
                width="100%"
                direction="top"
                delayTime={0.15}
                color="grey"
              >
                <input
                  placeholder="janedoe@email.com"
                  type="email"
                  className={` ${styles.input} dark:bg-slate-800 border rounded-md p-2`}
                  required
                />
              </Reveal>
            </div>

            <div className="mb-4">
              <Reveal direction="top" delayTime={0.2} color="#9333ea">
                <label className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl mb-2 font-semibold">
                  Phone
                </label>
              </Reveal>
              <Reveal
                width="100%"
                direction="top"
                delayTime={0.25}
                color="grey"
              >
                <input
                  placeholder="123-456-7890"
                  type="tel"
                  className={` ${styles.input} dark:bg-slate-800 border rounded-md p-2`}
                />
              </Reveal>
            </div>

            <div className="mb-4">
              <Reveal direction="top" delayTime={0.3} color="#9333ea">
                <label className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl mb-2 font-semibold">
                  Message{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl font-semibold">
                    *
                  </span>
                </label>
              </Reveal>
              <Reveal
                width="100%"
                direction="top"
                delayTime={0.35}
                color="grey"
              >
                <textarea
                  className={` ${styles.input} dark:bg-slate-800 border rounded-md p-2`}
                  rows={4}
                  required
                  placeholder="What's on your mind?"
                ></textarea>
              </Reveal>
            </div>
            <Reveal direction="top" delayTime={0.4} color="#9333ea">
              <CustomButton text="Send Message" />
            </Reveal>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
