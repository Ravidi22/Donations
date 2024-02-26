export interface User {
  name: string;
  id: string;
  organization: string;
  parters: User[];
}

export const Users: User[] = [
  {
    name: "אביגיל ביטון",
    id: "642089589",
    organization: "סיסקו ישראל",
    parters: [],
  },
  {
    name: "דליה ביטון",
    id: "579622851",
    organization: "סיסקו ישראל",
    parters: [],
  },
  {
    name: "אביגיל כהן",
    id: "355443163",
    organization: "טכניון",
    parters: [],
  },
  {
    name: "גדי פישר",
    id: "838534356",
    organization: "מיקרוסופט ישראל",
    parters: [],
  },
  {
    name: "גדי כהן",
    id: "268134788",
    organization: "מיקרוסופט ישראל",
    parters: [],
  },
  {
    name: "הדס בר",
    id: "399159392",
    organization: "אינטל",
    parters: [],
  },
  {
    name: "טל פרץ",
    id: "426068111",
    organization: "אינטל",
    parters: [],
  },
  {
    name: "דליה לוי",
    id: "627705938",
    organization: "מיקרוסופט ישראל",
    parters: [],
  },
  {
    name: "אביגיל מזרחי",
    id: "908732073",
    organization: "מיקרוסופט ישראל",
    parters: [],
  },
  {
    name: "זהבה כהן",
    id: "085265721",
    organization: "אמזון ישראל",
    parters: [],
  },
];
