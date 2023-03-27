import { useState, useEffect } from "react";
import { useCart } from "../components/UI/CartContext"
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import SmallCart from "./SmallCart";
import { useRouter } from "next/router";
// Import useRouter

const Navbar = () => {
  const { cart } = useCart();
  const [showSmallCart, setShowSmallCart] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);
  const router = useRouter(); 
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (itemAdded) {
      setShowSmallCart(true);
      setItemAdded(false);
    }
  }, [cartItemCount]);

  useEffect(() => {
    const handleItemAdded = () => {
      setItemAdded(true);
    };

    const closeSmallCart = () => {
      setShowSmallCart(false);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("itemAddedToCart", handleItemAdded);
    }

    
    router.events.on("routeChangeStart", closeSmallCart);

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("itemAddedToCart", handleItemAdded);
      }
      
      router.events.off("routeChangeStart", closeSmallCart);
    };
  }, []);

  const toggleSmallCart = () => {
    if (!showSmallCart) {
      setItemAdded(true);
    } else {
      setShowSmallCart(false);
    }
  };

  return (
    <>
    <div className={styles.container}>
  <div className={styles.itemsContainer}>
    <div className={styles.items}>
      <Link href="/Login">
      <Image
        src={"/icon.png"}
        width={30}
        height={30}
        className={styles.icon}
        alt="img"
      />
      </Link>
      <select name="lang" id="" className={styles.langSwitch}>
        <option value="English" className={styles.english}>
          ENGLISH
        </option>
      </select>
    </div>
    <div className={styles.logo}>
      <Link href="/">
        <Image src={"/logo.svg"} width={80} height={80} alt="img" priority="high"/>
      </Link>
    </div>
    <div className={styles.items}>
      <Image
        src={"/search-icon.png"}
        width={18}
        height={18}
        className={styles.search}
        onClick={() => setSearchMenuOpen(!searchMenuOpen)}
        alt="img"
      />
      <div className={styles.cart} onClick={toggleSmallCart}>
        <Link href="/Cart">
          <Image
            src={"/shop-icon.png"}
            width={20}
            height={20}
            className={styles.shop}
            alt="img"
          />
          <span className={styles.cartCount}>{cartItemCount}</span>
        </Link>
      </div>
      <Image
        src={"/burger-menu.png"}
        width={22}
        height={22}
        className={styles.menu}
        onClick={() => setMenuOpen(!menuOpen)}
        alt="img"
      />
    </div>
    <div
      className={`${styles.searchSlideMenu} ${
        searchMenuOpen ? styles.searchOpen : ""
      }`}
    >
     
      <div className={styles.searchCard}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search"
        />
        <Link href={"/404"}>
        <Image
          src={"/search-icon.png"}
          width={18}
          height={18}
          className={styles.searchIcon}
          alt="img"
        />
        </Link>
        <Image
          src={"/close-icon.svg"}
          width={20}
          height={20}
          className={styles.closeIcon}
          onClick={() => setSearchMenuOpen(false)}
          alt="img"
        />
      </div>
    </div>
    <div
      className={`${styles.overlay} ${searchMenuOpen ? styles.show : ""}`}
      onClick={() => setSearchMenuOpen(false)}
    ></div>
  </div>
</div>

      {showSmallCart && <SmallCart cart={cart} close={toggleSmallCart} />}
      <div className={`${styles.slideMenu} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.openMenu}>
          <div className={styles.menuSection}>
            <h3 className={styles.menuTitle}>CATEGORY</h3>
            <div className={styles.listItems}>
              <ul className={styles.ul}>
                <Link href="/AllItems" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>ALL ITEMS</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>NEW ARRIVALS</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>OUTERWEAR</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>SHIRTS</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>T-SHIRTS</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>SWEATERS</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>PANTS</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>SHOES</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>CAP & HAT</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>BAG & POUCH</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>ACCESSORIES</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>INNER WEAR</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>HOME & LIFESTYLE</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>COLLABORATION ITEMS</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>Wasted Youth</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem}>CATUS PLANT FLEA MARKET</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={styles.menuSection}>
            <h3 className={styles.menuTitle2}>CATEGORY</h3>
            <div className={styles.listItems}>
              <ul className={styles.ul}>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem2}>ALL ITEMS</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem2}>NEW ARRIVALS</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem2}>OUTERWEAR</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className={styles.menuSectionLast}>
            <h3 className={styles.menuTitle}>CATEGORY</h3>
            <div className={styles.listItems}>
              <ul className={styles.ul}>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem3}>ALL ITEMS</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem3}>NEW ARRIVALS</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem3}>OUTERWEAR</li>
                </Link>
                <Link href="/" className={styles.link} onClick={closeMenu}>
                  <li className={styles.listItem3}>SHIRTS</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${styles.overlay} ${menuOpen ? styles.show : ""}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
