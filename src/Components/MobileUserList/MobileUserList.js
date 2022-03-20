import "./MobileUserList.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UserDetails from "../UserDetails/UserDetails";
import { useSelector } from "react-redux";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

function MobileUserList() {
  const [filter, setFilter] = useState();
  const userList = useSelector((state) => state.users);
  const history = useHistory();

  const filteredUser = userList.filter((item) =>
    filter ? item.name.includes(filter) : userList
  );
  return (
    <section className="userListContainer">
      <div className="userList">
        <TextField
          sx={{ marginBottom: "30px" }}
          placeholder="Search..."
          id="outlined-basic"
          onChange={(e) => setFilter(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        {filteredUser.length === 0 ? (
          <p style={{ textAlign: "center" }}>No user found</p>
        ) : (
          filteredUser.map((user) => (
            <Accordion key={user._id}>
              <AccordionSummary
                style={{ margin: "0px 0px" }}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <b>{user.name}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <UserDetails user={user} />
              </AccordionDetails>
            </Accordion>
          ))
        )}
        <Fab
          onClick={() => history.push("/add-user")}
          sx={{ position: "absolute", bottom: 40, right: 30 }}
          size="medium"
          color="secondary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </div>
    </section>
  );
}

export default MobileUserList;
