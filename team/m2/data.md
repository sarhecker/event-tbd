# Data Overview

The `data.md` file outlines the key types of data that our web application will handle, including user-generated content, event details, and system-generated visual representations. This document provides a high-level overview of the data critical to the functionality of the application. It focuses on data types, attributes, relationships between data, and data sources, offering a comprehensive guide to the structure of the data used in the system.

---

### 2.1 **User Profile**
- **Description**: This data type captures key information about the users of the application, such as account details and personal preferences.
- Attributes: 
    - `Username` (String): Unique identifier for the user’s account.
    - `Password` (String): Credential for account security.
    - `Hobbies` (String): Describes the type of exercise or activity the user is interested in.
    - `Location` (String): The geographical area where the user prefers to participate in events.

### 2.2 **Individual User**
- **Description**: Contains personal event preferences and social connections with other users.
- Attributes: 
    - **Interests Event Lists**
    - `Dates` (String): The date of the event the user is interested in.
    - `Locations` (String): The location of the interested event.
    - **Calendar**
    - Integration feature for users to add events to personal calendars (e.g., Google Calendar).
    - **Friends**: List of other users the individual user is connected with

### 2.3 **Events**
- **Description**: Stores details about events such as dates, locations, participants, and any restrictions or fees involved.
- Attributes: 
    - **Past Events**: Stores data on events that have already occurred.
    - **Upcoming Events**: Information on events scheduled for the future.
    - **People Joining (Population)**: Number of users participating in the event.
    - **Dates** (String): Date of the event.
    - **Locations** (String): Venue or area where the event will take place.
    - **Plan** (String): Description of the activities or agenda for the event.
    - **Restrictions** (String): Information about any restrictions (age limits, fitness requirements, etc.).
    - **Fee** (Integer): Cost to participate in the event, if any.

### 2.4 **Heat Maps**
- **Description**: Provides a graphical representation of user interests or event hotspots on a map.
- Attributes: 
    - **Visual Representation**: Displays user interest or event density on a geographical map, providing a spatial understanding of where events or users are concentrated.
---

## 3. Relationships Between Data

- **User Profile & Individual User**: The profile data (e.g., hobbies and location) informs the individual user's event preferences and recommendations.
- **Individual User & Events**: The list of interested events is linked with specific event details, such as dates and locations from the events data.
- **Events & Heat Maps**: Event locations can be visualized on heat maps to show areas of high activity or user interest.
- **Individual User & Heat Maps**: The user’s location preference can be linked to the heat map to highlight regions they might be interested in.

---

## 4. Data Sources

- **User Input**: Data related to user profiles, interests, and personal event preferences will be collected through user inputs.
- **Third-Party APIs**: Heat maps and location-based data will rely on third-party mapping services (such as Google Maps API or similar tools) to visualize user interest and event locations on a map.
- **System-Generated Data**: The application will generate heat maps and other analytics based on user interaction data and event statistics.
