import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { TimeLine } from "@/components/MyTimeLine";
import { timeLineData } from "@/utils/data";
import Example from "@/components/Example";
import Link from "next/link";

export default function TimeLinePage() {
  const [mode, setMode] = useState("left");

  return (
    <Layout>
      <div className="flex space-x-4 ">
        <i className="text-blue-900 fill-current ri-arrow-go-back-fill"></i>
        <Link href="/" className="text-blue-700 underline ">
          Go Back
        </Link>
      </div>

      <p className="mb-8 text-3xl text-center ">TimeLine Component</p>
      <div className="flex space-x-3 ">
        {["left", "alternate"].map((item, idx: number) => {
          return (
            <button
              key={idx}
              onClick={() => setMode(item)}
              className={`p-2 px-6 border rounded-md  ${
                mode === item ? "bg-blue-100" : "bg-gray-50 "
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
      <Example
        type="components"
        name="TimeLine"
        jsx={`<TimeLine items={timeLineData} mode="${mode}" />`}
      >
        <TimeLine items={timeLineData} mode={mode} />
      </Example>
    </Layout>
  );
}
