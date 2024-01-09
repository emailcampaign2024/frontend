"use client";
import React from "react";
import { useState } from "react";

import BootstrapTooltip from "../../tooltip/page";

import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckBox from "@mui/material/Checkbox";
import ToggleButton from "@mui/material/ToggleButton";
import { Drawer, IconButton, Menu, MenuItem } from "@mui/material";
import WarmupAnalyticsCard from "../../card/card";
import PrimaryButton from "../../primaryButton/page";
import { FormControlLabel, Switch } from "@mui/material";
import { useRouter } from "next/navigation";

const EmailAccountCard = ({
  emailAddress,
  emailSent,
  warmupEmailSent,
  Seen,
  Unseen,
  isWarmUpOn,
  isRampUpOn,
  isSelected,
  handleCardSelection,
}) => {
  const [isOn, setIsOn] = useState(isWarmUpOn);
  const [totalWarmUpEmailsPerDay, setTotalWarmUpEmailsPerDay] = useState(5);
  const [dailyRampUpEnabled, setDailyRampUpEnabled] = useState(false);
  const [rampUpIncrement, setRampUpIncrement] = useState(isRampUpOn);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const route = useRouter();

  const options = ["Reconnect Account", "Remove Account"];

  const handleCheckboxChange = async (e) => {
    handleCardSelection(emailAddress);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e, value) => {
    if (value === "Reconnect Account") {
      route.push("/dashboard/emailAccounts/connect");
      setAnchorEl(null);
    }
    // if(value === 'Remove Account'){
    //   axios.
    // }
    setAnchorEl(null);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = (e) => {
    e.stopPropagation();
    setIsDrawerOpen(false);
  };

  const handleSaveChanges = () => {
    const dataToSend = {
      isOn,
      totalWarmUpEmailsPerDay,
      dailyRampUpEnabled,
      rampUpIncrement,
    };

    console.log(dataToSend, 0);

    setIsDrawerOpen(false);
  };

  return(
    <div className="flex justify-between items-center px-8 h-16 mx-4 font-semibold text-sm  rounded-lg email-account-card-shadow border border-gray-100 cursor-pointer">
      <div className="flex items-center min-w-[30%] " onClick={openDrawer}>
        <CheckBox
          checked={isSelected}
          value={emailAddress}
          onChange={handleCheckboxChange}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />
        <p className="px-2">{emailAddress}</p>
      </div>
      <div
        className="flex flex-1 items-center justify-between  min-w-[20%] h-full"
        onClick={openDrawer}
      >
        <div>
          {warmupEmailSent} <span> of {emailSent}</span>
        </div>
        <div>{emailSent}</div>
        <div>{Seen}</div>
        <div>{Unseen}</div>
      </div>
      <div className="flex items-center justify-end space-x-8 min-w-[30%]">
        <BootstrapTooltip
          title={isOn ? "pause warmup" : "resume warmup"}
          placement="top"
        >
          <ToggleButton
            color="primary"
            value={isOn}
            selected={isOn}
            onChange={() => setIsOn(!isOn)}
            sx={{ border: "none", borderRadius: "50%" }}
          >
            <WhatshotSharpIcon
              sx={{
                fontSize: "medium",
              }}
            />
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
              <MenuItem key={option} onClick={() => handleClose(option)}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
        <div className="p-4 w-[50vw] flex flex-col relative">
          <div className="text-xl font-semibold p-4 text-slate-400">
            Overview
          </div>
          <div className="flex flex-wrap justify-around  gap-6">
            <WarmupAnalyticsCard
              heading={"Bounce Email"}
              count={warmupEmailSent}
              bgColor="blue-50"
            />
            <WarmupAnalyticsCard
              heading={"warmup Email Sent"}
              count={emailSent}
              bgColor="blue-50"
            />
            <WarmupAnalyticsCard
              heading={"Opened"}
              count={Seen}
              bgColor="blue-50"
            />
            <WarmupAnalyticsCard
              heading={"Unread"}
              count={Unseen}
              bgColor="blue-50"
            />
          </div>
          <hr className="mt-[40px]" />
          <div className="text-xl font-semibold p-4 text-slate-400">
            Warmup settings
          </div>
          <div className="p-4 space-y-4 mb-5">
            <p className="text-sm text-textDark">
              Email warm-up gradually increases email volumes on a dedicated IP
              to establish sender reputation.
            </p>
            <div>
              <FormControlLabel
                control={
                  <Switch
                    checked={isOn}
                    onChange={(e) => setIsOn(e.target.checked)}
                    value={isOn}
                  />
                }
              />
              <label className="font-semibold text-textDark">
                Enable Email Warmup
              </label>
            </div>
          </div>
          <hr />
          <div className="p-4 space-y-4 mb-5">
            <div>
              <p className="font-semibold text-textDark">
                Total number of warm up emails per day
              </p>
              <p className="text-textSoft text-sm">
                Maximum number of warm up emails that could be sent via this
                email account per day (min 5)
              </p>
            </div>
            <input
              type="number"
              max={80}
              min={5}
              disabled={!isOn}
              value={totalWarmUpEmailsPerDay}
              onChange={(e) => setTotalWarmUpEmailsPerDay(e.target.value)}
              className="outline-blue-200 border border-gray-200 w-[100px] p-2"
            />
          </div>
          <hr />
          <div className="p-4 space-y-4 mb-16">
            <FormControlLabel
              control={
                <Switch
                  checked={dailyRampUpEnabled}
                  disabled={!isOn}
                  onChange={(e) => setDailyRampUpEnabled(e.target.checked)}
                  value={dailyRampUpEnabled}
                />
              }
            />
            <label className="font-semibold text-textDark">Daily RampUp</label>
            <div className="space-y-2">
              <p className="text-sm text-textSoft">
                RampUp increment value per day (suggested 5 per day)
              </p>
              <input
                type="number"
                disabled={!dailyRampUpEnabled || !isOn}
                value={rampUpIncrement}
                onChange={(e) => setRampUpIncrement(e.target.value)}
                className="outline-blue-200 border border-gray-200 w-[100px] p-2"
              />
            </div>
            <hr />
          </div>
          <div className="min-w-[100px] absolute bottom-4 left-8">
            <PrimaryButton
              ButtonName={"Save Changes"}
              handleClick={handleSaveChanges}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default EmailAccountCard;
