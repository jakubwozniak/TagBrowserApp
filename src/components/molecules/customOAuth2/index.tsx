import OAuth2Login from "react-simple-oauth2-login";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../state/store";
import { setAccessToken } from "../../../state/userData/userDataSlice";

const CustomOAuth2 = () => {
  const onSuccess = (response: any) => {
    dispatch(setAccessToken(response.access_token));
  };
  const onFailure = (response: any) => console.error(response);
  const dispatch = useDispatch<AppDispatch>();
  const redirectUri =
    window.location.protocol +
    "//" +
    window.location.hostname +
    (window.location.port ? ":" + window.location.port : "");
  return (
    <OAuth2Login
      authorizationUrl="https://stackoverflow.com/oauth/dialog"
      responseType="token"
      clientId="28644"
      scope="private_info"
      extraParams={{ state: "STATE" }}
      redirectUri={redirectUri}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};

export default CustomOAuth2;
