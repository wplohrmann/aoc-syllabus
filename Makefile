SHELL := /bin/bash

.PHONY: build
build:
	make version
	yarn build
	yarn export
	touch docs/.nojekyll
	git add docs/
	git commit -m "Build"

.PHONY: run
run:
	yarn dev

.PHONY: version
version:
	echo 'export default function Version() { return "' $$(git rev-parse --short HEAD) '" }' > pages/version.js
