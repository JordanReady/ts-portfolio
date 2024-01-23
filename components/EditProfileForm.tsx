import React from "react";
import styles from "./EditProfileForm.module.css";
import Reveal from "./Reveal";
import CustomButton from "./CustomButton";

function EditProfileForm() {
  return (
    <div className=" flex ">
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
            <Reveal width="100%" direction="top" delayTime={0.05} color="grey">
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
                Profession / Business{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl font-semibold">
                  *
                </span>
              </label>
            </Reveal>
            <Reveal width="100%" direction="top" delayTime={0.15} color="grey">
              <input
                placeholder="Astronaut Cowboy"
                type="text"
                className={` ${styles.input} dark:bg-slate-800 border rounded-md p-2`}
                required
              />
            </Reveal>
          </div>

          <div className="mb-4">
            <Reveal direction="top" delayTime={0.3} color="#9333ea">
              <label className="block text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500 text-xl mb-2 font-semibold">
                Bio{" "}
              </label>
            </Reveal>
            <Reveal width="100%" direction="top" delayTime={0.35} color="grey">
              <textarea
                className={` ${styles.input} dark:bg-slate-800 border rounded-md p-2`}
                rows={4}
                placeholder="Tell us a little something about yourself or business!"
              ></textarea>
            </Reveal>
          </div>
          <Reveal direction="top" delayTime={0.4} color="#9333ea">
            <CustomButton text="Update" />
          </Reveal>
        </form>
      </div>
    </div>
  );
}

export default EditProfileForm;
