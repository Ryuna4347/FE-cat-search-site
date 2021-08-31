const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";

const fetchFunc = async (URL) => {
  try {
    const fetchResult = await fetch(URL);
    //const fetchResult = {status:400};
    if (fetchResult.status < 300) return fetchResult.json();
    else if (fetchResult.status < 400) throw new Error("Redirection Error");
    else if (fetchResult.status < 500) throw new Error("Client Error");
    else if (fetchResult.status < 600) throw new Error("Server Error");
  } catch (err) {
    console.error(err);
    return { data: null };
  }
};

const api = {
  fetchCats: async (keyword) => {
    return await fetchFunc(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  fetchCatDetail: async (catId) => {
    return await fetchFunc(`${API_ENDPOINT}/api/cats/${catId}`);
  },
  fetchRandomCat: async () => {
    return await fetchFunc(`${API_ENDPOINT}/api/cats/random50`);
  },
};

export default api;
