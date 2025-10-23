// Задача 3. Задача “Події календаря”. Події можуть бути Meeting (має participants), Deadline (має dueDate), Reminder (має note). 
// Кожна подія може бути mandatory або optional. Створити тип CalendarEvent, який об’єднує тип події та її важливість, 
// використовуючи перетини та об’єднання типів.

if (confirm("Почати тестування?")) {
    type Meeting = {
    participants: string[]
    }
    type Deadline = {
    dueDate: Date
    }
    type Reminder = {
    note: string
    }
    type EvType = {
    type: 'mandatory' | 'optional'
    }
    type CalendarEvent = (Meeting | Deadline | Reminder) & EvType
}