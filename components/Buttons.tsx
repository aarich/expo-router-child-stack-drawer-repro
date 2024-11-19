import React from "react";
import { Button, StyleSheet } from "react-native";
import { View } from "./Themed";
import { useRouter } from "expo-router";

export default function Buttons() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button onPress={() => router.push("/stack1")} title="/stack1" />
      {/* the following two ought to be identical */}
      <Button
        onPress={() => router.push("/(auth)/stack2")}
        title="/(auth)/stack2"
      />
      <Button onPress={() => router.push("/stack2")} title="/stack2" />
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
