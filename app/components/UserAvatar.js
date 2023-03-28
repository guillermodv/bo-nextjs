"use client";
import { Avatar, Grid } from "@nextui-org/react";

export default function UserAvatar() {
  return (
    <Grid.Container gap={2}>
      <Grid>
        <Avatar squared src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </Grid>
      <Grid>
        <Avatar squared text="Junior" />
      </Grid>
    </Grid.Container>
  );
}
