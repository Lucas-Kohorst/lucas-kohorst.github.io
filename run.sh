#!/bin/bash
docker run --rm -p 4000:4000 -v "$PWD":/srv/jekyll -w /srv/jekyll jekyll/builder jekyll serve --host 0.0.0.0
