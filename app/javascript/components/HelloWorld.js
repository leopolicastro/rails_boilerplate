import React, { useState, useEffect } from "react";

const HelloWorld = props => {
  const [count, setCount] = useState(0);
  const [announcements, setAnnouncements] = useState([]);

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

  const fetchAnnouncements = () => {
    let url = `/announcements.json?auth_token=${props.token}`;
    fetch(url)
      .then(data => {
        return data.json();
      })
      .then(res => {
        setAnnouncements(res);
      });
  };

  useEffect(fetchAnnouncements, []);

  return (
    <div className="text-center mx-auto shadow-xl p-20 w-1/2">
      <div>
        <div className="d-flex flex-wrap">
          {announcements.length > 0 ? (
            announcements.map(announcement => {
              return (
                <div
                  key={announcement.id}
                  className="card m-2 mx-auto"
                  style={{ width: "100%" }}
                >
                  {/* <img src="..." className="card-img-top" alt="..." /> */}
                  <div className="card-body">
                    <h5 className="card-title">{announcement.title}</h5>
                    <p className="card-text">{announcement.body}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
