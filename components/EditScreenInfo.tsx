import React from "react";
import { StyleSheet } from "react-native";

import { MonoText } from "./StyledText";
import { View } from "./Themed";

import { Href, usePathname, useRouter } from "expo-router";
import Buttons from "./Buttons";

export default function EditScreenInfo({ path }: { path: string }) {
  const pathName = usePathname();
  const router = useRouter();

  const routes: Href[] = [
    "/",
    "/boards",
    "/groups",
    { pathname: "/(auth)/(stack)/groups" },
  ];
  const buttons: { label: string; onPress: VoidFunction }[] = [];
  routes.forEach((route) => {
    buttons.push({
      label: "navigate to " + route,
      onPress: () => router.navigate(route),
    });
    buttons.push({
      label: "push to " + route,
      onPress: () => router.push(route),
    });
    buttons.push({
      label: "replace to " + route,
      onPress: () => router.replace(route),
    });
  });

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)"
        >
          <MonoText>File Path: {path}</MonoText>
          <MonoText>Path name: {pathName}</MonoText>
        </View>
      </View>
      <Buttons />
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
});
