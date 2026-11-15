"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => { };
const getCurrentYear = () => String(new Date().getFullYear());
const getServerYear = () => "";

export function CurrentYear() {
  return useSyncExternalStore(subscribe, getCurrentYear, getServerYear);
}