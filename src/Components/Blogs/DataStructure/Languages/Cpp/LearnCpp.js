import React from "react";
import "../../../../../Home.css";
import "./LearnCpp.css";
// import Language_Topics from "../../Language_Topics";
// import { Link } from "react-router-dom";
import CppContainer from "./CppContainer/CppContainer";

function LearnCpp() {
  return (
    <div className="blog">
      <div className="home__container">
        <div className="blog__row">
          <a
            href="https://en.wikipedia.org/wiki/Java_(programming_language)"
            target="_blank"
          >
            <CppContainer title="C++ History" />
          </a>

          <a
            href="https://beginnersbook.com/2013/05/java-introduction/"
            target="_blank"
          >
            <CppContainer title="Introduction to C++" />
          </a>
          <a
            href="https://www.w3schools.com/java/java_syntax.asp"
            target="_blank"
          >
            <CppContainer title="C++ Syntax" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/java-identifiers"
            target="_blank"
          >
            <CppContainer title="C++ Identifiers" />
          </a>
        </div>
        <div className="blog__row">
          <a
            href="https://www.w3schools.com/java/java_variables.asp"
            target="_blank"
          >
            <CppContainer title="C++ Variables" />
          </a>

          <a
            href="https://www.geeksforgeeks.org/loops-in-java/"
            target="_blank"
          >
            <CppContainer title="Loops of C++" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/arrays-in-java/"
            target="_blank"
          >
            <CppContainer title="Arrays in C++" />
          </a>
          <a
            href="https://www.w3schools.com/java/java_operators.asp"
            target="_blank"
          >
            <CppContainer title="Operators in C++" />
          </a>
        </div>
        <div className="blog__row">
          <a
            href="https://www.w3schools.com/java/java_conditions.asp"
            target="_blank"
          >
            <CppContainer title="C++ Conditions" />
          </a>

          <a
            href="https://www.w3schools.com/java/java_methods.asp"
            target="_blank"
          >
            <CppContainer title="Methods in C++" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/constructors-in-java/"
            target="_blank"
          >
            <CppContainer title="Constructors in C++" />
          </a>
          <a
            href="https://www.w3schools.com/java/java_recursion.asp"
            target="_blank"
          >
            <CppContainer title="Recursion in C++" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LearnCpp;
