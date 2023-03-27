import Image from "next/image";
import styles from "../styles/AboutSection.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.aboutContainer}>
        <div className={styles.text}>
          <p className={styles.textOne}>
            Launched by NIGO® in 2010, Human Made is a Tokyo-based lifestyle
            brand with the concept of “the future is in the past”
          </p>
          <p className={styles.textTwo}>
            Human Made draws inspiration from a diverse mix of styles and
            vintage items, which embody the atmosphere of times past, while
            exploring bold ideas that stand out amid the constant stream of
            street culture. Interweaving these elements with Japan’s
            uncompromising approach to craftsmanship and the playful spirit of
            Tokyo, Human Made creates a wide range of items for a global
            audience.
          </p>
          <p className={styles.textThree}>
            Human Made aspires to be a focal point for the culture, creativity
            and ideas that power the world.
          </p>
        </div>
        <div>
          <div>
            <p className={styles.textOne}>
              2010年、ライフスタイルブランドの HUMAN MADE は “The Future Is In
              The Past” のコンセプトのもとにNIGO®
              によって東京でスタートしました。
            </p>
            <p className={styles.textTwo}>
              その時代の空気感を映し出す多種多様なスタイルとヴィンテージアイテムの数々。そして途切れることのないカルチャーの流れのなかで世界中のストリートに息づく大胆な発想。それらに日本の妥協なきモノづくり精神と東京らしい遊び心を織り交ぜ、さまざまなアイテムを世界へと発信しています。
            </p>
            <p>
              HUMAN MADE
              のビジョンは、世界中に脈打つ創造性とアイデアの拠点となること。あらゆるカルチャーと世界中のクリエイターにとって、そして未来を担う若者たちにとっての理想郷となることです。
            </p>
          </div>
          <div className={styles.logo}>
            <Image src={"/logo.svg"} width={150} height={106} alt="img"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
