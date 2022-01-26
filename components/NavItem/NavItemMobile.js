import styles from "./NavItem.module.scss";
import Link from "next/link";

const NavItemMobile = ({ active, name, link }) => {
    return (
        <li className=" relative">
            <Link href={link}>
                <a className={`relative ${active ? styles.active : ""} block px-2 mx-4 py-4 green ${styles.itemMobile}`}>{name}</a>
            </Link>
        </li>
    );
};

export default NavItemMobile;
