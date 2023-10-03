API Documentation: Sector Management

This API provides endpoints to manage sectors, including creating, updating, deleting, and retrieving sectors. It also includes functionality to retrieve sectors of an event.

---

### Sector API

The sector API provides endpoints to perform CRUD operations on sectors.

#### Create a New Sector

Create a new sector by sending a POST request to the `/` endpoint.

```http
POST /events/sectors
```

Request body:

```json
{
  "name": "Sector Name",
  "color": "#FF0000",
  "type": 1,
  "data": {},
  "eventId": "event_id"
}
```

- `name` (String, required): The name of the sector.
- `color` (String, required): The color of the sector.
- `type` (Number, required): The type of the sector. It can be either 1 (Rectangle) or 2 (Polygon).
- `data` (Mixed, required): Additional data associated with the sector. The type can be any data type.
- `eventId` (String, required): The ID of the event to which the sector belongs.

#### Get All Sectors

Retrieve all sectors by sending a GET request to the `/` endpoint.

```http
GET /events/sectors
```

#### Get Sectors of an Event (Sample)

Retrieve sectors of an event (sample data) by sending a POST request to the `/sample/:eventid` endpoint.

```http
POST /events/sectors/sample/:eventid
```

Response: An array of sectors belonging to the specified event.

#### Get Sectors by Event ID

Retrieve sectors by event ID by sending a POST request to the `/:eventid` endpoint.

```http
POST /events/sectors/:eventid
```

Response: An array of sectors belonging to the specified event.

#### Update a Sector

Update a sector by ID by sending a PUT request to the `/:id` endpoint.

```http
PUT /events/sectors/:id
```

Request body: The updated sector properties.

Response: The updated sector object.

#### Delete a Sector

Delete a sector by ID by sending a DELETE request to the `/:id` endpoint.

```http
DELETE /events/sectors/:id
```

Response: A success message indicating that the sector was deleted successfully.
