document.addEventListener("DOMContentLoaded", () => {
    const taskButtons = document.querySelectorAll(".task-button");
    const task ["Tugas 1","Tugas 2","Tugas 3", "Kuis 1","Kuis 2","Kuis 3","UTS","UAS"];
    taskButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            alert(`Anda mengklik ${task[index]}`);
        });
    });
});
