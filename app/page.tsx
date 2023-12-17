import Image from "next/image";
import styles from "./HomePage.module.css";

export default function Home() {
  return (
    <div className="container grid grid-cols-2">
      <div className={`${styles.heroTextContainer} flex flex-col`}>
        <h2>Hello there,</h2>
        <h1>I'm Jordan Ready</h1>
        <h3>I'm a Full-stack Web Developer!</h3>
        <p>
          My expertise lies in both front-end and back-end technologies, which
          allows me to tackle projects with a comprehensive perspective. I
          believe in leveraging the latest tools and frameworks to create
          efficient, scalable, and user-friendly applications. Welcome to my
          website, and thank you for taking the time to learn more about me.
        </p>
      </div>
      <div className={styles.heroImgContainer}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto a sed
          eligendi id voluptate in quibusdam cupiditate iure excepturi harum.
          Explicabo laboriosam, beatae laborum alias doloremque nemo corrupti
          dolor ducimus nesciunt expedita amet saepe tempora quod quam ad
          quaerat dignissimos ipsa quos, repudiandae soluta molestiae. Ipsum
          reiciendis atque autem maxime laborum cumque unde magni, et quod neque
          distinctio corrupti vitae, odit dolorum mollitia beatae quaerat
          repellendus consequuntur, deleniti minus placeat rerum voluptate
          consectetur. Blanditiis corporis quo expedita voluptatibus ut, at
          totam soluta numquam neque temporibus officiis, ea perspiciatis nihil
          voluptates perferendis ducimus, quia aliquam nam quaerat ullam
          quisquam. Eos, labore odit! Praesentium rerum expedita impedit
          voluptate, ea porro. Maxime, itaque deleniti? Explicabo ratione quo
          beatae alias ullam molestias quisquam vitae. Alias, eaque debitis?
          Nulla repellendus ab, provident corrupti minus
        </p>
      </div>
    </div>
  );
}
