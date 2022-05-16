const questions = [{
    'question': 'Definition Projekt<br>',
    'answer': ' <br>&bull; Einmaliges Vorhaben<br>&bull; Fester Start&bull; und Endzeitpunkt<br>&bull; Begrenzte Ressourcen (Zeit, Personal, Budget)<br>&bull; Gewisse Komplexität<br>&bull; Qualitätsanspruch'
}, {
    'question': 'Definition Magisches Dreieck (Projekt)  <br>',
    'answer': '<br><img src="./images/magisches_dreieck.png"/><br>&bull; Leistung<br>&bull; Aufwand<br>&bull; Zeit<br>&bull; nicht alle 3 Faktoren können gleichzeitig erfüllt werden'
}, {
    'question': 'Beschreibe Software-Kriterien<br>',
    'answer': ' Funktionalität &bull; Umfang der Software\\n<br>&bull; Zuverlässigkeit<br>&emsp;&bull; Identische Funktionalität <br>&emsp;&bull; Über lange Zeiträume<br>&bull; Benutzbarkeit <br>&emsp;&bull; Usability <br>&emsp;&bull; Software einfach zu nutzen <br>&emsp;&bull; Intuitive Anwendung<br>&bull; Effizienz <br>&emsp;&bull; Software benötigt wenig Ressourcen <br>&emsp;&bull; Hohe Lauffähigkeit und Arbeitsleistung<br>&bull; Änderbarkeit <br>&emsp;&bull; Modularer und klar strukturierte Software<br>&emsp;&bull; Einfache Erweiterung der Software<br>&bull; Übertragbarkeit <br>&emsp;&bull; Übertragbarkeit auf andere Betriebssysteme <br>&emsp;&bull; Responsive <br>&bull; Portabilität<br>&bull; Robustheit<br>&bull; Verifizierbarkeit<br>&bull; Integrität'
}, {
    'question': 'Nennen Sie die Säulen der Objekt Orientierung?<br>',
    'answer': ' <br>&bull; Verkapselung:<br>&emsp;&bull; Auf Methoden und Variablen können unterschiedlich zugegriffen werden<br>&emsp;&emsp;&bull; Private<br>&emsp;&emsp;&emsp;&bull; nur innerhalb in der Klasse, nicht vererbbar <br>&emsp;&emsp;&bull; Public <br>&emsp;&emsp;&emsp;&bull; außerhalb der Klasse sowie Unterklassen<br>&emsp;&emsp;&bull; Package<br>&emsp;&emsp;&emsp;&bull; innerhalb des gleichen Pakets <br>&emsp;&emsp;&bull; Protected<br>&emsp;&emsp;&emsp;&bull; für Klassen und Unterklassen (vererbte Klassen) sichtbar<br>&bull; Vererbung:<br>&emsp;&bull; Unterklassen erben Methoden und Verhalten von Oberklassen<br>&emsp;&bull; Unterklassen können Methoden von der Oberklasse überschreiben <br>&emsp;&bull; Generalisierung, Spezialisierung <br>&bull; Polymorphie (Vielgestaltigkeit):<br>&emsp;&bull; Poly = viele, morph = Form <br>&emsp;&bull; Implementierung von Oberklassen Methoden<br>&emsp;&bull; Methoden können überschrieben werden<br>&bull; Abstraktion:<br>&emsp;&bull; Die anderen Säulen sind eine Form der Abstraktion <br>&emsp;&bull; Bei der Modellierung werden bewusst bestimmte Eigenschaften „verborgen“ <br>&emsp;&bull; Nur notwendige Eigenschaften bleiben behalten'
}, {
    'question': '<br>Was ist ein Objekt?,<br>',
    'answer': '<br>&bull; Objekt <br>&emsp;&bull; Instanz von einer Klasse („new …“)<br>&emsp;&bull; Über Attribute eindeutig beschreibbar <br>&emsp;&bull; Verfügen über eine Lebensdauer'
}, {
    'question': '<br>Was ist eine Klasse?  <br>',
    'answer': '<br>&bull; Bauplan für ein Objekt'
}, {
    'question': '<br>&bull; Was ist ein Interface (OOP)  <br>',
    'answer': '<br>&bull; „Vertrag“ zwischen Klassen – Vorgabe für Implementierung von Klassen<br>&bull; Verwendung für fehlende Mehrfachvererbung'
}, {
    'question': '<br>Nenne Objektorientierte Sprachen  <br>',
    'answer': '<br>-\t[C++, C#, JAVA, Python, PHP, Perl, Go, Ruby]'
}, {
    'question': '<br>Was macht ein Compiler?  <br>',
    'answer': '<br>&bull; Kompiliert/übersetzt Quellcode in Maschinencode<br>&bull; Moderne Programmiersprachen arbeiten mit Bytecode (Java, C#)<br>&bull; Reine Compilersprachen sind C, C++ und Pascal<br>&bull; Extravagant: JIT-Compiler kompilieren den Code zur Laufzeit<br>&bull; Vorteil:<br>&emsp;&bull; Schneller, da die Hardware direkt angesprochen wird und kein Interpreter dazwischen liegt. Analyse wird zur compile-Zeit durchgeführt<br>&bull; Nachteile:<br>&emsp;&bull; Geringe bis keine Portabilität'
}, {
    'question': '<br>Was ist Interpreter?  <br>',
    'answer': '<br>&bull; Interpretiert/(führt) Anweisungen zur Laufzeit (aus)<br>&bull; Sequenziell (Zeile für Zeile)<br>&bull; Fehler werden erst zur Laufzeit erkannt<br>&bull; Vorteil:<br>&emsp;&bull; Portabilität (Unabhängig vom OS)<br>&emsp;&bull; Einfachere Fehlersuche aufgrund von Line-By-Line-Execution<br>&bull; Nachteile:<br>&emsp;&bull; Langsamer als kompilierte Programme, aufgrund der Analyse (Lexikalische, Syntaktisch) zur Laufzeit<br>&emsp;&bull; Fehler treten erst zur Laufzeit auf'
}, {
    'question': '<br>Nenne 3 Vorgehensmodelle  <br>',
    'answer': '<br>&bull; Wasserfallmodell<br>&bull; V-Modell<br>&bull; Spiralmodell<br>&bull; Scrum'
}, {
    'question': '<br>Wie wird normalisiert?  <br>',
    'answer': '<br>&bull; 1 Normalform<br>&emsp;&bull; Atomare Wertebereiche (Name = Vorname, Nachname)<br>&bull; 2 Normalform<br>&emsp;&bull; 1 Normalform<br>&emsp;&bull; Alle nicht-schlüssel Attribute müssen voll funktional abhängig vom (zusammengesetzten) Schlüsselkandidaten sein<br>&bull; 3 Normalform<br>&emsp;&bull; 2 Normalform<br>&emsp;&bull; Keine transitiven (indirekten) Abhängigkeiten<br>&emsp;&bull; Relation/Relationale Datenbank'
}, {
    'question': '<br>Warum wird normalisiert?  <br>',
    'answer': '<br>&bull; Reduzierung oder Beseitigung von Redundanzen'
}, {
    'question': '<br>Was ist ein Primärschlüssel (Datenbanken)?  <br>',
    'answer': '<br>&bull; Eindeutiger Indikator eines Tupels <br>&bull; Kann aus mehreren Attributen bestehen'
}, {
    'question': '<br>Was ist ein Fremdschlüssel (Datenbanken)?  <br>',
    'answer': '<br>&bull; Verweist auf einen Primärschlüssel aus einem anderen Tupel'
}, {
    'question': '<br>Welche Beziehungen gibt es in einer Datenbank?  <br>',
    'answer': '<br>&bull; 1 – n &rarr; ein zu viele <br>&bull; n – 1 &rarr; viele zu eins <br>&bull; n – m &rarr; viele zu viele <br>&emsp;&bull; wird mit einer Zwischentabelle aufgelöst\t<br>&emsp;&bull; jeweils mit zwei 1 – n Beziehungen'
}, {
    'question': '<br>Was ist eine Anomalie (Datenbanken)?  <br>',
    'answer': '<br>&bull; Anomalien (aus dem Griechischen: Unregelmäßigkeit)<br>&bull; Eine Anomalie ist eine Abweichung vom Normalen'
}, {
    'question': '<br>Welche Anomalien gibt es (Datenbanken)?  <br>',
    'answer': '<br>&bull; Änderungsanomalie<br>&bull; Löschanomalie<br>&bull; Einfüge Anomalie<br>&emsp;&bull; Kann mittels der Referentiellen Integrität verhindert werden '
}, {
    'question': '<br>Was ist die Referentielle Integrität?  <br>',
    'answer': '<br>&bull; Referentielle Integrität <br>&emsp;&bull; Zu jedem Fremdschlüssel muss es immer einen dazugehörenden Primärschlüssel geben <br>&emsp;&bull; Verhindert Anomalien'
}, {
    'question': '<br>Was ist/macht ein Debugger?  <br>',
    'answer': '<br>&bull; Werkzeug zum Diagnostizieren und Auffinden von Fehlern im Programmcode/Computersystemen<br>&bull; Steuerung des Kontrollflusses (Haltepunkte)<br>&bull; Inspizieren von Daten/Registern'
}, {
    'question': '<br>Welche Testverfahren kennen Sie?  <br>',
    'answer': '<br>&bull; Whitebox <br>&emsp;&bull; Code ist bekannt<br>&bull; Blackbox <br>&emsp;&bull; Code ist nicht bekannt <br>&emsp;&bull; Verhalten nach Außen wird getestet  Annahme > erwartetes Ergebnis <br>&emsp;&bull; Codeabdeckung <br>&bull; Schreibtisch <br>&emsp;&bull; Analoger Test zum Verstehen von Algorithmen<br>  '
}, {
    'question': 'Welche Softwaretests kennen Sie?  <br>',
    'answer': '<br>&bull; Unterschied Tests (Modul, Integration, System)'
}, {
    'question': '<br>Was ist ein Modultest?  <br>',
    'answer': '<br>&bull; Modultests <br>&emsp;&bull; Sind die kleinste „Einheit“ bei Softwaretests <br>&emsp;&bull; Testen auf Korrektheit eines Moduls'
}, {
    'question': '<br>Was ist ein Integrationstests?  <br>',
    'answer': '<br>&bull; Integrationstests <br>&emsp;&bull; Gruppenkombinierte Tests, keine einzelnen Module <br>&emsp;&bull; Zusammenspiel verschiedener Module untereinander werden getestet'
}, {
    'question': '<br>Was ist ein Systemtest?  <br>',
    'answer': '<br>&bull; Systemtests <br>&emsp;&bull; Testen von Komponenten in einem ganzen System'
}, {
    'question': ' <br>Was ist eine API?  <br>',
    'answer': '<br>&bull; Schnittstellen (API)<br>&emsp;&bull; Application Programming Interface <br>&emsp;&bull; Schnittstelle zwischen unterschiedlichen Systemen/Programmen <br>&bull; Beispiel:<br>&emsp;&bull; Betriebssystem: Verbindung zwischen Hardware und Software <br>&emsp;&bull; REST-API: Schnittstelle für den Datenaustausch von Datenbank und Client-Anwendung '
}, {
    'question': '<br>Welche Design Pattern kennen Sie?  <br>',
    'answer': '<br>&bull; Design Patterns <br>&emsp;&bull; Erzeugungsmuster (Creational Patterns)<br>&emsp;&bull; Factory <br>&emsp;&bull; Strukturmuster (Structural Patterns)<br>&emsp;&bull; MVC <br>&emsp;&bull; Verhaltensmuster (Behavioral Patterns)<br>&emsp;&bull; Observer<br>'
}]