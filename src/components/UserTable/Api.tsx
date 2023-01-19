import axios from "axios";

const axiosBase = axios.create({
    baseURL: 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1',
    headers: {
        'X-Custom-Header': 'Grace-effiong',
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }
});

type ActiveUserDetails = {
    userName: string;
    accountNumber: string;
    accountBalance: string;
    profile:{
      firstName: string;
      lastName: string;
      address: string;
      avatar: string;
      bvn: string;
      currency: string;
      gender: string;
      phoneNumber: string;
    }
    education:{
      duration: string;
      employmentStatus: string;
      level: string;
      loanRepayment: string;
      sector: string;
      officeEmail: string;
      monthlyIncome: string[];
    }
    socials:{
      facebook: string;
      instagram: string;
      twitter: string;
    }
    guarantor:{
      address: string;
      firstName: string;
      gender: string;
      lastName: string;
      phoneNumber: string;
    }
  }

export { axiosBase, ActiveUserDetails }