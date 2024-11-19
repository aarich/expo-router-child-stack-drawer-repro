import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { Link, useRouter } from "expo-router";
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
      <Link href="/stack1">Link to /stack1</Link>
      {/* the following two ought to be identical */}
      <Link href="/stack2">Link to /stack2</Link>
      <Link href="/(auth)/stack2">Link to /(auth)/stack2</Link>
      <Link href="/">Link to /</Link>
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
