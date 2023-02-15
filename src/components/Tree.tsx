import { useState } from "react";
export interface TreeNode {
  [key: string]: any; // type for unknown keys.
  children?: TreeNode[]; // type for a known property.
}
interface TreeNodeProps extends TreeNode {
  autoExpandParent?: boolean;
}

export interface TreeComponentTypes {
  treeData: TreeNode[];
  autoExpandParent?: boolean;
  // expandedKeys: React.Key[];
  // onExpand: (e: React.Key[]) => void;
  // checkedKeys: React.Key[];
  // onSelect: (e: React.Key[], i: any) => void;
  // selectedKeys: React.Key[];
}
export const TreeComponent = (props: TreeComponentTypes) => {
  return (
    <div>
      <Tree treeData={props.treeData} autoExpandParent={true} />
    </div>
  );
};
export const Tree = (props: {
  treeData: TreeNode[];
  autoExpandParent?: boolean;
}) => {
  const { treeData } = props;
  return (
    <ul className="d-flex d-tree-container flex-column">
      {treeData.map((tree) => (
        <TreeNode
          key={tree.key}
          node={tree}
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
