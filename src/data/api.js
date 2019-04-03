import axios from "axios";

class Api {
  baseUri = process.env.REACT_APP_ORIGIN_API;

  getHeaders = (contentType = null) => {
    const headers = {
      "Content-Type": contentType || "application/json"
    };
    const token = localStorage.getItem("token");
    if (token) {
      headers.Authorization = "Bearer " + token;
    }
    return headers;
  };

  getOptions = (contentType = null) => {
    return {
      mode: "no-cors",
      headers: this.getHeaders(contentType)
    };
  };

  signup(data) {
    return axios.post(this.baseUri + "/user/signup", data, this.getOptions());
  }

  verify(data) {
    return axios.post(this.baseUri + "/user/verify", data, this.getOptions());
  }

  login(data) {
    return axios.post(this.baseUri + "/user/login", data, this.getOptions());
  }

  async indexMedia(personId) {
    const response = await axios.get(
      this.baseUri + "/media?personId=" + personId,
      this.getOptions()
    );
    return response.data;
  }

  postMedia(media) {
    return axios.post(this.baseUri + "/media", { ...media }, this.getOptions());
  }

  async search(query) {
    const response = await axios.get(
      this.baseUri + "/birth-indexes",
      { params: query },
      this.getOptions()
    );

    if (response.data && response.data.error) {
      return [];
    }

    return response.data;
  }

  async indexTrees() {
    const response = await axios.get(
      this.baseUri + "/trees",
      this.getOptions()
    );
    return response.data;
  }

  async getTree(_id) {
    let response;

    // Tree name
    response = await axios.get(
      this.baseUri + "/trees/" + _id,
      this.getOptions()
    );
    const tree = response.data;

    // People
    response = await axios.get(
      this.baseUri + "/people?tree=" + _id,
      this.getOptions()
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
    return axios.patch(
      this.baseUri + "/families/" + family._id,
      { ...family },
      this.getOptions()
    );
  }

  deleteTree(_id) {
    return axios.delete(this.baseUri + "/trees/" + _id, this.getOptions());
  }

  deleteFamily(_id) {
    return axios.delete(this.baseUri + "/families/" + _id, this.getOptions());
  }

  deletePerson(_id) {
    return axios.delete(this.baseUri + "/people/" + _id, this.getOptions());
  }

  exportTree(treeId) {
    return axios.get(
      this.baseUri + "/tree/export/" + treeId,
      this.getOptions()
    );
  }
}

const api = new Api();
export default api;
