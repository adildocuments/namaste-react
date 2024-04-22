// import { useContext } from "react";
// import UserContext from "../utils/UserContext";

const Contact = () => {
  //   const { loggedInUser } = useContext(UserContext);
  return (
    <>
      <h1 className="m-2 p-2 font-bold">This is contact page.</h1>
      <input
        type="text"
        name="name"
        className="border border-black m-2 p-2 rounded-sm"
        placeholder="name"
      />
      <input
        type="text"
        name="message"
        className="border border-black m-2 p-2 rounded-sm"
        placeholder="message"
      />
      <button className="border border-black m-2 p-2 rounded-lg bg-gray-400">
        Submit
      </button>
      {/* <p>{loggedInUser}</p> */}
    </>
  );
};

export default Contact;
