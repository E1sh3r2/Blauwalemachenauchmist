def main():
    text = ""
    file = open("./questions.markdown", "r")
    text = text.join(file.readlines())
    print(text)
    file.close()
    paragraphs = text.split("\n\n")
    json = []
    for question_id, paragraph in enumerate(paragraphs):
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
            for fragment_nr, fragment in enumerate(fragments):
                if len(fragments) == fragment_nr + 1:
                    continue
                if fragment_nr % 2 == 0:
                    part += fragment + "<strong>"
                else:
                    part += fragment + "</strong>"
            parts[index] = part
        part = {"id": question_id, "question": parts[0], "answer": parts[1]}
        json.append(part)
    json = str(json)
    json = "const questions = " + json
    file = open("questions.js", "w")
    file.write(json)
    file.close()


if __name__ == '__main__':
    main()
