import React from "react";
import { View, Platform } from "react-native";
import { Image } from "expo-image";
import { TabButton } from "@/components/TabButton";
import { TabTrigger, TabList, TabSlot, Tabs } from "expo-router/ui";
import classNames from "classnames";
import { useSegments } from "expo-router";
import { findIndex } from "lodash";

export default function TabLayout() {
  const segments = useSegments();
  const tabRouteIndex = findIndex(
    segments,
    // @ts-ignore
    (s) => s === "exhibits"
  );

  // on a tab route but it's not the last route means we're on a tab subroute
  // @ts-ignore
  const hideTabs =
    tabRouteIndex !== -1 &&
    tabRouteIndex !== segments.length - 1 &&
    Platform.OS !== "web";

  const tabVisual = (
    <View
      className={classNames(
        "flex-row justify-between",
        "py-3 sm:py-6",
        "px-6 sm:px-8",
        "mx-2 sm:mx-0",
        "sm:justify-end sm:gap-x-4 sm:shadow-sm",
        "bg-white",
        "bottom-safe-offset-2 sm:bottom-safe-offset-0", // keep the tabs above safe ares
        "rounded-full sm:rounded-none", // round the corners
        "absolute right-0 left-0 sm:relative", // position above content
        "shadow-sm sm:shadow-none" // yum, shadows!
      )}
    >
      <TabTrigger name="index" asChild>
        <TabButton icon="museum">Home</TabButton>
      </TabTrigger>
      <TabTrigger name="exhibits" asChild reset="always">
        <TabButton icon="palette">Exhibits</TabButton>
      </TabTrigger>
      <TabTrigger name="visit" asChild>
        <TabButton icon="map">Visit</TabButton>
      </TabTrigger>
      <TabTrigger name="profile" asChild>
        <TabButton icon="person">Profile</TabButton>
      </TabTrigger>
    </View>
  );

  const tabList = (
    <TabList>
      <TabTrigger name="index" href="/" asChild />
      <TabTrigger name="exhibits" asChild href="/exhibits" reset="always" />
      <TabTrigger name="visit" asChild href="/visit" />
      <TabTrigger name="profile" asChild href="/profile" />
    </TabList>
  );

  return (
    <View className="flex-1">
      <Tabs className="flex-1 sm:flex-col-reverse">
        <View className="flex-1">
          <TabSlot />
        </View>
        {tabList}
        {!hideTabs && tabVisual}
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
  );
}
