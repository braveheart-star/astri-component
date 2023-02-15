import { useState } from "react";
export interface TreeNode {
  [key: string]: any; // type for unknown keys.
  children?: TreeNode[]; // type for a known property.
}
interface TreeNodeProps extends TreeNode {
  autoExpandParent?: boolean;
  onExpand?: (e: React.Key[]) => void;
}

export interface TreeComponentTypes {
  treeData: TreeNode[];
  autoExpandParent?: boolean;
  onExpand?: (e: React.Key[]) => void;
  // expandedKeys: React.Key[];
  // checkedKeys: React.Key[];
  // onSelect: (e: React.Key[], i: any) => void;
  // selectedKeys: React.Key[];
}

export const Tree = (props: TreeComponentTypes) => {
  const { treeData } = props;
  return (
    <ul className="d-flex d-tree-container flex-column">
      {treeData &&
        treeData.map((tree) => (
          <TreeNode
            key={tree.key}
            node={tree}
            onExpand={props.onExpand}
            autoExpandParent={props.autoExpandParent}
          />
        ))}
    </ul>
  );
};

const TreeNode = (props: TreeNodeProps) => {
  const { node } = props;
  const [childVisible, setChildVisibility] = useState(props.autoExpandParent);

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
          <Tree
            treeData={node.children}
            autoExpandParent={props.autoExpandParent}
          />
        </ul>
      )}
    </li>
  );
};
