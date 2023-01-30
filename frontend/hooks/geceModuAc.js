import { useState } from "react";
import { localStorage } from "./localStorageKullan";
export const useNightMode = (initialValue) {
  const localStored =localStorage("Mode", initialValue)
  console.log("Gece modu degiști");
  return localStored;
};
 