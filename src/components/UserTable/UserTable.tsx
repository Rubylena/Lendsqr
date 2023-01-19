import React, { useState } from "react";
import "./userTable.scss";
import { axiosBase } from "./Api";
import { useEffect } from "react";
import ViewUser from "./ViewUser";
import FIlterTable from "./FIlterTable";

const UserTable = () => {
  const [usersStored, setUsersStored] = useState<GetUsersResponse>([]);

  type User = {
    orgName: string;
    createdAt: string;
    userName: string;
    email: string;
    phoneNumber: string;
    id?: string;
  };

  type GetUsersResponse = {
    map(
      arg0: (
        item: {
          orgName: string;
          createdAt: string;
          userName: string;
          email: string;
          phoneNumber: string;
        },
        index: number
      ) => JSX.Element
    ): React.ReactNode;
    data: User[];
  };


  async function getUser() {
    try {
      const response = await axiosBase.get<GetUsersResponse>("/users");
      localStorage.setItem('users', JSON.stringify(response.data));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('users')!);
    if (items) {
     setUsersStored(items);
    }
  }, []);

  const headingData = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
  ];

  const customDate = (ele: string) => {
    const date = new Date(ele).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const time = new Date(ele).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return date + " " + time;
  };

  return (
    <table className="userTable">
      <thead className="userTable-head">
        <tr>
          {headingData.map((item, index) => (
            <th key={index}>
              {item}
              <FIlterTable />
            </th>
          ))}
          
        </tr>
      </thead>
      <tbody className="userTable-body">
        {usersStored.map((item: User, index: number) => (
          <tr key={index}>
            <td>{item.orgName} </td>
            <td>{item.userName}</td>
            <td>{item.email}</td>
            <td>{item.phoneNumber}</td>
            <td>{customDate(item.createdAt)}</td>
            <td>
              <p className="activeOpt">Active</p>
            </td>
            {/* <td>
                        <p className={`${item.status == 'Blacklisted' ? 'blacklist'
                        :item.status === 'Pending' ? 'pending' 
                        :item.status === 'Active' ? 'activeOpt' : 'inactive' }`}>
                            {item.status}
                        </p>
                    </td> */}
            <td>
              <ViewUser id={item.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
