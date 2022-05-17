Frage: Definition Projekt
Antwort: 
- Einmaliges Vorhaben
- Fester Start- und Endzeitpunkt
- Begrenzte Ressourcen (Zeit, Personal, Budget)
- Gewisse Komplexität
- Qualitätsanspruch


Frage: Definition Magisches Dreieck (Projekt)  
Antwort:
<img src="https://www.factro.de/wp-content/uploads/2020/05/magisches-dreieck-projektmanagement.png">
- Leistung
- Aufwand
- Zeit
- nicht alle 3 Faktoren können gleichzeitig erfüllt werden


Frage: Beschreibe Software-Kriterien
Antwort: 
- Funktionalität 
  - Umfang der Software\n
- Zuverlässigkeit
  - Identische Funktionalität 
  - Über lange Zeiträume
- Benutzbarkeit 
  - Usability 
  - Software einfach zu nutzen 
  - Intuitive Anwendung
- Effizienz 
  - Software benötigt wenig Ressourcen 
  - Hohe Lauffähigkeit und Arbeitsleistung
- Änderbarkeit 
  - Modularer und klar strukturierte Software
  - Einfache Erweiterung der Software
- Übertragbarkeit 
  - Übertragbarkeit auf andere Betriebssysteme 
  - Responsive 
- Portabilität
- Robustheit
- Verifizierbarkeit
- Integrität


Frage: Nennen Sie die Säulen der Objekt Orientierung?
Antwort: 
- Verkapselung:
  - Auf Methoden und Variablen können unterschiedlich zugegriffen werden
    - Private
      - nur innerhalb in der Klasse, nicht vererbbar 
    - Public 
      - außerhalb der Klasse sowie Unterklassen
    - Package
      - innerhalb des gleichen Pakets 
    - Protected
      - für Klassen und Unterklassen (vererbte Klassen) sichtbar
- Vererbung:
  - Unterklassen erben Methoden und Verhalten von Oberklassen
  - Unterklassen können Methoden von der Oberklasse überschreiben 
  - Generalisierung, Spezialisierung 
- Polymorphie (Vielgestaltigkeit):
  - Poly = viele, morph = Form 
  - Implementierung von Oberklassen Methoden
  - Methoden können überschrieben werden
- Abstraktion:
  - Die anderen Säulen sind eine Form der Abstraktion 
  - Bei der Modellierung werden bewusst bestimmte Eigenschaften „verborgen“ 
  - Nur notwendige Eigenschaften bleiben behalten


Frage: Was ist ein Objekt?  
Antwort:
- Objekt 
  - Instanz von einer Klasse („new …“)
  - Über Attribute eindeutig beschreibbar 
  - Verfügen über eine Lebensdauer


Frage: Was ist eine Klasse?  
Antwort:
- Bauplan für ein Objekt


Frage: Was ist ein Interface (OOP)  
Antwort:
- „Vertrag“ zwischen Klassen – Vorgabe für Implementierung von Klassen
- Verwendung für fehlende Mehrfachvererbung


