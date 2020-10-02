import styled from "./styles.module.scss";

export default function Layout({ children }) {
  return <div className={styled.container}>{children}</div>;
}
