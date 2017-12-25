# Very simple docker nodejs markdown notebook

## Install

The notebook runs behind a reverse proxy on my server, so there's no port mapped to localhost. The http server is listening on port 3010.

Markdown files are sorted by name descending. Put the date at the beginning of the file, like so: "171225", and the newest post is always the first on the page.

All files are read when the container starts and kept in memory during runtime.

The app is started with "forever -w", so if a file changes, it restarts automatically.

- Clone repository
- run "docker-compose up -d"
- create markdown files in notes folder. 

That should do the trick. 

## TODO

- pagination
