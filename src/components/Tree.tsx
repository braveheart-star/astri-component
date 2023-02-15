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
  const [childVisible, setChildVisibility] = useState(true);

  const hasChild = node.children ? true : false;

  return (
    <li>
      <div className="flex" onClick={(e) => setChildVisibility((v) => !v)}>
        <div className="w-4">
          {hasChild && <i className="ri-arrow-right-s-fill"></i>}
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
