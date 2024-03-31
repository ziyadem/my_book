import { IconButton, Tooltip } from "@mui/material";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { mode } from "../../store";

const Mode = () => {
  const { title } = useSelector((store: any) => store?.mode);
  const dispatch = useDispatch();
  return (
    <Tooltip arrow title={title === "dark" ? "Kun" : "Tun"}>
      <IconButton
        color="inherit"
        aria-haspopup="true"
        aria-controls="customized-menu"
        onClick={() => {
          dispatch(mode({ title: title === "dark" ? "light" : "dark" }));
        }}
      >
        {title === "dark" ? (
          <BsSun className="text-[1.4rem]" />
        ) : (
          <BsMoonStars className="text-[1.4rem]" />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default Mode;
