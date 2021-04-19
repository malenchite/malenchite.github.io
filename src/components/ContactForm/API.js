import axios from "axios";

const contactURL = "https://malenchite-contact.herokuapp.com/contact";

function submitForm(data) {
  return axios.post(contactURL, data);
}

const API = {
  submitForm
};

export default API;