import os
import subprocess
import urllib.request

currentFilePath = os.path.dirname(os.path.abspath(__file__))

if not os.path.isfile(os.path.join(currentFilePath, "openapi-codegen-cli.jar")):
    openapi_codegen_url = "http://central.maven.org/maven2/org/openapitools/openapi-generator-cli/4.2.0/openapi-generator-cli-4.2.0.jar"
    urllib.request.urlretrieve(openapi_codegen_url, "openapi-codegen-cli.jar")

if not os.path.exists("api"):
    os.mkdir("api")

if not os.path.exists("api/dtos"):
    os.mkdir("api/dtos")

if not os.path.exists("api/axios"):
    os.mkdir("api/axios")

subprocess.call(["java",
                 "-Dmodels",
                 "-DmodelDocs=false",
                 "-DmodelTests=false",
                 "-jar",
                 os.path.join(currentFilePath, "openapi-codegen-cli.jar"),
                 "generate",
                 "-i",
                 "openapi.yaml",
                 "-g",
                 "typescript-node",
                 "-o",
                 os.path.join(currentFilePath, "api/"),
                 "--model-package",
                 "dtos",
                 "--skip-validate-spec"])

subprocess.call(["java",
                 "-DapiDocs=false",
                 "-DapiTests=false",
                 "-jar",
                 os.path.join(currentFilePath, "openapi-codegen-cli.jar"),
                 "generate",
                 "-i",
                 "openapi.yaml",
                 "-g",
                 "typescript-axios",
                 "-o",
                 os.path.join(currentFilePath, "api/axios/"),
                 "--skip-validate-spec"])

subprocess.call(["git", "add", os.path.join(currentFilePath, "api")])
