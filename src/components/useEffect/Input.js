import React, { useEffect, useState } from "react";

const Input = () => {
  // 1.useEffect(callback)
  //goi callback moi khi component re-render
  //2. useEffect(callback,[])
  //- chỉ gọi call back 1 lần sau khi mount
  //3.useEffect(callback,[deps])
  // - callback sẽ được gọi lại mỗi khi deps thay đổi
  //  cả trong 3 trường hợp callback đều gọi sau khi mount
  const tabs = ["posts", "photos", "albums"];
  const [title, setTitle] = useState("");
  const [post, setPost] = useState([]);
  const [type, setType] = useState("posts");

  const [showTop, setShowTop] = useState("false");

  const [count, setCount] = useState(180);
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handleAvatar = (e) => {
    const file = e.target.files[0];

    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((preCount) => preCount - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);
  useEffect(() => {
    console.log("type change");
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPost(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="">
        <input type="file" onChange={handleAvatar} />
        {avatar && <img src={avatar.preview} alt="" width="200" />}
      </div>

      <h3 style={{ fontSize: "20px", fontWeight: "700" }}>{count}</h3>
      {tabs.map((tab) => (
        <button
          onClick={() => setType(tab)}
          key={tab}
          style={
            type === tab
              ? { backgroundColor: "#333", color: "#fff", margin: "10px" }
              : { margin: "10px" }
          }
        >
          {tab}
        </button>
      ))}
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      {post.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}

      {showTop && (
        <button style={{ position: "fixed", right: 20, bottom: 20 }}>
          Go To Top
        </button>
      )}
    </div>
  );
};

export default Input;
