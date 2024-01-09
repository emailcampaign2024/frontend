import CampaignIcon from "@mui/icons-material/Campaign";
import InboxSharpIcon from "@mui/icons-material/InboxSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import InsightsSharpIcon from "@mui/icons-material/InsightsSharp";

export const sideBarData = [
  {
    path: "/dashboard/emailCampaign",
    name: "Email Campaign",
    icon: CampaignIcon,
  },
  {
    path: "/dashboard/masterInbox",
    name: "Master Inbox",
    icon: InboxSharpIcon,
  },
  {
    path: "/dashboard/emailAccounts",
    name: "Email Accounts",
    icon: EmailSharpIcon,
  },
  {
    path: "/dashboard/integrations",
    name: "Integrations",
    icon: IntegrationInstructionsIcon,
  },
  {
    path: "/dashboard/globalAnalytics",
    name: "Dashboard Analytics",
    icon: InsightsSharpIcon,
  },
];

export const emailAccountsData = [
  {
    emailAddress: "gokulsidharth02@gmail.com",
    emailSent: 27,
    warmupEmailSent: 12,
    isWarmUpOn: true,
  },
  {
    emailAddress: "gokulsidharth02@gmail.com",
    emailSent: 34,
    warmupEmailSent: 15,
    isWarmUpOn: true,
  },
  {
    emailAddress: "gokul@gmail.com",
    emailSent: 32,
    warmupEmailSent: 10,
    isWarmUpOn: true,
  },
  {
    emailAddress: "sidharth02@gmail.com",
    emailSent: 45,
    warmupEmailSent: 25,
    isWarmUpOn: true,
  },
  {
    emailAddress: "sid02@gmail.com",
    emailSent: 23,
    warmupEmailSent: 30,
    isWarmUpOn: false,
  },
];

