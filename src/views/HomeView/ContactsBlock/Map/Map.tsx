import cls from "../styles.module.scss";

export default function Map() {
  return (
    <div className={cls.mapWrapp}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15375.354554472224!2d27.953185447057233!3d-26.048590156126515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9575d8a09bf583%3A0x2f7c7753c28a8e84!2sRightCars!5e0!3m2!1sru!2sua!4v1738671307695!5m2!1sru!2sua"
        className={cls.map}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
