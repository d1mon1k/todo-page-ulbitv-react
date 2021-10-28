import React from "react";
import { MyInput } from "./UI/input/MyInput";
import { MySelect } from "./UI/select/MySelect";

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        type="text"
        placeholder="Поиск"
        value={filter.query}
        onChange={(e) => {
          setFilter({ ...filter, query: e.target.value });
        }}
      />
      <MySelect
        value={filter.sort}
        onChange={(e) => {
          setFilter({ ...filter, sort: e.target.value });
        }}
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "Сортировать по заголовку" },
          { value: "body", name: "Сортировать по содержанию" },
        ]}
      />
    </div>
  );
};
