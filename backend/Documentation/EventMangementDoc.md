API Documentation: Event Management

This API provides endpoints to manage events, including creating, updating, deleting, and retrieving events. It also includes functionality to update and retrieve the last opened event.

Base URL: `http://your-api-url.com`

## Authentication

Authentication is not required for accessing the endpoints in this API.

## Endpoints

### Get Events Sample

Get a sample of events for testing purposes.

- Method: GET
- URL: `/events/sample`

#### Response

- Status: 200 OK
- Body:

```json
[
  {
    "name": "Event 1",
    "startDate": "2023-05-21T08:00:00.000Z",
    "endDate": "2023-05-21T12:00:00.000Z",
    "color": "#ff0000",
    "type": 1,
    "_id": "event_id_1",
    "createdAt": "2023-05-20T10:00:00.000Z",
    "updatedAt": "2023-05-20T10:00:00.000Z"
  },
  {
    "name": "Event 2",
    "startDate": "2023-05-22T10:00:00.000Z",
    "endDate": "2023-05-22T15:00:00.000Z",
    "color": "#00ff00",
    "type": 2,
    "_id": "event_id_2",
    "createdAt": "2023-05-20T11:00:00.000Z",
    "updatedAt": "2023-05-20T11:00:00.000Z"
  }
]
```

---

### Get All Events

Get all events.

- Method: GET
- URL: `/events`

#### Response

- Status: 200 OK
- Body:

```json
[
  {
    "name": "Event 1",
    "startDate": "2023-05-21T08:00:00.000Z",
    "endDate": "2023-05-21T12:00:00.000Z",
    "color": "#ff0000",
    "type": 1,
    "_id": "event_id_1",
    "createdAt": "2023-05-20T10:00:00.000Z",
    "updatedAt": "2023-05-20T10:00:00.000Z"
  },
  {
    "name": "Event 2",
    "startDate": "2023-05-22T10:00:00.000Z",
    "endDate": "2023-05-22T15:00:00.000Z",
    "color": "#00ff00",
    "type": 2,
    "_id": "event_id_2",
    "createdAt": "2023-05-20T11:00:00.000Z",
    "updatedAt": "2023-05-20T11:00:00.000Z"
  }
  // ...more events
]
```

---

### Get Event by ID

Get a single event by its ID.

- Method: GET
- URL: `/events/:id`

#### Parameters

- `id` (required): The ID of the event.

#### Response

- Status: 200 OK
- Body:

```json
{
  "name": "Event 1",
  "startDate": "2023-05-21T08:00:00.000Z",
  "endDate": "2023-05-21T12:00:00.000Z",
  "

color": "#ff0000",
  "type": 1,
  "_id": "event_id_1",
  "createdAt": "2023-05-20T10:00:00.000Z",
  "updatedAt": "2023-05-20T10:00:00.000Z"
}
```

---

### Create a New Event

Create a new event.

- Method: POST
- URL: `/events`

#### Request Body

- `name` (required): The name of the event.
- `startDate` (required): The start date of the event (format: "YYYY-MM-DD").
- `endDate` (required): The end date of the event (format: "YYYY-MM-DD").
- `color` (required): The color of the event (e.g., "#ff0000").
- `type` (required): The type of the event (1 = VIP, 2 = Private, 3 = Public).

#### Response

- Status: 200 OK
- Body:

```json
{
  "name": "Event 3",
  "startDate": "2023-05-23T10:00:00.000Z",
  "endDate": "2023-05-23T15:00:00.000Z",
  "color": "#0000ff",
  "type": 3,
  "_id": "event_id_3",
  "createdAt": "2023-05-20T12:00:00.000Z",
  "updatedAt": "2023-05-20T12:00:00.000Z"
}
```

---

### Update an Existing Event

Update an existing event by its ID.

- Method: PUT
- URL: `/events/:id`

#### Parameters

- `id` (required): The ID of the event.

#### Request Body

You can include any properties you want to update in the event object.

#### Response

- Status: 200 OK
- Body:

```json
{
  "name": "Event 1 (Updated)",
  "startDate": "2023-05-21T08:00:00.000Z",
  "endDate": "2023-05-21T12:00:00.000Z",
  "color": "#ff0000",
  "type": 1,
  "_id": "event_id_1",
  "createdAt": "2023-05-20T10:00:00.000Z",
  "updatedAt": "2023-05-20T13:00:00.000Z"
}
```

---

### Delete an Event

Delete an event by its ID.

- Method: DELETE
- URL: `/events/:id`

#### Parameters

- `id` (required): The ID of the event.

#### Response

- Status: 200 OK
- Body:

```json
{
  "message": "Event deleted"
}
```

---

### Update Last Opened Event

Update the last opened event by its ID.

- Method: POST
- URL: `/events/:id/recent`

#### Parameters

- `id` (required): The ID of the event.

#### Response

- Status: 200 OK
- Body:

```json
{
  "message": "recent event updated successfully"
}
```

---

### Get Last Opened Event

Get the last opened event by its ID.

- Method: GET
- URL: `/events/recent`

#### Response

- Status: 200 OK
- Body:

Reponse will have 5 recent events.

