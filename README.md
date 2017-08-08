# The-Munching-VASS

#### Web application for FACN to view and contribute to the cooking schedule in the guesthouse.

##### Open the app on Heroku:

##### How to run our app:

#### User Stories:
As a member of FACN who wants to cook at the guesthouse I want to:
* Add chef and sous-chef to a certain date
* Add type of meal that’s being cooked

As a member of FACN who is interested in coming over to eat I can:
* Browse the cooking schedule, including what is being made
* Add myself as someone who is coming to eat

#### Stretch Goals:
* New participants can add themselves to the name list
* participants would be able to delete themselves from duties or dinners

#### Schema:
#### Cooking

id   | chef_id | sous-chef_id | meal
------------- | -------------
1  | 4 | 7 | "Rice and Tofu"
2  | 3 | 1 | "Maqluba"

#### People

id   | name
---- | ----
1  | "Sajeda"
2  | "Amy"

#### Participants

date_id   | participant_id
---- | ----
1  | 3
1  | 18
2  | 6

#### Code Guidelines:
* camelCase for all variable names
* Use classes for CSS and ID's for JS
* Comments for code clarification
* Remove all unnecessary console.log

#### Team Checklist:
* Make initial software architecture
* Create psql database
* Create back-end server
* Create front-end layout
* Establish Heroku
* Eat knafe :grinning:

#### Our software architecture:
Software Architecture

#### Our app Sketch:
Sketch
