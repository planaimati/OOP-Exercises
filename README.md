# OOP-Exercises

# Rozwiązania zadań:

## Cart

 Stwórz strukturę danych związaną ze sklepem internetowym
 Wypracuj obiekt charakteryzujący przedmiot
 Wypracuj obiekt charakteryzujący koszyk

## AddressBook

 Stwórz strukturę danych związaną z biblioteką
 Wypracuj obiekt charakteryzujący pojedyńczy kontakt
 Wypracuj obiekt charakteryzujący grupę kontakt
 Wypracuj obiekt charakteryzujący książkę adresową

 ## dynamicSwitch

 Stwórz klasę Switch, która służy do wielokrotnej, równorzędnej walidacji
 Klasa ma mieć metode .add w której dodajemy warunek do sprawdzenia oraz callback, który ma się wywołać jeśli warunek zostanie spełniony
 Klasa ma mieć metodę .isValid która iteruje po wszystkich cases sprawdzając każdy dodany wcześniej warunek
 Klasa ma mieć metodę .isEmpty która sprawdza czy tablice cases i conditions są puste. Jeśli tak zwraca true
 Metoda .isValid zwraca true jeśli wszystkie warunki będą na false. Jeżeli jakikolwiek warunek zostanie nie spełniony, funkcja przerywa swoje działania, wywołując przekazany callback dla warunku który został nie spełniony. Po każdym wykonaniu metody warunki i callbacki są czyszczone.