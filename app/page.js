"use client";
import Image from "next/image";
import styles from "./page.module.css";
import UserTable from "./UserTable";
import users from "./services/users";
import UserAvatar from "./components/UserAvatar";
import { Button, Text, Input, Row, Checkbox } from "@nextui-org/react";

import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      primary: "#4ADE7B",
      secondary: "#F9CB80",
      error: "#FCC5D8",
    },
  },
});

const closeHandler = () => {
  setVisible(false);
  console.log("closed");
};

const Home = () => {
  return (
    <>
      <NextUIProvider theme={theme}>
        <main className={styles.main}>
          <div className={styles.rightPosition}>
            <UserAvatar />
          </div>
          <div className={styles.leftPosition}>
            <Text size={16} weight="bold">
              Users
            </Text>
          </div>
          <div className={styles.rightPosition}>
            <Input clearable underlined Placeholder="Search name" />
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
              <Image
                src="/thirteen.svg"
                alt="13"
                width={40}
                height={31}
                priority
              />
            </div>
          </div>
          <UserTable users={users} />
          <div className={styles.rightPosition}>
            <Button
              size="sm"
              auto
              shadow
              color="secondary"
              onPress={() => null}
            >
              Create User
            </Button>
          </div>
        </main>
      </NextUIProvider>
    </>
  );
};

export default Home;
