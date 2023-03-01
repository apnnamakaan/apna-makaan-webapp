const base_url: string = 'http://localhost:5000';

export const Apis: any = {
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
};