export const masterInboxData = [
  {
    _id: "6553ca12a378ef62ebde65ca",
    to: ["rajakumaran1503@gmail.com"],
    subject: "hi",
    text: "thth",
    sentAt: "2023-11-14T19:27:14.666Z",
    __v: 0,
  },
  {
    _id: "6553ca14a378ef62ebde65cc",
    to: ["rajakumaran1503@gmail.com"],
    subject: "hi",
    text: "thth",
    sentAt: "2023-11-14T19:27:16.270Z",
    __v: 0,
  },
  {
    _id: "6553ca5ba378ef62ebde65ce",
    to: ["rajakumaran1503@gmail.com"],
    subject: "test subject 4",
    text: "test body 4",
    sentAt: "2023-11-14T19:28:27.585Z",
    __v: 0,
  },
  {
    _id: "655466b24fa71496caab2983",
    to: ["rajakumaran1503@gmail.com"],
    subject: "test subject 3",
    text: "test body 3",
    sentAt: "2023-11-15T06:35:30.077Z",
    __v: 0,
  },
  {
    _id: "6554c6d4fd00b41ae30c1b0f",
    to: ["rajakumaran1503@gmail.com"],
    subject: "test subject 4",
    text: "test body 4",
    sentAt: "2023-11-15T13:25:40.496Z",
    __v: 0,
  },
  {
    _id: "6555d2a26bedac5bd2b3e68a",
    to: ["rajardevloper@gmail.com"],
    subject: "test subject 2",
    text: "test body 2",
    sentAt: "2023-11-16T08:28:18.960Z",
    __v: 0,
  },
  {
    _id: "655f60531883876ae351ad97",
    to: ["rajardevloper@gmail.com"],
    subject: "text 1",
    text: "helloo",
    sentAt: "2023-11-23T14:23:15.157Z",
    __v: 0,
  },
  {
    _id: "655f61371883876ae351ad9b",
    to: ["rajardevloper@gmail.com"],
    subject: "test subject 4",
    sentAt: "2023-11-23T14:27:03.293Z",
    __v: 0,
  },
  {
    _id: "655f61651883876ae351ad9d",
    to: ["rajardevloper@gmail.com"],
    subject: "test subject 2",
    sentAt: "2023-11-23T14:27:49.219Z",
    __v: 0,
  },
  {
    _id: "6560ac5c1d70787a78c0b1ab",
    to: ["rajardevloper@gmail.com"],
    subject: "text 1",
    text: "helloo",
    sentAt: "2023-11-24T13:59:56.030Z",
    __v: 0,
  },
  {
    _id: "6571fc3a3848bf82e1c6e285",
    to: ["rajakumarkumaran736@gmail.com"],
    subject: "hello",
    sentAt: "2023-12-07T17:09:14.046Z",
    __v: 0,
  },
  {
    _id: "6571fec27a59ea64ce345448",
    to: ["rajakumarkumaran736@gmail.com", "rajardevloper@gmail.com"],
    subject: "test subject 5",
    sentAt: "2023-12-07T17:20:02.222Z",
    __v: 0,
  },
  {
    _id: "657403a52f132e5ac25ea081",
    to: [
      "rajakumarkumaran736@gmail.com",
      "kumaran123@gmail.com",
      "rajardevloper@gmail.com",
    ],
    subject: "test subject 4",
    sentAt: "2023-12-09T06:05:24.999Z",
    __v: 0,
  },
  {
    _id: "657403a52f132e5ac25ea0d9",
    to: [
      "rajakumarkumaran736@gmail.com",
      "kumaran123@gmail.com",
      "rajardevloper@gmail.com",
    ],
    subject: "test subject 4",
    sentAt: "2023-12-09T06:05:25.555Z",
    __v: 0,
  },
  {
    _id: "6574057c2f132e5ac25ec5de",
    to: ["rajakumarkumaran736@gmail.com", "rajardevloper@gmail.com"],
    subject: "test subject 3",
    sentAt: "2023-12-09T06:13:16.567Z",
    __v: 0,
  },
  {
    _id: "657a91567093ec1529ce5fb3",
    to: ["rajakumaran123@gmail.com"],
    subject: "test subject 2",
    sentAt: "2023-12-14T05:23:34.699Z",
    __v: 0,
  },
  {
    _id: "657ae807617312740ae7bbb2",
    to: ["kumaran123@gmail.com"],
    subject: "test subject 3",
    sentAt: "2023-12-14T11:33:27.505Z",
    __v: 0,
  },
  {
    _id: "657ae878a4da1368ef68fc38",
    to: ["rajardevloper@gmail.com"],
    subject: "test subject 2",
    sentAt: "2023-12-14T11:35:20.123Z",
    __v: 0,
  },
  {
    _id: "65801b4658b5dda66537fd7e",
    to: ["rajardevloper@gmail.com"],
    subject: "test subject 5",
    sentAt: "2023-12-18T10:13:26.240Z",
    __v: 0,
  },
  {
    _id: "65801da4aae5fd6160f24171",
    to: ["rajardevloper@gmail.com"],
    subject: "test subject 2",
    sentAt: "2023-12-18T10:23:32.732Z",
    __v: 0,
  },
  {
    _id: "65801da7aae5fd6160f2432d",
    to: ["rajakumaran123@gmail.com"],
    subject: "test subject 2",
    sentAt: "2023-12-18T10:23:35.598Z",
    __v: 0,
  },
  {
    _id: "65801fa2aae5fd6160f3a58f",
    to: ["rajardevloper@gmail.com"],
    subject: "test subject 1",
    sentAt: "2023-12-18T10:32:02.691Z",
    __v: 0,
  },
  {
    _id: "65802066aae5fd6160f3e3dd",
    to: ["rajakumaran123@gmail.com"],
    subject: "hilolo",
    sentAt: "2023-12-18T10:35:18.273Z",
    __v: 0,
  },
  {
    _id: "6580214377fa5d4ffab01ce0",
    to: ["rajakumaran1234@gmail.com"],
    subject: "hilolo",
    text: "jkjk",
    sentAt: "2023-12-18T10:38:59.059Z",
    __v: 0,
  },
  {
    _id: "6580221277fa5d4ffab01ce2",
    to: ["rajakumaran123@gmail.com"],
    subject: "test subject 3",
    text: "test body 3",
    sentAt: "2023-12-18T10:42:26.773Z",
    __v: 0,
  },
  {
    _id: "6580221677fa5d4ffab01ce4",
    to: ["rajardevloper@gmail.com"],
    subject: "test subject 3",
    text: "test body 3",
    sentAt: "2023-12-18T10:42:30.132Z",
    __v: 0,
  },
  {
    _id: "6580315e5007b4ea01ccf56a",
    to: ["rtrt35454yyhh@gmail.com"],
    subject: "test subject 4",
    text: "test body 4",
    isActive: 0,
    sentAt: "2023-12-18T11:47:42.883Z",
    __v: 0,
  },
  {
    _id: "658032165007b4ea01cd788f",
    to: ["rajardevloper@gmail.com"],
    subject: "test subject 2",
    text: "test body 2",
    isActive: 0,
    sentAt: "2023-12-18T11:50:46.178Z",
    __v: 0,
  },
  {
    _id: "658034742bce2d9e473591a5",
    to: ["rtrt35454yyhh@gmail.com"],
    subject: "test subject 3",
    text: "test body 3",
    sentAt: "2023-12-18T12:00:52.391Z",
    __v: 0,
  },
  {
    _id: "6580355ff208eec94e059acd",
    to: ["rtrt35454yyhh@gmail.com"],
    subject: "test subject 4",
    text: "test body 4",
    sentAt: "2023-12-18T12:04:47.890Z",
    __v: 0,
  },
  {
    _id: "6580361a1108df2dc0a4a671",
    to: ["rtrt35454yyhh@gmail.com"],
    subject: "test subject 5",
    text: "test body 5",
    sentAt: "2023-12-18T12:07:54.537Z",
    __v: 0,
  },
  {
    _id: "658036976fd5d05237d7b588",
    to: ["rtrt35454yyhh@gmail.com"],
    subject: "test subject 4",
    text: "test body 4",
    sentAt: "2023-12-18T12:09:59.966Z",
    __v: 0,
  },
  {
    _id: "658036e652f928c3d80f5ccb",
    to: ["rtrt35454yyhh@gmail.com"],
    subject: "test subject 3",
    text: "test body 3",
    sentAt: "2023-12-18T12:11:18.350Z",
    __v: 0,
  },
  {
    _id: "65804457571dee75af6f8dba",
    to: ["rtrt35454yyhh@gmail.com"],
    subject: "test subject 4",
    text: "test body 4",
    sentAt: "2023-12-18T13:08:39.837Z",
    __v: 0,
  },
  {
    _id: "6580457bee4435393468ab53",
    to: ["rtrt35454yyhh@gmail.com"],
    subject: "test subject 5",
    text: "test body 5",
    sentAt: "2023-12-18T13:13:31.374Z",
    __v: 0,
  },
  {
    _id: "6580488362f0356b39c35ece",
    to: ["rtrt35454yyhh@gmail.com"],
    subject: "test subject 3",
    text: "test body 3",
    sentAt: "2023-12-18T13:26:27.762Z",
    __v: 0,
  },
];

