import axios from "axios";

const SERVER_URL = "https://ppfe-7ftih254fq-uc.a.run.app";

const KomodorAxios = (method, url, data) => {
  return axios({
    method,
    url: `${SERVER_URL}${url}`,
    data,
    headers: { "Content-Type": "application/json" },
  });
};

export default KomodorAxios;
