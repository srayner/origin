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

  async getTreeForPerson(_id) {
    const response = await axios.get(
      this.baseUri + "/people/" + _id,
      this.getOptions()
    );
    const person = response.data;
    return this.getTree(person.tree);
  }

  postTree(tree) {
    return axios.post(this.baseUri + "/trees", { ...tree }, this.getOptions());
  }

  postPerson(person) {
    return axios.post(
      this.baseUri + "/people",
      { ...person },
      this.getOptions()
    );
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
      this.baseUri + "/trees/" + tree._id,
      {
        name: tree.name
      },
      this.getOptions()
    );
  }

  patchPerson(person) {
    return axios.patch(
      this.baseUri + "/people/" + person._id,
      { ...person },
      this.getOptions()
    );
  }

  patchFamily(family) {
    console.log(family);
    return axios.patch(
      this.baseUri + "/families/" + family._id,
      { ...family },
      this.getOptions()
    );
  }

  deleteTree(_id) {
    return axios.delete(this.baseUri + "/trees/" + _id, this.getOptions());
  }

  deletePerson(_id) {
    return axios.delete(this.baseUri + "/people/" + _id, this.getOptions());
  }
}

const api = new Api();
export default api;
