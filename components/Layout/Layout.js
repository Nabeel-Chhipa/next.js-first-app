import {Header} from "../Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return <>
    <Header />
    {children}
  </>;
};

export default Layout;
