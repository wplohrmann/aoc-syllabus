SHELL := /bin/bash

.PHONY: build
build:
	yarn build
	yarn export

.PHONY: run
run:
	yarn dev

.PHONY: version
version:
	echo 'export default function Version() { return "' $$(git rev-parse --short HEAD) '" }' > pages/version.js
