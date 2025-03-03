"use client";
import React from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
const DetailsTabList = () => {
  return (
    <TabsList className="grid w-full grid-cols-3 mb-6">
      <TabsTrigger
        value="details"
        onClick={() => {
          document.cookie = "tab_state=details";
        }}
      >
        Details
      </TabsTrigger>
      <TabsTrigger
        value="history"
        onClick={() => {
          document.cookie = "tab_state=history";
        }}
      >
        Password History
      </TabsTrigger>
      <TabsTrigger
        value="security"
        onClick={() => {
          document.cookie = "tab_state=security";
        }}
      >
        Security
      </TabsTrigger>
    </TabsList>
  );
};

export default DetailsTabList;
