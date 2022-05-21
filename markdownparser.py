def main():
    content = ""
    with open("./questions.markdown", "r", encoding="utf-8") as file:
        content = content.join(file.readlines())

    paragraphs = content.split("\n\n")
    json_objects = []
    for question_id, paragraph in enumerate(paragraphs):
        paragraph = paragraph.replace("Frage: ", "")
        [question, answer] = paragraph.split("Antwort:")

        question = question.replace("\n", "")
        json_object = {
            "id": question_id,
            "question": f"<h1>{question}</h1>",
            "answer": answer
        }
        json_objects.append(json_object)

    js_object = "const questions = " + str(json_objects)

    with open("questions.js", "w", encoding="utf-8") as file:
        file.write(js_object)


if __name__ == '__main__':
    main()
