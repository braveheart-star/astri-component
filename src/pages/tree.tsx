import React, { useState } from "react";
import { treeData } from "@/utils/data";
import { Tree } from "@/components/Tree";
import { Layout } from "@/components/Layout";

export default function () {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([
    "0-0-0",
    "0-0-1",
  ]);
  const [selectedKeys, setSelectedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

  const onExpand = (expandedKeysValue: React.Key[]) => {
    console.log("onExpand", expandedKeysValue);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };

  const onSelect = (selectedKeysValue: React.Key[], info: any) => {
    console.log("onSelect", info);
    setSelectedKeys(selectedKeysValue);
  };

  return (
    <Layout>
      <p className="mb-24 text-3xl text-center ">Tree Component</p>
      <Tree
        treeData={treeData}
        autoExpandParent={autoExpandParent}
        onExpand={onExpand}
        // expandedKeys={expandedKeys}
        // onSelect={onSelect}
        // selectedKeys={selectedKeys}
      />
    </Layout>
  );
}
