import React from "react";
import { Layout } from "@/components/Layout";
import { TimeLine } from "@/components/MyTimeLine";
import { timeLineData } from "@/utils/data";
import Example from "@/components/Example";
import Link from "next/link";

export default function () {
  return (
    <Layout>
      <div className="flex space-x-4 ">
        <i className="text-blue-900 fill-current ri-arrow-go-back-fill"></i>
        <Link href="/" className="text-blue-700 underline ">
          Go Back
        </Link>
      </div>

      <p className="mb-8 text-3xl text-center ">TimeLine Component</p>
      <Example
        type="components"
        name="TimeLine"
        jsx={`<TimeLine items={timeLineData} mode="alternate" />`}
      >
        <TimeLine items={timeLineData} mode="alternate" />
      </Example>
    </Layout>
  );
}
