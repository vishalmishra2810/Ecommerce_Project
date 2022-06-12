import React from "react";
import "../../../../../Home.css";
import "./LearnPython.css";
// import Language_Topics from "../../Language_Topics";
// import { Link } from "react-router-dom";
import PythonContainer from "./PythonContainer/PythonContainer";

function LearnPython() {
  return (
    <div className="blog">
      <div className="home__container">
        <div className="blog__row">
          <a
            style={{ textDecoration: "none" }}
            href="https://en.wikipedia.org/wiki/Java_(programming_language)"
            target="_blank"
          >
            <PythonContainer title="Python History" />
          </a>

          <a
            style={{ textDecoration: "none" }}
            href="https://beginnersbook.com/2013/05/java-introduction/"
            target="_blank"
          >
            <PythonContainer title="Introduction to Python" />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.w3schools.com/java/java_syntax.asp"
            target="_blank"
          >
            <PythonContainer title="Python Syntax" />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.geeksforgeeks.org/java-identifiers"
            target="_blank"
          >
            <PythonContainer title="Python Identifiers" />
          </a>
        </div>
        <div className="blog__row">
          <a
            style={{ textDecoration: "none" }}
            href="https://www.w3schools.com/java/java_variables.asp"
            target="_blank"
          >
            <PythonContainer title="Python Variables" />
          </a>

          <a
            style={{ textDecoration: "none" }}
            href="https://www.geeksforgeeks.org/loops-in-java/"
            target="_blank"
          >
            <PythonContainer title="Loops of Python" />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.geeksforgeeks.org/arrays-in-java/"
            target="_blank"
          >
            <PythonContainer title="Arrays in Python" />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.w3schools.com/java/java_operators.asp"
            target="_blank"
          >
            <PythonContainer title="Operators in Python" />
          </a>
        </div>
        <div className="blog__row">
          <a
            style={{ textDecoration: "none" }}
            href="https://www.w3schools.com/java/java_conditions.asp"
            target="_blank"
          >
            <PythonContainer title="Python Conditions" />
          </a>

          <a
            style={{ textDecoration: "none" }}
            href="https://www.w3schools.com/java/java_methods.asp"
            target="_blank"
          >
            <PythonContainer title="Methods in Python" />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.geeksforgeeks.org/constructors-in-java/"
            target="_blank"
          >
            <PythonContainer title="Constructors in Python" />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://www.w3schools.com/java/java_recursion.asp"
            target="_blank"
          >
            <PythonContainer title="Recursion in Python" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LearnPython;
