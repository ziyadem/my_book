/* eslint-disable @typescript-eslint/no-explicit-any */
//* Import Libraries
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

//* Import Assets
import { BiLogOut } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

//* Import Styled components
import { Paper } from "@mui/material";
import { Avatar } from "@mui/material";
import { Tooltip } from "@mui/material";
import Mode from "../../components/mode";
import { MenuItem } from "@mui/material";
import { IconButton } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { Description, Section } from "../../style";
import { Box, Menu, PopoverVirtualElement } from "@mui/material";

type CustomElement =
  | Element
  | (() => Element)
  | PopoverVirtualElement
  | (() => PopoverVirtualElement)
  | null
  | undefined;

interface CustomState {
  header_title: string;
  profileOpen: CustomElement;
}

const Header = () => {
  const { title } = useSelector((store: any) => store?.main);
  const [state, setState] = useState<CustomState>({
    header_title: "main_title",
    profileOpen: null,
  });

  useEffect(() => {
    setState((prev: CustomState) => ({
      ...prev,
      header_title: title,
    }));
  }, [title]);

  const { profileOpen } = state;

  const sx = {
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    mt: 1.5,
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  };

  return (
    <Paper
      sx={{
        backgroundImage: "none",
      }}
      className="shadow-none w-full h-[10vh] rounded-none duration-300"
    >
      <Box className="px-5 h-full flex items-center justify-between">
        <Section className="flex items-center gap-5 capitalize">
          <IconButton size="large" color="info">
            <HiOutlineMenuAlt1 />
          </IconButton>
          <Description className="font-semibold text-[1.2rem] max-[550px]:hidden">
            {title}
          </Description>
        </Section>
        <Section className="flex items-center gap-3">
          <Mode />
          <Tooltip title="Profil">
            <IconButton
              id="account-menu"
              onClick={(e: any) =>
                setState((prev: CustomState) => ({
                  ...prev,
                  profileOpen: e.currentTarget,
                }))
              }
              size="small"
              sx={{ ml: 2 }}
              aria-controls="account-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <Avatar alt="Ava" src={``} />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={profileOpen}
            id="account-menu"
            open={Boolean(profileOpen)}
            onClose={() =>
              setState((prev: CustomState) => ({ ...prev, profileOpen: null }))
            }
            onClick={() =>
              setState((prev: CustomState) => ({ ...prev, profileOpen: null }))
            }
            PaperProps={{
              elevation: 0,
              sx,
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem
              disabled
              onClick={() => {
                setState((prev: CustomState) => ({
                  ...prev,
                  profileOpen: null,
                }));
                localStorage.clear();
                window.location.reload();
              }}
            >
              <ListItemIcon>
                <FaRegUser />
              </ListItemIcon>
              Profil
            </MenuItem>
            <MenuItem
              disabled
              onClick={() => {
                setState((prev: CustomState) => ({
                  ...prev,
                  profileOpen: null,
                }));
                localStorage.clear();
                window.location.reload();
              }}
            >
              <ListItemIcon>
                <IoSettingsOutline />
              </ListItemIcon>
              Sozlamalar
            </MenuItem>
            <MenuItem
              onClick={() => {
                setState((prev: CustomState) => ({
                  ...prev,
                  profileOpen: null,
                }));
                localStorage.clear();
                window.location.reload();
              }}
            >
              <ListItemIcon>
                <BiLogOut />
              </ListItemIcon>
              Chiqish
            </MenuItem>
          </Menu>
        </Section>
      </Box>
    </Paper>
  );
};

export default Header;
