## Installation

1. configure a web-server to host `index.php`

2. Amend `server_url` in `popup.js` to the URL of `index.php`

3. import the extension directory to Chrome as normal

## Usage

Just click button when on a tweet or twitter profile that you want to log. A popup dialogue will open to input any tags you want to declare. The Twitter URL and tags will be sent as a string query to the server to be logged. Data can be accessed with `server_url/data.csv`.
