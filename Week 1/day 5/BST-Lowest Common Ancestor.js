class Node {
    constructor(value = null) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

    insert(value) {
        if (!this.value) {
            this.value = value;
        }
        else if (value <= this.value) {
            if (this.left) {
                return this.left.insert(value);
            }
            else {
                let leftNode = new Node(value);
                this.left = leftNode;
            }
        }

        else if (value > this.value) {
            if (this.right) {
                return this.right.insert(value);
            }
            else {
                let rightNode = new Node(value);
                this.right = rightNode;
            }
        }
    }

    inOrderTraversal() {

        if (this.left) {
            this.left.inOrderTraversal();

        }
        console.log(this.value)
        if (this.right) {

            this.right.inOrderTraversal();
        }
    }
    preOrderRecursion() {
        console.log(this.value);
        if (this.left) {
            this.left.preOrderRecursion();
        }
        if (this.right) {
            this.right.preOrderRecursion();
        }
    }

}


class Bst {
    constructor() {
        this.root = new Node()
    }

    insert(value) {
        this.root.insert(value);
    }
    inOrderTraversal() {
        this.root.inOrderTraversal();
    }
    preOrderRecursion() {
        this.root.preOrderRecursion();
    }
    height(node = this.root) {
        if (!node) {
            return 0;
        }
        if (this.height(node.left) >= this.height(node.right)) {
            return 1 + this.height(node.left);
        }
        return 1 + this.height(node.right);

    }

    lca(v1, v2, node = this.root) {
        if (!node) {
            return null;    
        }
       
        let temp = node;
        while (temp.value >= v1 && temp.value >= v2 || temp.value < v1 && temp.value < v2) {
            if(temp.value>=v1){
                temp = temp.left;
            }
            else{
                temp =  temp.right;
            }
        }
        return temp;

    }

}