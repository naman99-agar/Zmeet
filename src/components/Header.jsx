import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connectWallet, getAccount } from "../utils/wallet";
import { usericon } from "../assets";

const Header = () => {
  const [account, setAccount] = useState();
  const onConnectWallet = async () => {
    await connectWallet();
    setAccount(await getAccount());
  };

  useEffect(() => {
    (async () => {
      // TODO 5.b - Get the active account
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);
  return (
    <div className="flex justify-around h-20 w-screen">
      <div className="flex  justify-center items-center w-32 ">
        <Link to="/" className="text-[1.7rem]">
          {/* <Logo2 className="h-16" /> */}
          ZMeet
        </Link>
      </div>
      <ul
        className="flex  justify-center items-center gap-20"
        style={{ font: "CircularStd" }}
      >
        <Link to="/registered">
          <li className="cursor-pointer hover:text-[#878181]">Registered</li>
        </Link>
        <Link to="/">
          <li className="cursor-pointer hover:text-[#878181]">Events</li>
        </Link>
        <Link to="/profile">
          <li className="cursor-pointer hover:text-[#878181]">Profile</li>
        </Link>

        {/* <li
          className="cursor-pointer hover:text-[#878181]"
          //   onClick={() => handleScrollDown()}
        >
          Profile
        </li> */}
      </ul>
      <div className="flex  justify-center items-center  w-40">
        {account ? (
          <Link to="/profile">
            <div className="cursor-pointer flex justify-center items-center gap-2 bg-white p-[6px] rounded-[15px] rounded-bl-[15px]">
              <div className="w-[40px] h-[40px] bg-[#2CAE8F]  rounded-[50%] flex justify-center items-center">
                <img src={usericon} className="h-6" alt="userIcon" />
              </div>
              <p className="">
                {account.slice(0, 7)}...
                {account.slice(account.length - 4)}
              </p>
            </div>
          </Link>
        ) : (
          <button
            onClick={() => onConnectWallet()}
            disabled={account}
            className=" text-black border-2 bg-white border-black py-2 px-5 w-[100%] mt-3 rounded-[5px] hover:border-[#878181] hover:text-[#878181]"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
