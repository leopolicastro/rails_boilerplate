import React, { useState, useEffect } from "react";

const HelloWorld = props => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const currentCount = count;
    setCount(currentCount + 1);
  };

  const handleSubtract = () => {
    const currentCount = count;
    setCount(currentCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const defaultFormData = { hello: "" };
  const [formData, setFormData] = useState(defaultFormData);
  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const fetchIt = () => {
    let url = "/announcements.json?auth_token=yzXxRzvevBsymBRU14Uu";
    fetch(url)
      .then(data => {
        return data.json();
      })
      .then(res => {
        console.log(res);
      });
    alert("check the logs");
  };

  return (
    <div className="text-center mx-auto shadow-xl p-20 w-1/2">
      <div>
        <div>
          {props.greeting} {formData.hello}
        </div>
        <input
          className="form-control w-40 mx-auto m-3"
          type="text"
          name="hello"
          onChange={handleChange}
        ></input>
        <div className="border p-5">
          <div className="m-2">Counter: {count}</div>
          <div>
            <button onClick={handleSubtract} className="btn btn-primary mx-3">
              -
            </button>
            <button onClick={handleReset} className="btn btn-primary mx-3">
              0
            </button>

            <button onClick={handleAdd} className="btn btn-primary m-3">
              +
            </button>
          </div>
          <button onClick={fetchIt} className="btn btn-primary">
            Fetch
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
