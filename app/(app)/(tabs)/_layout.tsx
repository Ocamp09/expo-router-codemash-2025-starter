import { Tabs, TabList, TabSlot, TabTrigger } from "expo-router/ui";
import { TabButton } from "@/components/TabButton";
import classNames from "classnames";
import { View } from "react-native";
import { Image } from "expo-image";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

export default function TabLayout() {
  return (
    <View className="flex-1">
      <Tabs className="flex-1 sm:flex-col-reverse">
        <View className="flex-1">
          <TabSlot />
        </View>
        {tabs}
      </Tabs>
      <View
        className={classNames(
          "hidden sm:inline",
          "absolute left-6 top-5 h-10 w-52"
        )}
      >
        <Image
          source={require("@/assets/images/logo.svg")}
          className="w-full h-full"
        />
      </View>
    </View>
    //   <Tabs
    //     screenOptions={{
    //       sceneStyle: { backgroundColor: colors.white },
    //       headerShown: false,
    //     }}
    //   >
    //     <Tabs.Screen
    //       name="index"
    //       options={{
    //         title: "Home",
    //         tabBarActiveTintColor: customColors.tint,
    //         tabBarIcon: ({ color }) => (
    //           <TabBarIcon type="MaterialIcons" name="museum" color={color} />
    //         ),
    //       }}
    //     />
    //     <Tabs.Screen
    //       name="exhibits"
    //       options={{
    //         title: "Exhibits",
    //         tabBarIcon: ({ color }) => (
    //           <TabBarIcon type="MaterialIcons" name="palette" color={color} />
    //         ),
    //       }}
    //     />
    //     <Tabs.Screen
    //       name="visit"
    //       options={{
    //         title: "Visit",
    //         tabBarIcon: ({ color }) => (
    //           <TabBarIcon type="MaterialIcons" name="map" color={color} />
    //         ),
    //       }}
    //     />
    //     <Tabs.Screen
    //       name="profile"
    //       options={{
    //         title: "Profile",
    //         tabBarIcon: ({ color }) => (
    //           <TabBarIcon type="MaterialIcons" name="person" color={color} />
    //         ),
    //       }}
    //     />
    //   </Tabs>
    // );
  );
}

const tabs = (
  <TabList
    className={classNames(
      "py-3 sm:py-6",
      "px-6 sm:px-8",
      "mx-2 sm:mx-0",
      "bottom-safe-offset-2 sm:bottom-safe-offset-0", // keep the tabs above safe ares
      +"rounded-full sm:rounded-none", // round the corners
      +"absolute right-0 left-0 sm:relative", // position above content
      +"shadow-sm" // yum, shadows!
    )}
  >
    <TabTrigger name="index" href="/" asChild>
      <TabButton icon="museum">Home</TabButton>
    </TabTrigger>
    <TabTrigger name="exhibits" asChild href="/exhibits" reset="always">
      <TabButton icon="palette">Exhibits</TabButton>
    </TabTrigger>
    <TabTrigger name="visit" asChild href="/visit">
      <TabButton icon="map">Visit</TabButton>
    </TabTrigger>
    <TabTrigger name="profile" asChild href="/profile">
      <TabButton icon="person">Profile</TabButton>
    </TabTrigger>
  </TabList>
);
