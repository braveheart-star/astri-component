import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { TimeLine } from "@/components/MyTimeLine";
import { timeLineData } from "@/utils/data";

export default function () {
  return (
    <Layout>
      <p className="mb-24 text-3xl text-center ">TimeLine Component</p>
      <TimeLine items={timeLineData} mode="alternate" />
    </Layout>
  );
}
