import React from "react";
import { Button, StyleSheet } from "react-native";
import { View } from "./Themed";
import { useRouter } from "expo-router";

export default function Buttons() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button onPress={() => router.push("/boards")} title="/boards" />
      <Button onPress={() => router.push("/groups")} title="/groups" />
      <Button onPress={() => router.push("/")} title="/" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
});
