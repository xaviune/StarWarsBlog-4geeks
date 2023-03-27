const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites: [],
			characterList: [],
			planetList: []
		},
		actions: {
			addfavcharacter: (uid, name) => {
				const store = getStore();
				const newFav = { "type":"character", "uid":uid, "name":name };
				const favorites = [...store.favorites, newFav];
				setStore({ favorites });
			},
			addfavplanet: (uid, name) => {
				const store = getStore();
				const newFav = { "type":"planet", "uid":uid, "name":name };
				const favorites = [...store.favorites, newFav];
				setStore({ favorites });
			},
			removefavcharacter: (uid) => {
				const store = getStore();
				const filteredFavs = store.favorites.filter(fav => !(fav.type === "character" && fav.uid === uid));
				setStore({ favorites: filteredFavs });
			},
			removefavplanet: (uid) => {
				const store = getStore();
				const filteredFavs = store.favorites.filter(fav => !(fav.type === "planet" && fav.uid === uid));
				setStore({ favorites: filteredFavs });
			},
			loadCharacters: async () => {
				const response = await fetch(`https://www.swapi.tech/api/people`);
				const data = await response.json();
				setStore({ characterList: data.results });
			},
			loadPlanets: async () => {
				const response = await fetch(`https://www.swapi.tech/api/planets`);
				const data = await response.json();
				setStore({ planetList: data.results });
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
