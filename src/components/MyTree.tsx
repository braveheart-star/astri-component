import React from "react";
export interface TreeNode {
  [key: string]: any; // type for unknown keys.
  children?: TreeNode[]; // type for a known property.
}
export interface TreeComponentTypes {
  treeData: TreeNode[];
  onExpand?: (e: React.Key[]) => void;
  expandedKeys: React.Key[];
  onSelect: (e: React.Key[], i: any) => void;
  selectedKeys: React.Key[];
}

export const Tree = (props: TreeComponentTypes) => {
  const renderNode = (node: any) => {
    const isExpanded = props.expandedKeys.includes(node.key);
    const isNodeSelected = props.selectedKeys.includes(node.key);

    return (
      <div className={`ml-4`} key={node.key}>
        <span
          onClick={() =>
            props.onSelect([node.key], {
              event: "select",
              selected: true,
              node,
              selectedNodes: [node],
              nativeEvent: new PointerEvent("select"),
            })
          }
          className="flex ml-4"
        >
          <div
            className={`w-5 ${isExpanded ? "rotate-90 " : "rotate-0"}`}
            onClick={() =>
              props.onExpand &&
              props.onExpand(
                props.expandedKeys.includes(node.key)
                  ? props.expandedKeys.filter((k: any) => k !== node.key)
                  : [...props.expandedKeys, node.key]
              )
            }
          >
            {node.children && (
              <i className="cursor-pointer ri-arrow-right-s-fill"></i>
            )}
          </div>

          <span
            className={`ml-2 px-1 ${
              isNodeSelected && " bg-blue-50  rounded-sm"
            }`}
          >
            {node.title}
          </span>
        </span>
        {isExpanded && node.children && node.children.map(renderNode)}
      </div>
    );
  };

  return <div>{props.treeData.map(renderNode)}</div>;
};
