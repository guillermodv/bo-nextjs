import Image from "next/image";
import styles from "./page.module.css";
import UserTable from "./UserTable";
import users from "./services/users";
import UserAvatar from "./components/UserAvatar";

const Home = () => (
  <main className={styles.main}>
    <div className={styles.userDiv}>
      <UserAvatar />
    </div>
    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <div className={styles.thirteen}>
        <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
      </div>
    </div>
    <UserTable users={users} />
  </main>
);

export default Home;
