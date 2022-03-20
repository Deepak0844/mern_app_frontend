import "./App.css";
import Page from "./Pages/DeskTopView/DeskTop";
import { Route, Switch, Redirect } from "react-router-dom";
import MobileForm from "./Components/MobileForm/MobileForm";
import MobileUserList from "./Components/MobileUserList/MobileUserList";
import { getUsers } from "./API/ApiRequest";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_all_user } from "./redux/action";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    const userData = await getUsers();
    dispatch(get_all_user(userData));
  }, []);
  const width = window.innerWidth;
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {width > 700 ? (
        <Switch>
          <Route exact path="/" component={Page} />
          <Route exact path="/add-user">
            <Redirect to="/" />
          </Route>
          <Route exact path="/edit-user/:id">
            <Redirect to="/" />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={MobileUserList} />
          <Route exact path="/add-user" component={MobileForm} />
          <Route exact path="/edit-user/:id" component={MobileForm} />
        </Switch>
      )}
    </>
  );
}

export default App;
