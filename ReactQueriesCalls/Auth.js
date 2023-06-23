import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
// import { UserInfo } from "Redux_Slices/auth/Slice";
import baseUrl from "../axios";

export const UseLoginApi = async (data) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  return await baseUrl.post("/login", data, config);
};

export const useLoginQuery = (data) => {
  const dispatch = useDispatch();

  return useMutation(UseLoginApi, {
    onSuccess: (res) => {
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      //   dispatch(UserInfo(result.data));
      localStorage.setItem("user", JSON.stringify(result.data));
      localStorage.setItem("token", result.data.Token);

      return result.data;
    },
    onError: (err) => {},
  });
};
