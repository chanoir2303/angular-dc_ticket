import {TicketTemplate} from "./ticket";

export const BACKLOG_DATA: TicketTemplate[] = [
  {
    id: 3,
    status: "New",
    lvl: 1,
    category: "Account",
    tag: "Forgotten password",
    agent: "Mickey Mouse",
    lastUpdateTimestamp: "06/22/2021",
    lastUpdateAgent: "",
    userMail: "noob4@digitalchick.fr",
    closeTimestamp: ""
  },
  {
    id: 4,
    status: "Pending",
    lvl: 3,
    category: "Errors",
    tag: "500",
    agent: "Sirius B",
    lastUpdateTimestamp: "06/21/2021",
    lastUpdateAgent: "Sirius Black",
    userMail: "noob3@digitalchick.fr",
    closeTimestamp: ""
  },
  {
    id: 3,
    status: "Close",
    lvl: 3,
    category: "Errors",
    tag: "404",
    agent: "Sirius Black",
    lastUpdateTimestamp: "06/21/2021",
    lastUpdateAgent: "Sirius Black",
    userMail: "noob@digitalchick.fr",
    closeTimestamp: "06/21/2021"
  },
  {
    id: 2,
    status: "Close",
    lvl: 1,
    category: "Account",
    tag: "Forgotten password",
    agent: "Sirius Black",
    lastUpdateTimestamp: "06/20/2021",
    lastUpdateAgent: "Sasha Ketchum",
    userMail: "noob2@digitalchick.fr",
    closeTimestamp: "06/20/2021"
  },
  {
    id: 1,
    status: "Close",
    lvl: 1,
    category: "Account",
    tag: "Forgotten password",
    agent: "Sasha Ketchum",
    lastUpdateTimestamp: "06/20/2021",
    lastUpdateAgent: "Sasha Ketchum",
    userMail: "noob@digitalchick.fr",
    closeTimestamp: "06/20/2021"
  }
];
