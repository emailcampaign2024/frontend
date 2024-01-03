"use client";
import React, { useEffect, useState } from "react";
import BarChart from "@/app/ui/barChart/page";
import DashboardHeader from "@/app/ui/dashboard/dashboardHeader/page";
import LineChart from "@/app/ui/lineChart/page";

const GlobalAnalytics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://email-campaign-lnfx.onrender.com/user/users-data")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); 

  return (
    <div className="w-full space-y-10">
      <DashboardHeader heading={"Dashboard Analytics"} />
      <h3 className="text-center">Users Count</h3>
      <div className="flex ">
        <LineChart data={data} />
        <BarChart data={data} />
      </div>
    </div>
  );
};

export default GlobalAnalytics;