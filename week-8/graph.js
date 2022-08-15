class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(v) {
    if (!this.adjacencyList.has(v))
      this.adjacencyList.set(v, [])
    else
      throw "Vertex Already Present"
  }

  addEdge(v1, v2) {
    if (this.adjacencyList.has(v1) && this.adjacencyList.has(v2)) {
      let v1EdgeList = this.adjacencyList.get(v1)

      if (v1EdgeList.includes(v2)) {
        throw 'Edge Already Present'
      } else {
        v1EdgeList.push(v2)
      }
      this.adjacencyList.set(v1, v1EdgeList)
    } else {
      throw "Vertex Not Present"
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList.has(v1) && this.adjacencyList.has(v2)) {
      let edgeList = this.adjacencyList.get(v1)
      edgeList = edgeList.filter((e) => (e !== v2))
      this.adjacencyList.set(v1, edgeList)
    } else {
      throw "Vertex Not Present"
    }
  }

  removeVertex(v) {
    if (this.adjacencyList.has(v)) {
      for (let vetrex of [...this.adjacencyList.keys()])
        this.removeEdge(vetrex, v)
      this.adjacencyList.delete(v)
    } else {
      throw "Vertex Not Present"
    }
  }

  /**
   * BFS is same as levelorder traversal in BST
   * 
   * To find no. of not connected graph set:- 
   * after 1st BFS check any unvisited vertex then start bfs from there and repeate no. bfs call is = no. not connected graph
   * 
   * We can also find the sortest path in graph using bfs for undirected graph. stop when reached the destination.
   */

  bfc(src, dest) {
    if (this.adjacencyList.has(src) && (dest ? this.adjacencyList.has(dest) : true)) {
      let visted = {}
      let predecessor = {}
      let queue = [src]
      for (let v of [...this.adjacencyList.keys()]) {
        visted[v] = false;
        predecessor[v] = null;
      }
      while (queue.length) {
        let curr = queue.shift()
        let currList = this.adjacencyList.get(curr)
        visted[curr] = true
        if (currList && currList.length) {
          for (let v of currList) {
            if (!visted[v]) {
              queue.push(v)
              predecessor[v] = curr
              visted[v] = true
              // check if reached destination
              if (v === dest)
                break;
            }
          }
        }
      }
      // visual representation of path if exisit
      let path = ''
      if (visted[dest] && predecessor[dest]) {
        let pred = dest
        while (pred) {
          path = path ? String(pred) + ' -> ' + path : String(pred)
          pred = predecessor[pred]
        }
      } else {
        path = dest ? 'No path Found.' : null
      }

      return { visted, predecessor, path };
    } else {
      throw "Vertex Not Present"
    }
  }

  /**
   * DFS
   */

  dfs(src) {
    if (this.adjacencyList.has(src)) {

      let visted = {}
      for (let v of [...this.adjacencyList.keys()]) {
        visted[v] = false;
      }
      let path = ''
      function dfsHelp(v) {
        let currList = this.adjacencyList.get(v)
        for (let vertex of currList) {
          if (!visted[vertex]) {
            path = path ? path + ` -> ${String(vertex)}` : String(vertex)
            visted[vertex] = true
            dfsHelp.call(this, vertex)
          }
        }
      }
      visted[src] = true
      path = String(src)
      dfsHelp.call(this, src)
      return { visted, path }
    } else {
      throw "Vertex Not Present"
    }
  }

  log() {
    if (this.adjacencyList.size) {
      console.log(this.adjacencyList)
    } else {
      throw "Null Graph"
    }
  }
}

let graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')
graph.addVertex('H')
graph.addVertex('I')
graph.log()

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')

graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('B', 'A')

graph.addEdge('C', 'A')
graph.addEdge('C', 'G')
graph.addEdge('C', 'D')

graph.addEdge('D', 'A')
graph.addEdge('D', 'C')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')

graph.addEdge('E', 'B')
graph.addEdge('E', 'I')
graph.addEdge('E', 'F')

graph.addEdge('F', 'B')

graph.addEdge('G', 'C')
graph.addEdge('G', 'D')

graph.addEdge('H', 'D')

graph.addEdge('I', 'E')

graph.log()

// graph.removeEdge('I', 'E')

// graph.log()

// graph.removeVertex('A')

// graph.log()

// console.log(graph.bfc('A', 'E'))

console.log(graph.dfs('A'))










