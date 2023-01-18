// const axios = require('axios');
import axios from "axios";
// import { useEffect, useState } from 'react';

// type User = {
//     orgName: string;
//     email: string;
//     username: string;
// };
  
// type GetUsersResponse = {
//     data: User[];
// };

// const [users, SetUsers] = useState({})

const axiosBase = axios.create({
    baseURL: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1',
    headers: {
        'X-Custom-Header': 'Grace-effiong',
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

// async function getUser() {
//     try {
//       const response = await axiosBase.get<GetUsersResponse>('/users/2');
//       console.log(response.data);
//       SetUsers(response.data)
//       return users
//     //   console.log(users)
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     getUser()
//   }, [])

export { axiosBase }

// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     always executed
//   });