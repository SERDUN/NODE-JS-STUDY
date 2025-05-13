// Homework 4
// Complete the TreeNode class to allow creating children.
// console.log(root) should output the following structure:
// const a = {
//   "value": "Root",
//   "children": [
//     {
//       "value": "Child 1",
//       "children": [
//         { "value": "Grandchild 1.1", "children": [] },
//         { "value": "Grandchild 1.2", "children": [] }
//       ]
//     },
//     {
//       "value": "Child 2",
//       "children": [
//         { "value": "Grandchild 2.1", "children": [] }
//       ]
//     }
//   ]
// };

// Implements the task's technical requirements.

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(childValue) {
        const childNode = new TreeNode(childValue);
        this.children.push(childNode);
        return childNode;
    }
}

const root = new TreeNode('Root');

const child1 = root.addChild('Child 1');
const child2 = root.addChild('Child 2');
const child3 = root.addChild('Child 3');

child1.addChild('Grandchild 1.1');
child1.addChild('Grandchild 1.2');
child1.addChild('Grandchild 1.3');
child2.addChild('Grandchild 2.1');

console.log(root);

// console.log(JSON.stringify(root, null, 2));