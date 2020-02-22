import os
import subprocess
import urllib.request

currentFilePath = os.path.dirname(os.path.abspath(__file__))

if not os.path.isfile(os.path.join(currentFilePath, "openapi-codegen-cli.jar")):
    openapi_codegen_url = "http://central.maven.org/maven2/org/openapitools/openapi-generator-cli/4.2.0/openapi-generator-cli-4.2.0.jar"
    urllib.request.urlretrieve(openapi_codegen_url, "openapi-codegen-cli.jar")

if not os.path.exists("src"):
    os.mkdir("src")

if not os.path.exists("src/node"):
    os.mkdir("src/node")

if not os.path.exists("src/axios"):
    os.mkdir("src/axios")

# subprocess.call(["java",
#                  "-Dmodels",
#                  "-DmodelDocs=false",
#                  "-DmodelTests=false",
#                  "-jar", os.path.join(currentFilePath, "openapi-codegen-cli.jar"),
#                  "generate",
#                  "-i", "openapi.yaml",
#                  "-g", "typescript-node",
#                  "-o", os.path.join(currentFilePath, "src/node"),
#                  "--skip-validate-spec"])

subprocess.call(["java",
                 "-DapiDocs=false",
                 "-DapiTests=false",
                 "-jar", os.path.join(currentFilePath, "openapi-codegen-cli.jar"),
                 "generate",
                 "-i", "openapi.yaml",
                 "-g", "typescript-axios",
                 "-o", os.path.join(currentFilePath, "src/axios/"),
                 "--skip-validate-spec"])

open(os.path.join(currentFilePath, './src/index.ts'), 'w+')

# with open(os.path.join(currentFilePath, './src/index.ts'), 'w+') as indexFile:
#     indexFile.truncate(0)
#     indexFile.write("import * as axiosApi from './axios/api';\n")
#     indexFile.write("export const AxiosApi = axiosApi;\n")
#     for modelFile in os.listdir(os.path.join(currentFilePath, './src/node/model')):
#         indexFile.write("export * from './node/model/"+modelFile[0:len(modelFile)-3]+"';\n")

subprocess.call(["git", "add", os.path.join(currentFilePath, "src")])
