import React, { useState } from "react";
import { treeData } from "@/utils/data";
import { Tree } from "@/components/MyTree";
import { Layout } from "@/components/Layout";
import Example from "@/components/Example";
import Link from "next/link";

export default function () {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([
    "0-0-0",
    "0-0-1",
  ]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);

  const onExpand = (expandedKeysValue: React.Key[]) => {
    console.log("onExpand", expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
  };

  const onSelect = (selectedKeysValue: React.Key[], info: any) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <Layout>
      <div className="flex space-x-4 ">
        <i className="text-blue-900 fill-current ri-arrow-go-back-fill"></i>
        <Link href="/" className="text-blue-700 underline ">
          Go Back
        </Link>
      </div>

      <p className="mb-8 text-3xl text-center ">Tree Component</p>
      <Example
        type="components"
        name="Tree"
        jsx={`
          const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([
            "0-0-0",
            "0-0-1",
          ]);
          const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
        
          const onExpand = (expandedKeysValue: React.Key[]) => {
            console.log("onExpand", expandedKeysValue);
            // if not set autoExpandParent to false, if children expanded, parent can not collapse.
            // or, you can remove all expanded children keys.
            setExpandedKeys(expandedKeysValue);
          };
        
          const onSelect = (selectedKeysValue: React.Key[], info: any) => {
            console.log("onSelect", info);
            setSelectedKeys(selectedKeysValue);
          };

          return  <Tree
                    treeData={treeData}
                    onExpand={onExpand}
                    expandedKeys={expandedKeys}
                    onSelect={onSelect}
                    selectedKeys={selectedKeys} />
        />
        
       `}
      >
        <Tree
          treeData={treeData}
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          onSelect={onSelect}
          selectedKeys={selectedKeys}
        />
      </Example>
    </Layout>
  );
}
