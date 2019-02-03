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
      return tree;
    });
  }

  async getTree(_id) {
    let response;

    // Tree name
    response = await axios.get(this.baseUri + "/trees/" + _id, this.getOptions);
    const tree = response.data;

    // People
    response = await axios.get(
      this.baseUri + "/people?tree=" + _id,
      this.getOptions
    );
    const people = response.data.reduce(function(acc, cur, i) {
      acc[cur._id] = cur;
      return acc;
    }, {});

    // Families
    response = await axios.get(
      this.baseUri + "/families?tree=" + _id,
      this.getOptions
    );
    const families = response.data.reduce(function(acc, cur, i) {
      acc[cur._id] = cur;
      return acc;
    }, {});

    return { tree, people, families };
  }

  postTree(tree) {
    return axios.post(this.baseUri + "/trees", { ...tree }, this.getOptions());
  }

  postFamily(family) {
    return axios.post(
      this.baseUri + "/families",
      { ...family },
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

  patchPerson(person) {
    return axios.patch(
      this.baseUri + "/people/" + person.id,
      { ...person },
      this.getOptions()
    );
  }

  patchFamily(family) {
    return axios.patch(
      this.baseUri + "/families/" + family.id,
      { ...family },
      this.getOptions()
    );
  }

  deleteTree(treeId) {
    return axios.delete(this.baseUri + "/trees/" + treeId, this.getOptions());
  }
}

const api = new Api();
export default api;