Frage: Nenne Objektorientierte Sprachen  
Antwort:
- [C++, C#, JAVA, Python, PHP, Perl, Go, Ruby]


Frage: Was macht ein Compiler?  
Antwort:
- Kompiliert/übersetzt Quellcode in Maschinencode
- Moderne Programmiersprachen arbeiten mit Bytecode (Java, C#)
- Reine Compilersprachen sind C, C++ und Pascal
- Extravagant: JIT-Compiler kompilieren den Code zur Laufzeit
- Vorteil:
  - Schneller, da die Hardware direkt angesprochen wird und kein Interpreter dazwischen liegt. Analyse wird zur compile-Zeit durchgeführt
- Nachteile:
  - Geringe bis keine Portabilität


Frage: Was ist Interpreter?  
Antwort:
- Interpretiert/(führt) Anweisungen zur Laufzeit (aus)
- Sequenziell (Zeile für Zeile)
- Fehler werden erst zur Laufzeit erkannt
- Vorteil:
  - Portabilität (Unabhängig vom OS)
  - Einfachere Fehlersuche aufgrund von Line-By-Line-Execution
- Nachteile:
  - Langsamer als kompilierte Programme, aufgrund der Analyse (Lexikalische, Syntaktisch) zur Laufzeit
  - Fehler treten erst zur Laufzeit auf


Frage: Nenne 3 Vorgehensmodelle  
Antwort:
- Wasserfallmodell
- V-Modell
- Spiralmodell
- Scrum


Frage: Wie wird normalisiert?  
Antwort:
- 1 Normalform
  - Atomare Wertebereiche (Name = Vorname, Nachname)
- 2 Normalform
  - 1 Normalform
  - Alle nicht-schlüssel Attribute müssen voll funktional abhängig vom (zusammengesetzten) Schlüsselkandidaten sein
- 3 Normalform
  - 2 Normalform
  - Keine transitiven (indirekten) Abhängigkeiten
  - Relation/Relationale Datenbank


Frage: Warum wird normalisiert?  
Antwort:
- Reduzierung oder Beseitigung von Redundanzen


Frage: Was ist ein Primärschlüssel (Datenbanken)?  
Antwort:
- Eindeutiger Indikator eines Tupels 
- Kann aus mehreren Attributen bestehen


Frage: Was ist ein Fremdschlüssel (Datenbanken)?  
Antwort:
- Verweist auf einen Primärschlüssel aus einem anderen Tupel


Frage: Welche Beziehungen gibt es in einer Datenbank?  
Antwort:
- 1 zu n -> ein zu viele 
- n zu 1 -> viele zu eins 
- n zu m -> viele zu viele 
  - wird mit einer Zwischentabelle aufgelöst	
  - jeweils mit zwei 1 – n Beziehungen


Frage: Was ist eine Anomalie (Datenbanken)?  
Antwort:
- Anomalien (aus dem Griechischen: Unregelmäßigkeit)
- Eine Anomalie ist eine Abweichung vom Normalen


Frage: Welche Anomalien gibt es (Datenbanken)?  
Antwort:
- Änderungsanomalie
- Löschanomalie
- Einfüge Anomalie


Frage: Was ist die Referentielle Integrität?  
Antwort:
  - Zu jedem Fremdschlüssel muss es immer einen dazugehörenden Primärschlüssel geben 
  - Verhindert Anomalien


Frage: Was ist/macht ein Debugger?  
Antwort:
- Werkzeug zum Diagnostizieren und Auffinden von Fehlern im Programmcode/Computersystemen
- Steuerung des Kontrollflusses (Haltepunkte)
- Inspizieren von Daten/Registern


Frage: Welche Testverfahren kennen Sie?  
Antwort:
- Whitebox 
  - Code ist bekannt
- Blackbox 
  - Code ist nicht bekannt 
  - Verhalten nach Außen wird getestet -> Annahme > erwartetes Ergebnis 
  - Codeabdeckung 
- Schreibtisch 
  - Analoger Test zum Verstehen von Algorithmen
  

Frage: Welche Softwaretests kennen Sie?  
Antwort:
- Unterschied Tests (Modul, Integration, System)


Frage: Was ist ein Modultest?  
Antwort:
  - Sind die kleinste „Einheit“ bei Softwaretests 
  - Testen auf Korrektheit eines Moduls


Frage: Was ist ein Integrationstests?  
Antwort:
  - Gruppenkombinierte Tests, keine einzelnen Module 
  - Zusammenspiel verschiedener Module untereinander werden getestet


Frage: Was ist ein Systemtest?  
Antwort:
  - Testen von Komponenten in einem ganzen System

 
Frage: Was ist eine API?  
Antwort:
  - Application Programming Interface 
  - Schnittstelle zwischen unterschiedlichen Systemen/Programmen 
- Beispiel:
  - Betriebssystem: Verbindung zwischen Hardware und Software 
  - REST-API: Schnittstelle für den Datenaustausch von Datenbank und Client-Anwendung 


Frage: Welche Design Pattern kennen Sie?  
Antwort:
  - Erzeugungsmuster (Creational Patterns)
  - Factory 
  - Strukturmuster (Structural Patterns)
  - MVC 
  - Verhaltensmuster (Behavioral Patterns)
  - Observer
