import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ScheduleIcon from "@mui/icons-material/Schedule";
import EmailIcon from "@mui/icons-material/Email";

const WarmupAnalyticsCard = ({heading ,subHeading,  count, scheduledCount, emailCount, onViewDetails }) => {
  return (
    <Card className="shadow-lg bg-fadedBg">
      <CardContent className="relative p-0">
        <Typography variant="h6" gutterBottom className="px-4 pt-2">
          {heading}
        </Typography>

        <div className="flex justify-between items-center w-[300px] px-4 pb-2">
          <div>
            <Typography variant="subtitle1">{subHeading}</Typography>
            <Typography variant="h4">{count}</Typography>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-secondary h-[3px]"></div>
      </CardContent>
    </Card>
  );
};

export default WarmupAnalyticsCard;
