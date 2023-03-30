"use client";
import { Avatar, Grid, Text } from "@nextui-org/react";
import styles from "../page.module.css";

export default function UserAvatar({ title = "User" }) {
  return (
    <div className={styles.rightPosition}>
      <Grid.Container gap={2}>
        <Grid>
          <Avatar
            squared
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          />
        </Grid>
        <Grid>
          <Avatar squared text="Junior" />
        </Grid>
      </Grid.Container>
    </div>
  );
}
