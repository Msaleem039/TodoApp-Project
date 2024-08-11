import { useState } from "react";

const Home = () => {
  const [activity, setActivity] = useState("");
  const [items, setItems] = useState([]);
  const [editlist, setEditList] = useState(null);

  const additem = () => {
    if (activity) {
      if (editlist !== null) {
        let updatedItems = items.map((item, index) =>
          index === editlist ? activity : item
        );
        setItems(updatedItems);
        setEditList(null);
      } else {
        setItems([...items, activity]);
      }
      setActivity("");
    }
  };

  const deletitem = (item) => {
    const restitem = items.filter((x) => x !== item);
    setItems(restitem);
  };

  const Edit = (index) => {
    setActivity(items[index]);
    setEditList(index);
  };

  return (
    <div className='container'>
      <h2 className='text-center py-3'>Todo App</h2>
      <div className='border border-dark w-50 d-flex m-auto rounded'>
        <input
          type='text'
          placeholder='Add category'
          name='text'
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className='input p-3 rounded'
          style={{ width: "100%" }}
        />
        <button className='btn btn-primary p-3' onClick={additem}>
          {editlist !== null ? "Edit" : "Add"}
        </button>
      </div>
      {items.map((item, index) => {
        return (
          <div key={index} className='m-2 d-flex justify-content-between'>
            <p>{item}</p>
            <div>
              <button
                className='btn btn-danger m-2'
                onClick={() => deletitem(item)}
              >
                Delete
              </button>
              <button
                className='btn btn-success m-2'
                onClick={() => Edit(index)}
              >
                Edit
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
