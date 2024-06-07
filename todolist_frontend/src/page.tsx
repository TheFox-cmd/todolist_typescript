import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AuthRootState } from './components/store';
import Todolist from './components/todos/todolist';
import Login from './components/login/login';

const Page: React.FC = () => {
  const token = useSelector((state: AuthRootState) => state.auth.token)

  return (
    <>
      {token ? <Todolist /> : <Login />}
    </>
  );
};

export default Page;
