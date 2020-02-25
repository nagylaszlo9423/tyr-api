import os
import subprocess
import urllib.request


currentFilePath = os.path.dirname(os.path.abspath(__file__))


def create_index_file(modules_relative_path, index_file_path):
    with open(os.path.join(currentFilePath, index_file_path, 'index.ts'), 'w+') as index_file:
        index_file.truncate(0)
        for modelFile in os.listdir(os.path.join(currentFilePath, index_file_path, modules_relative_path)):
            index_file.write("export * from '" + os.path.join(modules_relative_path, modelFile[0:len(modelFile)-3]) + "';\n")


if not os.path.isfile(os.path.join(currentFilePath, "openapi-codegen-cli.jar")):
    openapi_codegen_url = "https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/4.2.3/openapi-generator-cli-4.2.3.jar"
    urllib.request.urlretrieve(openapi_codegen_url, "openapi-codegen-cli.jar")

if not os.path.exists("src"):
    os.mkdir("src")

# if not os.path.exists("src/node"):
#     os.mkdir("src/node")

if not os.path.exists("src/rxjs"):
    os.mkdir("src/rxjs")

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
                 "-g", "typescript-rxjs",
                 "-o", os.path.join(currentFilePath, "src/rxjs/"),
                 "--skip-validate-spec"])

create_index_file("./", "./src/rxjs/models")
create_index_file("./", "./src/rxjs/apis")

with open(os.path.join(currentFilePath, './src/index.ts'), 'w+') as indexFile:
    indexFile.truncate(0)
    indexFile.write("import * as rxjsTyrApi from './rxjs/apis';\n")
    indexFile.write("export default rxjsTyrApi;\n")
#     for modelFile in os.listdir(os.path.join(currentFilePath, './src/node/model')):
#         indexFile.write("export * from './node/model/"+modelFile[0:len(modelFile)-3]+"';\n")

subprocess.call(["git", "add", os.path.join(currentFilePath, "src")])
