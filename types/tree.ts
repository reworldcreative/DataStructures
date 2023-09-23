interface TreeNode {
  value: string;
  children: TreeNode[];
}

const root: TreeNode = {
  value: "Root",
  children: [
    {
      value: "Child 1",
      children: [
        {
          value: "Child 1.1",
          children: [],
        },
        {
          value: "Child 1.2",
          children: [],
        },
      ],
    },
    {
      value: "Child 2",
      children: [],
    },
  ],
};
