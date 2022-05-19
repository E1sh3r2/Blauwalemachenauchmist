const questions = [{
  'id': 0,
  'question': 'Geben Sie eine Definition eines Projektes!<br>',
  'answer': ' <br>&bull; Einmaliges Vorhaben<br>&bull; Fester Start&bull; und Endzeitpunkt<br>&bull; Begrenzte Ressourcen (Zeit, Personal, Budget)<br>&bull; Gewisse Komplexität<br>&bull; Qualitätsanspruch'
}, {
  'id': 1,
  'question': '<br>Geben Sie eine Definition Magisches Dreieck bzgl. eines Projekts!  <br>',
  'answer': '<br><img src="https://www.factro.de/wp-content/uploads/2020/05/magisches-dreieck-projektmanagement.png"><br>&bull; Leistung<br>&bull; Aufwand<br>&bull; Zeit<br>&bull; Nicht alle 3 Faktoren können gleichzeitig erfüllt werden'
}, {
  'id': 2,
  'question': '<br>Beschreibe Sie Software-Kriterien!<br>',
  'answer': ' <br>&bull; Funktionalität <br>&emsp;&bull; Umfang der Software\\n<br>&bull; Zuverlässigkeit<br>&emsp;&bull; Identische Funktionalität <br>&emsp;&bull; Über lange Zeiträume<br>&bull; Benutzbarkeit <br>&emsp;&bull; Usability <br>&emsp;&bull; Software einfach zu nutzen <br>&emsp;&bull; Intuitive Anwendung<br>&bull; Effizienz <br>&emsp;&bull; Software benötigt wenig Ressourcen <br>&emsp;&bull; Hohe Lauffähigkeit und Arbeitsleistung<br>&bull; Änderbarkeit <br>&emsp;&bull; Modularer und klar strukturierte Software<br>&emsp;&bull; Einfache Erweiterung der Software<br>&bull; Übertragbarkeit <br>&emsp;&bull; Übertragbarkeit auf andere Betriebssysteme <br>&emsp;&bull; Responsive <br>&bull; Portabilität<br>&bull; Robustheit<br>&bull; Verifizierbarkeit<br>&bull; Integrität'
}, {
  'id': 3,
  'question': '<br>Nennen Sie die Säulen der Objekt Orientierung?<br>',
  'answer': ' <br>&bull; Verkapselung:<br>&bull; Vererbung:<br>&bull; Polymorphie (Vielgestaltigkeit):<br>&bull; Abstraktion:'
}, {
  'id': 4,
  'question': '<br>Beschreiben Sie Verkapselung (OOP)?<br>',
  'answer': ' <br>&bull; Verkapselung:<br>&emsp;&bull; Auf Methoden und Variablen können unterschiedlich zugegriffen werden<br>&emsp;&emsp;&bull; Private<br>&emsp;&emsp;&emsp;&bull; nur innerhalb in der Klasse, nicht vererbbar <br>&emsp;&emsp;&bull; Public <br>&emsp;&emsp;&emsp;&bull; außerhalb der Klasse sowie Unterklassen<br>&emsp;&emsp;&bull; Package<br>&emsp;&emsp;&emsp;&bull; innerhalb des gleichen Pakets <br>&emsp;&emsp;&bull; Protected<br>&emsp;&emsp;&emsp;&bull; für Klassen und Unterklassen (vererbte Klassen) sichtbar'
}, {
  'id': 5,
  'question': '<br>Beschreiben Sie Vererbung (OOP)?  <br>',
  'answer': '<br>&bull; Vererbung:<br>&emsp;&bull; Unterklassen erben Methoden und Verhalten von Oberklassen<br>&emsp;&bull; Unterklassen können Methoden von der Oberklasse überschreiben <br>&emsp;&bull; Generalisierung, Spezialisierung '
}, {
  'id': 6,
  'question': '<br>Beschreiben Sie Polymorphie (OOP)?  <br>',
  'answer': '<br>&bull; Polymorphie (Vielgestaltigkeit):<br>&emsp;&bull; Poly = viele, morph = Form <br>&emsp;&bull; Implementierung von Oberklassen Methoden<br>&emsp;&bull; Methoden können überschrieben werden<br>&bull; Abstraktion:<br>&emsp;&bull; Die anderen Säulen sind eine Form der Abstraktion <br>&emsp;&bull; Bei der Modellierung werden bewusst bestimmte Eigenschaften „verborgen“ <br>&emsp;&bull; Nur notwendige Eigenschaften bleiben behalten'
}, {
  'id': 7,
  'question': '<br>Beschreiben Sie Abstraktion (OOP)?  <br>',
  'answer': '<br>&bull; Abstraktion:<br>&emsp;&bull; Die anderen Säulen sind eine Form der Abstraktion <br>&emsp;&bull; Bei der Modellierung werden bewusst bestimmte Eigenschaften „verborgen“ <br>&emsp;&bull; Nur notwendige Eigenschaften bleiben behalten'
}, {
  'id': 8,
  'question': '<br>Was ist ein Objekt?  <br>',
  'answer': '<br>&bull; Objekt <br>&emsp;&bull; Instanz von einer Klasse („new …“)<br>&emsp;&bull; Über Attribute eindeutig beschreibbar <br>&emsp;&bull; Verfügen über eine Lebensdauer'
}, {
  'id': 9,
  'question': '<br>Was ist eine Klasse?  <br>',
  'answer': '<br>&bull; Bauplan für ein Objekt'
}, {
  'id': 10,
  'question': '<br>Was ist ein Interface (OOP)?  <br>',
  'answer': '<br>&bull; „Vertrag“ zwischen Klassen – Vorgabe für Implementierung von Klassen<br>&bull; Verwendung für fehlende Mehrfachvererbung'
}, {
  'id': 11,
  'question': '<br>Nennen Sie Objektorientierte Sprachen!  <br>',
  'answer': '<br>&bull; [C++, C#, JAVA, Python, PHP, Perl, Go, Ruby]'
}, {
  'id': 12,
  'question': '<br>Was macht ein Compiler?  <br>',
  'answer': '<br>&bull; Kompiliert/übersetzt Quellcode in Maschinencode<br>&bull; Moderne Programmiersprachen arbeiten mit Bytecode (Java, C#)<br>&bull; Reine Compilersprachen sind C, C++ und Pascal<br>&bull; Extravagant: JIT-Compiler kompilieren den Code zur Laufzeit<br>&bull; Vorteil:<br>&emsp;&bull; Schneller, da die Hardware direkt angesprochen wird und kein Interpreter dazwischen liegt. Analyse wird zur compile-Zeit durchgeführt<br>&bull; Nachteile:<br>&emsp;&bull; Geringe bis keine Portabilität'
}, {
  'id': 13,
  'question': '<br>Was ist Interpreter?  <br>',
  'answer': '<br>&bull; Interpretiert/(führt) Anweisungen zur Laufzeit (aus)<br>&bull; Sequenziell (Zeile für Zeile)<br>&bull; Fehler werden erst zur Laufzeit erkannt<br>&bull; Vorteil:<br>&emsp;&bull; Portabilität (Unabhängig vom OS)<br>&emsp;&bull; Einfachere Fehlersuche aufgrund von Line-By-Line-Execution<br>&bull; Nachteile:<br>&emsp;&bull; Langsamer als kompilierte Programme, aufgrund der Analyse (Lexikalische, Syntaktisch) zur Laufzeit<br>&emsp;&bull; Fehler treten erst zur Laufzeit auf'
}, {
  'id': 14,
  'question': '<br>Nennen Sie Vorgehensmodelle!  <br>',
  'answer': '<br>&bull; Wasserfallmodell<br>&bull; V-Modell<br>&bull; Spiralmodell<br>&bull; Scrum'
}, {
  'id': 15,
  'question': '<br>Was ist das Wasserfallmodell?<br>',
  'answer': '<br>&bull; lineares Vorgehensmodell<br>&bull; jede Phase nur einmal durchlaufen<br>&emsp;&bull; keine Rücksprünge<br>&bull; fest definierte Phasen<br>&bull; Vorteile<br>&emsp;&bull; Einfache Struktur & feste Phasen<br>&emsp;&bull; Gute Dokumentation<br>&emsp;&bull; abschätzung von Kosten und Aufwand<br>&bull; Nachteile<br>&emsp;&bull; ungeeignet für komplexe Projekte<br>&emsp;&bull; keine Anpassung während des Projektablaufs<br>&emsp;&bull; Endanwender wird erst nach der Entwicklung einbezogen<br>&emsp;&bull; Fehler werden ggf. erst am Ende erkannt<br><img src="https://www.ionos.de/digitalguide/fileadmin/DigitalGuide/Screenshots_2018/wasserfallmodell.png">'
}, {
  'id': 16,
  'question': '<br>Was ist das V-Modell?  <br>',
  'answer': '<br>&bull; lineares Vorgehensmodell<br>&bull; fest definierte Phasen<br>&bull; Testphasen für jede Entwicklungsphase<br>&bull; Vorteile<br>&emsp;&bull; frühe Tests erkennt unvollständige Spezifikationen<br>&emsp;&bull; einfacher aufbau<br>&emsp;&bull; vergleichsweise wenig Kommunikation während der Entwicklung<br>&emsp;&bull; Hohe Testabdeckung<br>&bull; Nachteile<br>&emsp;&bull; ausführliche Dokumentation<br>&emsp;&bull; starr und wenig flexibel<br>    <img src="https://projekte-leicht-gemacht.de/wp-content/uploads/2021/08/v-modell.jpg">'
}, {
  'id': 17,
  'question': '<br>Was ist das Spiralmodell?  <br>',
  'answer': '<br>&bull; iteratives Vorgehensmodell<br>&bull; Sektoren nicht unbedingt in jeder Umrundung notwendig<br>&bull; Risiko-orientiertes Modell<br>&bull; von innen nach außen durchlaufen<br>  '
}, {
  'id': 18,
  'question': '<br>Was ist das SCRUM?  <br>',
  'answer': '<br>&bull; agiles Vorgehensmodell<br>&bull; zwei&bull; bis vierwöchige Sprints<br>&emsp;&bull; Planing<br>&emsp;&emsp;&bull; Planung des nächsten Tasks<br>&emsp;&emsp;&bull; festlegen der Tasks &bull; Sprint Backlog<br>&emsp;&bull; Dailys<br>&emsp;&emsp;&bull; Austausch des aktuellen Stands<br>&emsp;&emsp;&bull; täglich 15 min<br>&emsp;&emsp;&bull; Stand-up-Meeting<br>&emsp;&bull; Review<br>&emsp;&emsp;&bull; Präsentation des (Teil)Produktes <br>&emsp;&emsp;&bull; überprüfung der Ergebnisse<br>&emsp;&emsp;&bull; anpassung Anforderungen<br>&emsp;&bull; Retroperspektive<br>&emsp;&emsp;&bull; verbesserung des Sprints<br>&emsp;&emsp;&bull; Probleme erkennen<br>&emsp;&emsp;&bull; Zusammenarbeit verbessern<br>&bull; Rollen<br>&emsp;&bull; Product Owner<br>&emsp;&emsp;&bull; Kommunikation mit Kunden<br>&emsp;&emsp;&bull; Verantwortlich für<br>&emsp;&emsp;&emsp;&bull; Auslieferung<br>&emsp;&emsp;&emsp;&bull; Kosten<br>&emsp;&emsp;&emsp;&bull; Eigenschaften des Produktes<br>&emsp;&bull; Team<br>&emsp;&emsp;&bull; Entwickeln das Produkt<br>&emsp;&emsp;&bull; organisiert sich selbst<br>&emsp;&bull; Scrum Master<br>&emsp;&emsp;&bull; erhält Scrum vorgehen<br>&emsp;&emsp;&bull; regelt Kommunikationsprobleme<br>  '
}, {
  'id': 19,
  'question': 'Wie wird normalisiert?  <br>',
  'answer': '<br>&bull; 1 Normalform<br>&emsp;&bull; Atomare Wertebereiche (Name = Vorname, Nachname)<br>&bull; 2 Normalform<br>&emsp;&bull; 1 Normalform<br>&emsp;&bull; Alle nicht-schlüssel Attribute müssen voll funktional abhängig vom (zusammengesetzten) Schlüsselkandidaten sein<br>&bull; 3 Normalform<br>&emsp;&bull; 2 Normalform<br>&emsp;&bull; Keine transitiven (indirekten) Abhängigkeiten<br>&emsp;&bull; Relation/Relationale Datenbank'
}, {
  'id': 20,
  'question': '<br>Warum wird normalisiert?  <br>',
  'answer': '<br>&bull; Reduzierung oder Beseitigung von Redundanzen'
}, {
  'id': 21,
  'question': '<br>Was ist ein Primärschlüssel (Datenbanken)?  <br>',
  'answer': '<br>&bull; Eindeutiger Indikator eines Tupels <br>&bull; Kann aus mehreren Attributen bestehen'
}, {
  'id': 22,
  'question': '<br>Was ist ein Fremdschlüssel (Datenbanken)?  <br>',
  'answer': '<br>&bull; Verweist auf einen Primärschlüssel aus einem anderen Tupel'
}, {
  'id': 23,
  'question': '<br>Welche Beziehungen gibt es in einer Datenbank?  <br>',
  'answer': '<br>&bull; 1 zu n &rarr; ein zu viele <br>&bull; n zu 1 &rarr; viele zu eins <br>&bull; n zu m &rarr; viele zu viele <br>&emsp;&bull; wird mit einer Zwischentabelle aufgelöst\t<br>&emsp;&bull; jeweils mit zwei 1 – n Beziehungen'
}, {
  'id': 24,
  'question': '<br>Was ist eine Anomalie (Datenbanken)?  <br>',
  'answer': '<br>&bull; Anomalien (aus dem Griechischen: Unregelmäßigkeit)<br>&bull; Eine Anomalie ist eine Abweichung vom Normalen'
}, {
  'id': 25,
  'question': '<br>Welche Anomalien gibt es (Datenbanken)?  <br>',
  'answer': '<br>&bull; Änderungsanomalie<br>&bull; Löschanomalie<br>&bull; Einfüge Anomalie'
}, {
  'id': 26,
  'question': '<br>Was ist die Referentielle Integrität?  <br>',
  'answer': '<br>&emsp;&bull; Zu jedem Fremdschlüssel muss es immer einen dazugehörenden Primärschlüssel geben <br>&emsp;&bull; Verhindert Anomalien'
}, {
  'id': 27,
  'question': '<br>Was ist/macht ein Debugger?  <br>',
  'answer': '<br>&bull; Werkzeug zum Diagnostizieren und Auffinden von Fehlern im Programmcode/Computersystemen<br>&bull; Steuerung des Kontrollflusses (Haltepunkte)<br>&bull; Inspizieren von Daten/Registern'
}, {
  'id': 28,
  'question': '<br>Welche Testverfahren kennen Sie?  <br>',
  'answer': '<br>&bull; Whitebox <br>&emsp;&bull; Code und Struktur ist bekannt<br>&bull; Blackbox <br>&emsp;&bull; Code und Struktur ist unbekannt<br>&emsp;&bull; Verhalten nach Außen wird getestet &rarr; Annahme > erwartetes Ergebnis <br>&emsp;&bull; Codeabdeckung <br>&bull; Schreibtisch <br>&emsp;&bull; Analoger Test zum Verstehen von Algorithmen<br>  '
}, {
  'id': 29,
  'question': 'Welche Softwaretests kennen Sie?  <br>',
  'answer': '<br>&bull; Unterschied Tests (Modul, Integration, System)'
}, {
  'id': 30,
  'question': '<br>Was ist ein Modultest?  <br>',
  'answer': '<br>&emsp;&bull; Sind die kleinste „Einheit“ bei Softwaretests <br>&emsp;&bull; Testen auf Korrektheit eines Moduls'
}, {
  'id': 31,
  'question': '<br>Was ist ein Integrationstests?  <br>',
  'answer': '<br>&emsp;&bull; Gruppenkombinierte Tests, keine einzelnen Module <br>&emsp;&bull; Zusammenspiel verschiedener Module untereinander werden getestet'
}, {
  'id': 32,
  'question': '<br>Was ist ein Systemtest?  <br>',
  'answer': '<br>&emsp;&bull; Testen von Komponenten in einem ganzen System'
}, {
  'id': 33,
  'question': ' <br>Was ist eine API?  <br>',
  'answer': '<br>&emsp;&bull; Application Programming Interface <br>&emsp;&bull; Schnittstelle zwischen unterschiedlichen Systemen/Programmen <br>&bull; Beispiel:<br>&emsp;&bull; Betriebssystem: Verbindung zwischen Hardware und Software <br>&emsp;&bull; REST-API: Schnittstelle für den Datenaustausch von Datenbank und Client-Anwendung '
}, {
  'id': 34,
  'question': '<br>Welches Design Pattern kennen Sie?  <br>',
  'answer': '<br>&emsp;&bull; Erzeugungsmuster (Creational Patterns)<br>&emsp;&bull; Factory <br>&emsp;&bull; Strukturmuster (Structural Patterns)<br>&emsp;&bull; MVC <br>&emsp;&bull; Verhaltensmuster (Behavioral Patterns)<br>&emsp;&bull; Observer<br>'
}]
