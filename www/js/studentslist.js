"use strict";

const names = ["Ivan", "David", "Berto"];
const subjects = ["html", "css", "js"];
const namesGroup = ["A", "B", "C"];
const alumnos = [
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "a10",
  "a11",
  "a12"
];
let edad = [25, 35, 28, 22, 32, 19, 21, 36, 45, 44, 38, 24];
let sexo = ["mas", "mas", "mas"];
let gender = [
  "fem",
  "fem",
  "mas",
  "fem",
  "mas",
  "mas",
  "mas",
  "mas",
  "fem",
  "mas",
  "fem",
  "mas"
];
let asignaturas = [
  "html",
  "css",
  "js",
  "html",
  "css",
  "js",
  "html",
  "css",
  "js",
  "html",
  "css",
  "js"
];
let grupo = ["A", "B", "C", "A", "B", "C", "A", "B", "C", "A", "B", "C"];
let age = [35, 25, 40];

//clases:

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  showProperties() {
    console.log(`propiedades: name, age, gender`);
  }
}

class Student extends Person {
  constructor(name, age, gender, asignaturas, group) {
    super(name, age, gender);
    this.asignaturas = asignaturas;
    this.group = group;
  }
  static listaDeEstudiantes(alumnos, age, gender, asignaturas, group) {
    return alumnos.map((name, index) => {
      return new Student(
        name,
        age[index],
        gender[index],
        asignaturas[index],
        group[index]
      );
    });
  }
}

class Teacher extends Person {
  studentList = [];
  constructor(name, age, gender, subject, group, studentList) {
    super(name, age, gender);
    this.subjects = subject;
    this.group = group;
    this.studentList = studentList;
  }
  assingTeacher(students) {
    const studentListIvan = students.filter(grupo => {
      return grupo.asignaturas === "html";
    });
    const studentListDavid = students.filter(grupo => {
      return grupo.asignaturas === "css";
    });
    const studentListBerto = students.filter(grupo => {
      return grupo.asignaturas === "js";
    });
    const divideGroups = [studentListIvan, studentListDavid, studentListBerto];
    return divideGroups;
  }
  static createTeacher(names, age, gender, subjects, namesGroup, studentList) {
    return names.map((name, index) => {
      return new Teacher(
        name,
        age[index],
        gender[index],
        subjects[index],
        namesGroup[index],
        studentList[index]
      );
    });
  }
}

//Instancias:
const myPerson = new Person();
myPerson.showProperties();

const sameStudents = Student.listaDeEstudiantes(
  alumnos,
  edad,
  gender,
  asignaturas,
  grupo
);
console.log(sameStudents);

const myTeacher = new Teacher();
const divideGroups = myTeacher.assingTeacher(sameStudents);

const teachers = Teacher.createTeacher(
  names,
  age,
  sexo,
  subjects,
  namesGroup,
  divideGroups
);
console.log(teachers);
