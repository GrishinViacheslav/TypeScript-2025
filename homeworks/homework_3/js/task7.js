"use strict";
// Задача 7. Описати тип «журнал учня» (3 поля-масиви з оцінками ). Потім на основі цього типу створити тип «менеджер оцінок» 
// (додати методи знаходження середньої оцінки і найбільшої оцінки)
if (confirm("Почати тестування?")) {
    const pupilJournal = {
        math: [11, 7, 10, 10, 7, 12],
        english: [10, 6, 10, 8, 7, 11],
        physics: [8, 8, 10, 11, 5, 10],
        getAllScores() {
            return [...this.math, ...this.english, ...this.physics];
        },
        getAvgScore() {
            const scores = this.getAllScores();
            return scores.reduce((sum, score) => sum + score, 0) / scores.length;
        },
        getMaxScore() {
            const scores = this.getAllScores();
            return Math.max(...scores);
        }
    };
}

