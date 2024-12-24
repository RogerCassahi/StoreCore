import styles from "./styles.module.scss";
import { useState } from "react";
import { Signin } from "../../templates/initial/signin";
import { Signup } from "../../templates/initial/signup";

export const InitialPage = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <main className={styles["initial"]}>
      <section className={styles["initial_section"]}>
        {showLogin ? (
          <Signin setShowLogin={setShowLogin} />
        ) : (
          <Signup setShowLogin={setShowLogin} />
        )}
      </section>
    </main>
  );
};
