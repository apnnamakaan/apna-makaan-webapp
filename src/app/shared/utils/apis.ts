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
    getPropertiesByFilter: base_url + '/property/search/',
    getAllProperties: base_url + '/property/search/all/',
    uploadPropertie: base_url + '/property/new/',
    getPropertiesByEmail: base_url + '/property/all/?email=',
    removePropertyById: base_url + '/property/delete/?id=',
  },
  ml: {
    predictPrice: base_url + '/ml/predict',
  },
  image: {
    uploadImage: base_url + '/image/upload/',
  },
};
