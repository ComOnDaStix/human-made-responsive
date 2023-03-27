import Image from "next/image";
import styles from "../styles/SubFooter.module.css"

const SubFooter = () => {
    return (  
        <div className={styles.wrapper}>
         <div className={styles.subFooterContainer}>
            <div className={styles.FooterInfo}>
                <Image src={"/footerimg.avif"} width={200} height={32} className={styles.humanMade} alt="img"/>
            </div>
            <div className={styles.footerIcons}>
                <Image className={styles.footerIcon} src={"/igLogo.svg"} width={25} height={25} alt="img"/>
                <Image className={styles.footerIcon} src={"/wechat.svg"} width={30} height={30} alt="img"/>
                <Image className={styles.footerIcon} src={"/qr.png"} width={25} height={25} alt="img"/>
            </div>
            <div className={styles.copyRights}>Copyright © 2022 OTSUMO CO., LTD. All rights reserved.</div>
         </div>
        </div>
    );
}
 
export default SubFooter;