import axios from "axios";
const deleteApi = async (params, end_url, token) => {
    const config = {
        data: params,
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
    };
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return await axios.delete("http://27.96.134.100:8080" + end_url, config);
};

export default deleteApi;
