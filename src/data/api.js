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

  postTree(tree) {
    return axios.post(
      this.baseUri + "/trees",
      {
        name: tree.name
      },
      this.getOptions()
    );
  }

  pathBoard(tree) {
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
