import SearchButton from "../inputs/SearchButton";
import SearchInput from "../inputs/SearchInput";
import ChatCard from "../chat/ChatCard";
import { useEffect, useRef } from "react";
import { useUserDetails } from "../../context/user-context";

const NewContactModal = ({ isVisible, setIsVisible }) => {
  if (!isVisible) return null;
  const inputRef = useRef(null);

  const { users: contacts } = useUserDetails();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="fixed inset-0 bottom-32  left-96 top-[52px] w-1/5 items-center rounded-md  border border-[#f5f0ff] bg-white p-4 backdrop-blur-sm dark:bg-slate-900 dark:border-black">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <h1 className="mb-5 text-xl font-semibold ">All Contacts</h1>
          <img
            src="/cross.png"
            className="mb-4 ml-auto cursor-pointer"
            height="24px"
            width="24px"
            onClick={() => setIsVisible(!isVisible)}
          />
        </div>
        <div className="flex justify-center space-x-2 ">
          <SearchInput placeholder="Type to search..." ref={inputRef} />
          <SearchButton>
            <img src="/search.png" height="25px" width="25px" />
          </SearchButton>
        </div>
        {contacts.map((user, index) => {
          return (
            <div
              className={`flex space-x-3 
               overflow-y-auto
               bg-white p-4 pl-4 shadow-sm hover:bg-slate-100 dark:bg-black dark:hover:bg-slate-950`}
              key={user.id}
            >
              <ChatCard {...user} key={user.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewContactModal;
