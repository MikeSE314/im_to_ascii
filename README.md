# Image to ASCII

A simple server to convert images to ASCII in the browser

## Requirements

Image to ASCII depends on ImageMagick and JP2A.

```bash
sudo apt update && sudo apt install -y imagemagick jp2a
```

Install other dependencies through npm:

```bash
npm i
```

## Running

You can set the port with the `PORT` environment variable. Run the program with `./bin/www`:

```bash
./bin/www
# OR
export PORT=3000; ./bin/www
```