// {handleSideBar ? (
//     <Link href='/dashboard/emailCampaign'>
//     <li className="px-4 py-4 hover:bg-fadedBg text-center flex space-x-4">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" className="w-6 h-6">
//         <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//       </svg>
//       <div>Email Campaign</div>
//     </li>
//    </Link>
//   ) :(
//     <Link href='/dashboard/emailCampaign'>
//   <li className="px-4 py-4 hover:bg-fadedBg text-center flex space-x-4">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" className="w-6 h-6">
//       <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//     </svg>
//   </li>
//  </Link>
//   )}
//   <Link href='/dashboard/masterInbox'>
//   <li className="px-4 py-4 hover:bg-fadedBg flex space-x-4">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" class="w-6 h-6">
//       <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//     </svg>
//     <div>Master Inbox</div>
//   </li>
//   </Link>
//   <Link href='/dashboard/emailAccounts'>
//   <li className=" px-4 py-4 hover:bg-fadedBg flex space-x-4">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" class="w-6 h-6">
//       <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//     </svg>
//     <div>Email Accounts</div>
//   </li>
//   </Link>
//   <Link href='/dashboard/integrations'>
//   <li className="px-4 py-4 hover:bg-fadedBg flex space-x-4">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" class="w-6 h-6">
//       <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//     </svg>
//     <div>Integrations</div>
//   </li>
//   </Link>
//   <Link href='/dashboard/globalAnalytics'>
//   <li className="px-4 py-4 hover:bg-fadedBg flex space-x-4">
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A3A2B9" class="w-6 h-6">
//       <path strokeLinecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//     </svg>
//     <div>Global Analytics</div>
//   </li>
//   </Link>
