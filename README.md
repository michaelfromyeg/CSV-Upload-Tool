# CSV-Upload-Tool
This project aims to be a React component integrable into any site allowing users to upload CSV data and match their headers to pre-assigned JSON headers. It's build using React and Bootstrap for the frontend, and Flask for the backend. Eventually, the JSON data will be written to an SQLite database.

## Get it running on your machine
1. First, clone the repository to your computer.
2. Navigate to `react-frontend` and run `npm -i` and `npm run build`. This will build the current version of the project to the folder Flask will eventually serve.
3. `cd ..` and then move into the `flask-backend` directory. Install Flask if you haven't already using pip, and then begin the server by running `python main.py`.

## Use cases
This tool is being developed for [Artesian Software](https://artesiansoft.com/), a Industrial IoT solution provider based in Alberta. The tool will allow farmers to upload their sensor data to Artensian's servers with an easy to use interface. 
