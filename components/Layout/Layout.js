import { Header } from "../Header";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  <>
    <Header />
    {children}
  </>;
};

export default Layout;
