import api from './api';

export async function getToken() {
    try {
      const response = await api.post('/users',{
       
          "email":"lucas@gmail.com",
          "password":"lulululu"
    
      });
      const {data}  = response

      return (data.session.token);

    } catch (error) {
      
      return(error);
    }
}

