"use client";

import React, { useEffect, useState } from "react";

import type { UserType } from "@/db/user";

type _UserType = UserType & {
  id?: number | string;
};

const User = () => {
  const [list, setList] = useState<_UserType[]>([]);
  const [data, seData] = useState<UserType>({
    name: "",
    email: "",
  });
  const [id, setId] = useState("");

  const getList = async () => {
    const res = await (await fetch("/api")).json();
    setList(res.data);
  };

  const post = async () => {
    const res = await (
      await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
    ).json();

    getList();
  };

  const onDel = async () => {
    const res = await (
      await fetch("/api", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
    ).json();

    getList();
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className=" bg-slate-100 p-6 w-1/2 m-auto">
      <h1 className="text-3xl font-bold underline text-cyan-600">TODO LIST</h1>
      <div>
        <ul className="list-disc mt-3 text-gray-700">
          {list.map((item) => (
            <li className=" my-5 list-decima flex border-blue-500 border-b-2">
              <div className="mr-3">id: {item.id}</div>
              <div className="mr-3"> name: {item.name}</div>
              <div className="mr-3">email: {item.email}</div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label>
          name:
          <input
            className="h-7"
            type="text"
            onChange={(e) => seData({ ...data, name: e.target.value })}
          />
        </label>
        <label>
          email:
          <input
            className="h-7"
            type="text"
            onChange={(e) => seData({ ...data, email: e.target.value })}
          />
        </label>
        <button onClick={post} className="ml-3 w-24 h-7 bg-slate-400">
          sunmit
        </button>
      </div>

      <div className="mt-6">
        This Del ID:
        <input
          type="text"
          className="h-7"
          onChange={(e) => setId(e.target.value)}
        />
        <button onClick={onDel} className="ml-3 w-24 h-7 bg-slate-400">
          Del
        </button>
      </div>
    </div>
  );
};

export default User;
