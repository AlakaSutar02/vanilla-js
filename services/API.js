const API = {
  // url: "https://firtman.github.io/coffeemasters/api/menu.json",
  url: new URL("../data/menu.json", import.meta.url).href,
  fetchMenu: async () => {
    const result = await fetch(API.url);
    return await result.json();
  },
};

export default API;
