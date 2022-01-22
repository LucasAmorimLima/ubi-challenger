import api from './api';

export async function getPhoto(query:string) {
    try {
      const response = await api.get('/search/photos',{
        params: {
            client_id: "o06I28RKNUu5Fe5QuX4YNV3u6UGI3ikDgA5YQnPGCMk",
            query: query,
            order_by: "relevant",
            page: "1",
            per_page : "1"
        }
      });
      const {data}  = response

      return data.results[0].urls.regular

    } catch (error) {
      return error
    }
}

