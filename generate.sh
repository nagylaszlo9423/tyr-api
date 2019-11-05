java -Dmodels -DmodelDocs=false -jar openapi-generator-cli.jar generate -i swagger.yaml -g typescript-node -o api --model-package dtos
git add ./api/*
