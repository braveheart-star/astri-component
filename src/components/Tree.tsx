import { useState } from "react";
export interface TreeNode {
  [key: string]: any; // type for unknown keys.
  children?: TreeNode[]; // type for a known property.
}

export interface TreeComponentTypes {
  // checkable: boolean;
  // expandedKeys: React.Key[];
  // onExpand: (e: React.Key[]) => void;
  // autoExpandParent: boolean;
  // onCheck: (e: React.Key[]) => void;
  // checkedKeys: React.Key[];
  // onSelect: (e: React.Key[], i: any) => void;
  // selectedKeys: React.Key[];
  treeData: TreeNode[];
}

export const Tree = (props: TreeComponentTypes) => {
  const { treeData } = props;
  return (
    <ul className="d-flex d-tree-container flex-column">
      {treeData.map((tree) => (
        <TreeNode node={tree} />
      ))}
    </ul>
  );
};

const TreeNode = ({ node }: TreeNode) => {
  const [childVisible, setChildVisibility] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <li className="mt-2">
      <div className="flex">
        <div className={`w-5 ${childVisible ? "rotate-90 " : "rotate-0"}`}>
          {hasChild && (
            <i
              className="cursor-pointer ri-arrow-right-s-fill"
              onClick={(e) => setChildVisibility((v) => !v)}
            ></i>
          )}
        </div>
        {node.title}
      </div>

      {hasChild && childVisible && (
        <ul className="ml-4">
          <Tree treeData={node.children} />
        </ul>
      )}
    </li>
  );
};
