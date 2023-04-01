#!/bin/bash

echo "$(echo '#!/usr/bin/env node' | cat - dist/cli.js)" > dist/cli.js
chmod +x dist/cli.js
