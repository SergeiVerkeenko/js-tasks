// class Node {
//     constructor(sum, items, name) {
//         this.sum = sum;
//         this.items = items;
//         this.name = name;
//     }
// }

// const node12 = new Node(1, [], "node12")
// const node11 = new Node(3, [], "node11")
// const node1 = new Node(5, [node11, node12], "node1")

// const node221 = new Node(10, [], "node221")

// const node23 = new Node(7, [], "node23")
// const node22 = new Node(8, [node221], "node22")
// const node21 = new Node(9, [], "node21")
// const node2 = new Node(5, [node21, node22, node23], "node2")

// const root = new Node(2, [node1, node2], "root")


// function sumNodes(nodes) {
//     let sum = 0;

//     for (const node of nodes) {
//         let sumNode = node.sum
//         if (node.items.length > 0) sumNode += sumNodes(node.items)
//         console.log(`${node.name} ${sumNode}`);
//         sum += sumNode
//     }

//     return sum;
// }
// console.log(sumNodes([root]));

function nja(c) {
    return (a) => {
        return (b) => {
            return a * b * c
        }
    }
}
console.log(nja(3)(4)(5));