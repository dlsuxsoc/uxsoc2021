import styles from "./NavItem.module.scss";
import Link from "next/link";

const NavItem = ({ active, name, link }) => {
    return (
        <li className="inline-block ml-5 relative">
            <Link href={link}>
                <a className={`relative ${active ? styles.active : ""} green ${styles.item}`}>{name}</a>
            </Link>
        </li>
    );
};

export default NavItem;
