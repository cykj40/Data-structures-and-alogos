const familyTree = {
  name: 'John',
  children: [
    {
      name: 'Chris',
      children: [
        {
          name: 'Sam',
        },
        {
          name: 'Sara',
        },
      ],
    },
    {
      name: 'Matt',
    },
  ],
};

function traverse(tree) {
    // Print the name of the current node
    console.log(tree.name);
    
    // Check if the current node has children and traverse each child node recursively
    if (tree.children && Array.isArray(tree.children)) {
      tree.children.forEach(child => {
        traverse(child);
      });
    }
  }
  
  traverse(familyTree);
