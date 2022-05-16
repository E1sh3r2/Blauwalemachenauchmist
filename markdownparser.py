def main():
    text = ""
    file = open("./questions.markdown", "r")
    text = text.join(file.readlines())
    file.close()
    paragraphs = text.split("\n\n")
    json = []
    for paragraph in paragraphs:
        paragraph = paragraph.replace("Frage: ", "")
        parts = paragraph.split("Antwort:")
        for index, part in enumerate(parts):
            part = part.replace("\n", "<br>")
            part = part.replace("      - ", "&emsp;&emsp;&emsp;&bull; ")
            part = part.replace("    - ", "&emsp;&emsp;&bull; ")
            part = part.replace("  - ", "&emsp;&bull; ")
            part = part.replace("- ", "&bull; ")
            part = part.replace("->", "&rarr;")
            fragments = part.split("**")
            for fragmentNr, fragment in enumerate(fragments):
                if len(fragments) == fragmentNr + 1:
                    continue
                if fragmentNr % 2 == 0:
                    part += fragment + "<strong>"
                else:
                    part += fragment + "</strong>"
            parts[index] = part
        part = {"question": parts[0], "answer": parts[1]}
        json.append(part)
    json = str(json)
    print(json)
    json = "const questions = " + json
    file = open("questions.js", "w")
    file.write(json)
    file.close()


if __name__ == '__main__':
    main()
