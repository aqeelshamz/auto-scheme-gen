const eventsSampleData = [
  {
    members: {
      ISH: 0,
      SI: 0,
      CPO: 0,
      ICPO: 0,
    },
    boundary: {
      type: 2,
      data: [
        {
          lat: 10.52724489503287,
          lng: 76.19269249580081,
        },
        {
          lat: 10.545978017231691,
          lng: 76.20024559638675,
        },
        {
          lat: 10.545809255451871,
          lng: 76.2253081574219,
        },
        {
          lat: 10.528088753862352,
          lng: 76.23732445380863,
        },
        {
          lat: 10.508341852283532,
          lng: 76.22856972358402,
        },
        {
          lat: 10.508679416769048,
          lng: 76.20196221015628,
        },
      ],
    },
    _id: "64448ff14887f1b46ef1e869",
    name: "Sample Event",
    startDate: "2023-12-24T18:30:00.000Z",
    endDate: "2023-12-30T18:30:00.000Z",
    color: "#16ab74",
    type: 1,
    createdAt: "2023-04-23T01:54:57.825Z",
    updatedAt: "2023-04-23T02:25:08.589Z",
    __v: 0,
  },
  {
    members: {
      ISH: 0,
      SI: 0,
      CPO: 0,
      ICPO: 0,
    },
    boundary: {
      type: 1,
      data: {
        south: 10.511379919371432,
        west: 76.19887230537113,
        north: 10.544796682829698,
        east: 76.23097298286136,
      },
    },
    _id: "6444904b4887f1b46ef1e86c",
    name: "Thrissur Pooram",
    startDate: "2023-11-19T18:30:00.000Z",
    endDate: "2023-11-23T18:30:00.000Z",
    color: "#f29018",
    type: 3,
    createdAt: "2023-04-23T01:56:27.072Z",
    updatedAt: "2023-04-23T02:25:41.974Z",
    __v: 0,
  },
  {
    members: {
      ISH: 0,
      SI: 0,
      CPO: 0,
      ICPO: 0,
    },
    _id: "6444908b4887f1b46ef1e86f",
    name: "New Year Program",
    startDate: "2023-12-30T18:30:00.000Z",
    endDate: "2023-12-31T18:30:00.000Z",
    color: "#1889f2",
    type: 3,
    createdAt: "2023-04-23T01:57:31.848Z",
    updatedAt: "2023-04-23T01:57:31.848Z",
    __v: 0,
  },
  {
    members: {
      ISH: 0,
      SI: 0,
      CPO: 0,
      ICPO: 0,
    },
    _id: "644490bf4887f1b46ef1e872",
    name: "VIP Event",
    startDate: "2023-08-10T18:30:00.000Z",
    endDate: "2023-08-10T18:30:00.000Z",
    color: "#7718f2",
    type: 1,
    createdAt: "2023-04-23T01:58:23.609Z",
    updatedAt: "2023-04-23T01:58:23.609Z",
    __v: 0,
  },
];

const sectorsSampleData = [
  {
    _id: "64449392d6f25270c77ef520",
    name: "Sector A",
    color: "#fc3a88",
    data: [
      {
        lat: 10.52724489503287,
        lng: 76.19269249580081,
      },
      {
        lat: 10.545978017231691,
        lng: 76.20024559638675,
      },
      {
        lat: 10.545809255451871,
        lng: 76.2253081574219,
      },
      {
        lat: 10.528088753862352,
        lng: 76.23732445380863,
      },
      {
        lat: 10.508341852283532,
        lng: 76.22856972358402,
      },
      {
        lat: 10.508679416769048,
        lng: 76.20196221015628,
      },
    ],
    eventId: "6444950f0d70ce26c2bc237d",
    __v: 0,
    type: 2,
  },
  {
    _id: "644493ced6f25270c77ef522",
    name: "Sector B",
    color: "#d6fc3a",
    data: {
      south: 10.511379919371432,
      west: 76.19887230537113,
      north: 10.544796682829698,
      east: 76.23097298286136,
    },
    eventId: "64448ff14887f1b46ef1e869",
    __v: 0,
    type: 1,
  },
  {
    _id: "644493f0d6f25270c77ef524",
    name: "Sector C",
    color: "#fc4a3a",
    data: {
      south: 10.531970474725403,
      west: 76.20015976569827,
      north: 10.543615343893695,
      east: 76.22968552253421,
    },
    eventId: "64448ff14887f1b46ef1e869",
    __v: 0,
    type: 1,
  },
  {
    _id: "6444944ed6f25270c77ef526",
    name: "First sector",
    color: "#fc4a3a",
    data: {
      south: 10.531970474725403,
      west: 76.20015976569827,
      north: 10.543615343893695,
      east: 76.22968552253421,
    },
    eventId: "6444904b4887f1b46ef1e86c",
    __v: 0,
    type: 1,
  },
  {
    _id: "6444946dd6f25270c77ef528",
    name: "Second sector",
    color: "#3a7efc",
    data: {
      south: 10.512013806076538,
      west: 76.20024674486626,
      north: 10.531422933419412,
      east: 76.21024602007378,
    },
    eventId: "6444904b4887f1b46ef1e86c",
    __v: 0,
    type: 1,
  },
];

export default { eventsSampleData, sectorsSampleData };
