import axios from "axios";

class Api {
  baseUri = "http://localhost:8001";

  getHeaders = () => {
    const headers = {
      "Content-Type": "application/json"
    };
    const token = localStorage.getItem("token");
    if (token) {
      headers.Authorization = "Bearer " + token;
    }
    return headers;
  };

  getOptions = () => {
    return {
      mode: "no-cors",
      headers: this.getHeaders()
    };
  };

  async indexTrees() {
    const response = await axios.get(
      this.baseUri + "/trees",
      this.getOptions()
    );
    return response.data.map(tree => {
      tree.id = tree._id;
      delete tree._id;
      return tree;
    });
  }

  async getTree(treeId) {
    let response;

    // Tree name
    response = await axios.get(
      this.baseUri + "/trees/" + treeId,
      this.getOptions
    );
    const tree = response.data;
    tree.id = tree._id;
    delete tree._id;

    // People
    response = await axios.get(
      this.baseUri + "/people?treeId=" + treeId,
      this.getOptions
    );
    const people = response.data.reduce(function(acc, cur, i) {
      cur.id = cur._id;
      delete cur._id;
      acc[cur.id] = cur;
      return acc;
    }, {});

    // Families
    response = await axios.get(
      this.baseUri + "/families?treeId=" + treeId,
      this.getOptions
    );
    const families = response.data.reduce(function(acc, cur, i) {
      cur.id = cur._id;
      delete cur._id;
      acc[cur.id] = cur;
      return acc;
    }, {});

    return { tree, people, families };
  }

  postTree(tree) {
    return axios.post(
      this.baseUri + "/trees",
      {
        name: tree.name
      },
      this.getOptions()
    );
  }

  patchTree(tree) {
    return axios.patch(
      this.baseUri + "/trees/" + tree.id,
      {
        name: tree.name
      },
      this.getOptions()
    );
  }

  deleteTree(treeId) {
    return axios.delete(this.baseUri + "/trees/" + treeId, this.getOptions());
  }
}

const api = new Api();
export default api;
