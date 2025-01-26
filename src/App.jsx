import "./App.css";
import LoginPage from "./components/loginPage/LoginPage.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ChatRoom from "./components/ChatRoom/ChatRoom.jsx";
import { UserProvider } from "./data/UserContext.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/chat",
      element: <ChatRoom />,
    },
  ],
  {
    basename: "/chatApp/",
  }
);

function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;
