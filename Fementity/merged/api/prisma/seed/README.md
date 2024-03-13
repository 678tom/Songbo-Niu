# Database Seeding

## Pre-Req Setup

### Install WSL2

_*Note: This installation works only for Windows 11*_

For detailed instructions visit [here](https://docs.microsoft.com/en-us/windows/wsl/install).

After installing WSL, navigate to the Windows Store and install the Ubuntu WSL
instance which can be found [here](https://www.microsoft.com/en-ca/p/ubuntu/9pdxgncfsczv?activetab=pivot:overviewtab).

### Installing Docker Desktop

Download the latest version of Docker Desktop which can be found [here](https://www.docker.com/products/docker-desktop/).

## Script Pre-Req Setup

### Loading script files

1. Download latest version of the project which can be found
   [here](https://github.com/CSCIX691DAL/fementity).
   - Click `Code` and select `Download as ZIP`
2. Open `File Explorer` and enter `\\wsl$` in the address bar, click on the
   Ubuntu icon.
3. Click on the `home` directory, then continue into the directory with your given
   username.
4. Extract the files from the zip, then drag and drop the folder into the opened
   directory.
5. Download a `csv` of the business data spread sheet. Rename the file to
   `data.csv`. Copy the `data.csv` file to the copied project sub-directory:
   `fementity/merged/api/prisma/seed`.
6. Get the `Public IP address` from this [link](https://console.cloud.google.com/sql/instances/fementity-database/overview?project=fementity).
7. Create a `env.txt` file in the `merged/api` directory and enter the following
   value: `DATABASE_URL=postgresql://<db username>:<db password>@<public ip addresss>/fementity?schema=fementity`
8. Rename the `env.txt` to `.env`. (accept any warnings that may pop up)

### Pre-Req Programs

1. Open a Ubuntu terminal
2. Run: `sudo apt install postgresql postgresql-contrib`

## Running The Script

### Docker Image Setup

1. Ensure Docker Desktop is running
2. Open a Ubuntu terminal
3. Change directory to the merged directory by running `cd ~/fementity/merged`
4. Run the following command: `docker build -t fementity_seed -f Dockerfile.seed .`

### Running the Script

1. Open two Ubuntu terminals
2. In the other terminal run: `docker run fementity_seed`
