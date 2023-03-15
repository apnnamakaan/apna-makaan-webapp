const base_url: string = 'http://127.0.0.1:5000';
const ws_url: string = 'http://127.0.0.1:3000';

export const Apis: any = {
  ws: ws_url,
  auth: {
    login: base_url + '/auth/login',
    signup: base_url + '/auth/signup',
    verify: base_url + '/auth/verify',
  },
  user: {
    getUserByEmail: base_url + '/user/?email=',
    getUserByToken: base_url + '/user/token/',
    updateUserByEmail: base_url + '/user/?email=',
  },
  property: {
    getPropertyById: base_url + '/property/?id=',
    getPropertiesByFilter: base_url + '/property/search/',
    getAllProperties: base_url + '/property/search/all/',
    uploadPropertie: base_url + '/property/new/',
    getPropertiesByEmail: base_url + '/property/all/?email=',
    removePropertyById: base_url + '/property/delete/?id=',
    deactivePropertyById: base_url + '/property/deactive/?id=',
    addToFavorite:  base_url + '/property/favourite',
    removeFavorite:base_url + '/property/favourite',
    getFavorite:base_url + '/property/favourite?email='
  },
  ml: {
    predictPrice: base_url + '/ml/predict',
  },
  image: {
    path: base_url + '/cloud/image/',
    uploadImage: base_url + '/image/upload/',
  },
  chat: {
    createRoom: base_url + '/chat/room/create',
    getRoomsByEmail: base_url + '/chat/room/',
    sendMessage: base_url + '/chat/message/send',
    getMessagesByRoomId: base_url + '/chat/message/',
  },
  chatV2: {
    getRoomsByUser: base_url + '/chat/api/room/user/',
    getRoomId: base_url + '/chat/api/room/',
    createRoom: base_url + '/chat/api/room',
    sendMessage: base_url + '/chat/api/message',
  },
};
