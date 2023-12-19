import { Userurl } from "./Config";


export const createuser = async (userData) => {
  const response = await fetch(
    `${Userurl}/users`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    }
  );
  const user = await response.json();
  return user;
}

export const getuser = async () => {
  const response = await fetch(
    `${Userurl}/users`
  );
  const users = await response.json();
  return users;
}

export const getusers = async (userId) => {
  const response = await fetch(
    `${Userurl}/users/${userId}`
  );
  const user = await response.json();
  return user;
}

export const updateuser = async (userId, userData) => {
  const response = await fetch(
    `${Userurl}/users/${userId}`,
    {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' }
    }
  );
  const user = await response.json();
  return user;
}

export const deleteuser = async (userId) => {
  const response = await fetch(
    `${Userurl}/users/${userId}`,
    {
      method: 'DELETE'
    }
  );
  const user = await response.json();
  return user;
}