import React from "react";
import axios from "axios";
import { Box, Input, Button, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { useToast } from "@chakra-ui/react";
import { AuthContext } from "./AuthContextProvider";
function ForgotPasswoard() {
  const [email1, setEmail1] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();
  const navigate = useNavigate();
  const {email,setEmail}=React.useContext(AuthContext)
  if(loading){
    return <Loading/>
  }
  return (
    <Box>
      <Box background={"#ECECEC"} p={"2em"}>
        <Image
          onClick={() => navigate("/")}
          cursor={"pointer"}
          w={"9.375em"}
          display={"block"}
          mx={"auto"}
          src="https://signin-ui.costco.com/ecomssoui/567/common/Images/logo-bc-us.svg"
          alt="main-logo"
        />
      </Box>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            setLoading(true);
            const response = await axios.post(
              "https://costcocombackend-production.up.railway.app/user/register-email",
              {
                email1,
              },
              {
                withCredentials: true,
              }
            );
            if (response.status === 200) {
              setLoading(false);
              setEmail(email1);
              navigate("/forgot-password-varify");
              console.log(response);
            }
          } catch (error) {
            toast({
              title: "Error. Please try again.",
              description: error.response.data.message,
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
          gap: "10px",
          margin: "auto",
          padding: "1em",
          marginTop: "3em",
        }}
      >
        <h1
          style={{ textAlign: "center", fontSize: "1.5em" }}
          className="poppins-bold"
        >
          Forgot Password
        </h1>
        <Input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={(e) => setEmail1(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}

export default ForgotPasswoard;
