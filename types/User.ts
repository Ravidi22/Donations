export interface User {
  name: string;
  id: number;
  organization: string;
  partners: User[];
}

export const Users: User[] = [
  {
    name: "אביגיל ביטון",
    id: 642089589,
    organization: "סיסקו ישראל",
    partners: [],
  },
  {
    name: "דליה ביטון",
    id: 579622851,
    organization: "סיסקו ישראל",
    partners: [],
  },
  {
    name: "אביגיל כהן",
    id: 355443163,
    organization: "טכניון",
    partners: [],
  },
  {
    name: "גדי פישר",
    id: 838534356,
    organization: "מיקרוסופט ישראל",
    partners: [],
  },
  {
    name: "גדי כהן",
    id: 268134788,
    organization: "מיקרוסופט ישראל",
    partners: [],
  },
  {
    name: "הדס בר",
    id: 399159392,
    organization: "אינטל",
    partners: [],
  },
  {
    name: "טל פרץ",
    id: 426068111,
    organization: "אינטל",
    partners: [],
  },
  {
    name: "דליה לוי",
    id: 627705938,
    organization: "מיקרוסופט ישראל",
    partners: [],
  },
  {
    name: "אביגיל מזרחי",
    id: 908732073,
    organization: "מיקרוסופט ישראל",
    partners: [],
  },
  {
    name: "זהבה כהן",
    id: 185265721,
    organization: "אמזון ישראל",
    partners: [],
  },
];
