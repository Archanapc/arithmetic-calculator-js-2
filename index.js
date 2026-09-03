function calculateGrade() {
    console.log("hi")
    let English = Number(prompt("Enter English Mark"))
    let Malayalam = Number(prompt("Enter Malayalam Mark"))
    let Hindi = Number(prompt("Enter Hindi Mark"))
    let Maths = Number(prompt("Enter Maths Mark"))
    let Science = Number(prompt("Enter Science Mark"))

    console.log("marks :", English, Malayalam, Hindi, Maths, Science)
    let total_marks = English + Malayalam + Hindi + Maths + Science
    let average = (English + Malayalam + Hindi + Maths + Science) / 5;

    console.log("total:", total_marks, "average:", average)
    let grade;

    if (average >= 90) {
        grade = "A+"

    } else if (average >= 80) {
        grade = "A"
    } else if (average >= 70) {
        grade = "B+"
    } else if (average >= 60) {
        grade = "B"
    }
    else if (average >= 50) {
        grade = "c"
    } else {
        grade = "c+"
    }

    alert(
        "Total Marks: " + total_marks +
        "\nAverage: " + average +
        "\nGrade: " + grade
    );

}