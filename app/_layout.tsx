import { MyDrawerContent } from "@/components/MyDrawerContent";
import { Drawer } from "expo-router/drawer";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function () {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={MyDrawerContent} />
    </GestureHandlerRootView>
  );
}
