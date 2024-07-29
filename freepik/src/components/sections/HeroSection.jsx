import styles from "./heroSection.module.css";
function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <img src="https://fps.cdnpk.net/home/cover/image-14.webp?w=1400&amp;h=438" />

      <div>
        <h1>Create great designs, faster</h1>
        <p>
          High-quality photos, videos, vectors, PSD, AI images, icons... to go
          from ideas to outstanding designs
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
