import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { Link, useRouter } from "expo-router";
import { Button } from "react-native";
import { Text } from "./Themed";
import Buttons from "./Buttons";

export function MyDrawerContent({
  descriptors,
  state,
  ...rest
}: DrawerContentComponentProps) {
  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;

  const { drawerContentStyle, drawerContentContainerStyle } = focusedOptions;

  return (
    <>
      <Text>useRouter:</Text>
      <Buttons />
      <Text>Links:</Text>
      <Link href={"/boards"}>Link to /boards</Link>
      <Link href={"/groups"}>Link to /groups</Link>
      <Link href={"/"}>Link to /</Link>
      <DrawerContentScrollView
        {...rest}
        contentContainerStyle={drawerContentContainerStyle}
        style={drawerContentStyle}
      >
        <DrawerItemList descriptors={descriptors} state={state} {...rest} />
      </DrawerContentScrollView>
    </>
  );
}
