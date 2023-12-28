'use client'
import React from "react";
import { useState } from "react";

import BootstrapTooltip from "../../tooltip/page";

import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckBox from "@mui/material/Checkbox";
import ToggleButton from "@mui/material/ToggleButton";
import { IconButton, Menu , MenuItem } from "@mui/material";

const EmailAccountCard = ({
  emailAddress,
  emailSent,
  warmupEmailSent,
  isWarmUpOn,
  isSelected,
  handleCardSelection
}) => {
  const [isOn, setIsOn] = useState(isWarmUpOn);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const options = [ 'Reconnect account','Remove account']

  const handleCheckboxChange  = async (e) => {
    handleCardSelection(emailAddress);
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };




  return (
    <div className="flex justify-between items-center px-8 py-4 mx-4 font-semibold text-sm  rounded-lg email-account-card-shadow border border-gray-100 cursor-pointer ">
      <div className="flex items-center min-w-[30%]">
        <CheckBox
          checked={isSelected}
          value={emailAddress}
          onChange={handleCheckboxChange}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />
        <p className="px-2">{emailAddress}</p>
      </div>
      <div className="flex items-center justify-between  min-w-[20%]">
        <div>
          {emailSent}  <span>  of {warmupEmailSent}</span>
        </div>
        <div>{warmupEmailSent}</div>
      </div>
      <div className="flex items-center justify-end space-x-8 min-w-[30%]">
        <BootstrapTooltip title={isOn ? 'pause warmup' : 'resume warmup'} placement="top">
        <ToggleButton
          color='primary'
          value={"check"}
          selected={isOn}
          onChange={() => setIsOn(!isOn)}
          sx={{  border : 'none' , borderRadius: '50%'  }}
          
        >
          <WhatshotSharpIcon sx={{
            fontSize: 'medium'
          }} />
        </ToggleButton>
        </BootstrapTooltip>
        <div>
          <IconButton
            aria-label="more"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            MenuListProps={{ "aria-labelledby": "long-button" }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default EmailAccountCard;
