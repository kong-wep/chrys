# Chrys

Image-set viewer for viewing manga, comics, and doujinshi

## Installing

First install npm packages

    npm install

Optionally, make edit to the consts file in `/src/lib/consts.ts`

Then build the project

    npm run build

Finally, run the projct

    node ./build/index.js

## Development

In a development environment

    npm run dev

## Docker

First build the project, then run

    docker build -t toftpokk/chrys .