"use client";
import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useRouter } from "next/navigation";
import UnderLineAnimation from "../../underLineAnimation/underLineAnimation";
import { removeAuthToken } from "@/app/utils/auth";

const NavbarComponent = ({ handleSideBar, isOpen }) => {
  const [localStorageUser , setLocalStorageUser] = useState()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  useEffect(()=>{
    if (typeof window !== 'undefined') {
      setLocalStorageUser(JSON.parse(window.localStorage.getItem('user')))
  }
  },[localStorageUser])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    removeAuthToken()
    router.push("/auth/login");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleToggle = () => {
    isOpen ? handleSideBar(false) : handleSideBar(true);
  };
  return (
    <div className="w-full h-16 pl-4 pr-6 py-2  flex justify-between items-center bg-primary text-slate-50 shadow-md">
      <div className="space-x-5 flex">
        <div className="cursor-pointer" onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="text-2xl font-semibold">Logo</div>
      </div>
      <div className="space-x-5 flex hover:cursor-pointer">
        <p className="relative inline-block group ">
          Help
          <UnderLineAnimation bgColor="bg-slate-50" bottom='bottom-1' width='w-[100%]' />
        </p>

        {localStorageUser ? (
          <div className="max-w-[130px] overflow-hidden text-ellipsis whitespace-nowrap button-custom-shadow  rounded-md bg-white hover:border-none">
            <Button
              id="basic-button"
              aria-controls={anchorEl ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? "true" : undefined}
              onClick={handleClick}
              sx={{
                padding: "0px",
                fontSize: "16px",
                textTransform: "capitalize",
                fontWeight: 400,
                color:'black'
              }}
            >
              {localStorageUser}
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{marginTop:'4px'}}
            >
              <MenuItem><PersonIcon fontSize="small" sx={{color:'rgb(156, 163, 175)', marginRight:'10px'}}/> Profile</MenuItem>
              <MenuItem onClick={handleLogout}><LogoutIcon fontSize="small"  sx={{color:'rgb(156, 163, 175)',marginRight:'10px'}}/> Logout</MenuItem>
            </Menu>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavbarComponent;
