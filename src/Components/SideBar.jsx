import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { update_order, update_rating } from "../Redux/MovieReducer/action";

const SideBar = () => {
  const [selected_rating, setSelectedrating] = useState([]);
  const [order_by, setOrder_by] = useState("asc");

  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useState(() => {
    let s = searchParams.getAll("rating").map((e) => parseInt(e));
    let o = searchParams.get("order");

    setSelectedrating([...s]);

    if (o !== null) {
      setOrder_by(o);
    }
    if (o === null) {
      setOrder_by("asc");
    }
  }, []);

  const make_search_string = (selected_rating) => {
    let res = "";
    selected_rating.forEach((e) => {
      res += `rating=${e}&`;
    });
    return res !== "" ? res.slice(0, res.length - 1) : res;
  };

  useEffect(() => {
    update_rating(dispatch, selected_rating);
    update_order(dispatch, order_by);
    navigate({
      pathname: window.location.pathname,
      search: `${make_search_string(selected_rating)}${
        selected_rating.length > 0 ? "&" : ""
      }${order_by ? `order=${order_by}` : ""}`,
    });
  }, [selected_rating, order_by, searchParams]);

  const filterHandler = (e) => {
    if (selected_rating.includes(e)) {
      setSelectedrating([...selected_rating.filter((el) => el !== e)]);
    } else {
      setSelectedrating([...selected_rating, e]);
    }
  };

  const orderHandler = (e) => {
    setOrder_by(e.value);
  };

  return (
    <div className="sidebar">
      <h2>Filter</h2>
      {/* Add filter checkboxes */}

      {[1, 2, 3, 4, 5].map((e, i) => {
        return (
          <p
            onClick={() => {
              filterHandler(e);
            }}
            key={i}
          >
            {e}
          </p>
        );
      })}
      <h2>Sort</h2>
      {[
        { name: "Ascending", value: "asc" },
        { name: "Decending", value: "dsc" },
      ].map((e, i) => {
        return (
          <p
            onClick={() => {
              orderHandler(e);
            }}
            key={i}
          >
            {e.name}
          </p>
        );
      })}
    </div>
  );
};

export default SideBar;
