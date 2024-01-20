import React from "react";
import styles from "./Contact.module.css";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import Logo from "@/public/LogoRound.png";

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
            className={`max-w-md mx-auto relative px-5 py-2.5 ${styles.contactCard} bg-white dark:bg-slate-950 rounded-md group-hover:bg-opacity-0`}
          >
            <h2 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-4xl mb-2 font-semibold">
              Jordan Ready
            </h2>
            <div
              className={`${styles.logo} relative p-0.5 mb-2  overflow-hidden text-sm font-medium rounded-lg bg-gradient-to-br from-purple-600 to-blue-500`}
            >
              <Image
                src={Logo}
                alt="Logo"
                width={130}
                height={130}
                className={`${styles.logoImg}  bg-white dark:bg-slate-950 `}
                loading="lazy"
                placeholder="blur"
                sizes="fill"
              />
            </div>
            <div className={styles.contactInfo}>
              <p className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl mb-2 font-semibold">
                Personal Info
              </p>
              <p className=" mb-2">Software Developer</p>
              <p className=" mb-2">Location: Dubuque, IA</p>
              <p className=" mb-2">Phone: 563-593-3110</p>
              <p className=" mb-4">Email: jready112@gmail.com</p>
              <CustomButton
                link="https://www.linkedin.com/in/your-linkedin"
                text="LinkedIn"
              />
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
            className={`max-w-md mx-auto relative px-5 py-2.5 ${styles.form} bg-white dark:bg-slate-950 rounded-md group-hover:bg-opacity-0`}
          >
            <div className="mb-4">
              <label className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl mb-2 font-semibold">
                Name{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl font-semibold">
                  *
                </span>
              </label>
              <input
                placeholder="Jane Doe"
                type="text"
                className={` ${styles.input} dark:bg-slate-800 border rounded-md p-2`}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl mb-2 font-semibold">
                Email{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl font-semibold">
                  *
                </span>
              </label>
              <input
                placeholder="janedoe@email.com"
                type="email"
                className={` ${styles.input} dark:bg-slate-800 border rounded-md p-2`}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl mb-2 font-semibold">
                Phone
              </label>
              <input
                placeholder="123-456-7890"
                type="tel"
                className={` ${styles.input} dark:bg-slate-800 border rounded-md p-2`}
              />
            </div>

            <div className="mb-4">
              <label className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl mb-2 font-semibold">
                Message{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl font-semibold">
                  *
                </span>
              </label>
              <textarea
                className={` ${styles.input} dark:bg-slate-800 border rounded-md p-2`}
                rows={4}
                required
                placeholder="What's on your mind?"
              ></textarea>
            </div>
            <CustomButton text="Send Message" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
