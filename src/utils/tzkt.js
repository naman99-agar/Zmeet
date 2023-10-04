import axios from "axios";

export const fetchStorage = async () => {
  const res = await axios.get(
    "https://api.ghostnet.tzkt.io/v1/contracts/KT1XaDtz3rGKvKQQkiy61VsT49Fd8QVn2fxA/storage"
  );
  return res.data;
};
