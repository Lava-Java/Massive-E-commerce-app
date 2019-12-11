const INITIAL_STATE = {
    sections: [
      {
        title: "Top 8", 
        imageUrl: "https://i.ibb.co/kSXthvj/pexels-photo-1907784.jpg", 
        id: 1,
        linkUrl: 'shop/recommendations'
      },
      {
        title: 'Fantasy',
        imageUrl: "https://i.ibb.co/Qc4SHg7/51d1-Hdwwl-OL.jpg",
        id: 2,
        linkUrl: 'shop/fantasy'
      },
      {
        title: 'Technology',
        imageUrl: 'https://i.ibb.co/NWzLKN4/pexels-photo-824197.jpg',
        id: 3,
        linkUrl: 'shop/technology'
      },
      {
        title: 'Memoirs',
        imageUrl: 'https://i.ibb.co/4t7P4Gv/81-NOij3c-Rv-L.jpg',
        size: 'large',
        id: 4,
        linkUrl: 'shop/memoirs'
      },
      {
        title: 'self-help',
        imageUrl: 'https://i.ibb.co/N9jdsx0/mindfulness-new-social-1200.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/self-help'
      }
    ]
  };

const directoryReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
       default:
           return state;
   }
};

export default directoryReducer;