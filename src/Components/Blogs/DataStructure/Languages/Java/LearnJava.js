import React from "react";
import "../../../../../Home.css";
import "./LearnJava.css";
// import Language_Topics from "../../Language_Topics";
// import { Link } from "react-router-dom";
import JavaContainer from "./JavaContainer/JavaContainer";

function LearnJava() {
  return (
    <div className="blog">
      <div className="home__container">
        <div className="blog__row">
          <a
            href="https://en.wikipedia.org/wiki/Java_(programming_language)"
            target="_blank"
          >
            <JavaContainer title="Java History" />
          </a>

          <a
            href="https://beginnersbook.com/2013/05/java-introduction/"
            target="_blank"
          >
            <JavaContainer title="Introduction to Java" />
          </a>
          <a
            href="https://www.w3schools.com/java/java_syntax.asp"
            target="_blank"
          >
            <JavaContainer title="Java Syntax" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/java-identifiers"
            target="_blank"
          >
            <JavaContainer title="Java Identifiers" />
          </a>
        </div>
        <div className="blog__row">
          <a
            href="https://www.w3schools.com/java/java_variables.asp"
            target="_blank"
          >
            <JavaContainer title="Java Variables" />
          </a>

          <a
            href="https://www.geeksforgeeks.org/loops-in-java/"
            target="_blank"
          >
            <JavaContainer title="Loops of Java" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/arrays-in-java/"
            target="_blank"
          >
            <JavaContainer title="Arrays in Java" />
          </a>
          <a
            href="https://www.w3schools.com/java/java_operators.asp"
            target="_blank"
          >
            <JavaContainer title="Operators in Java" />
          </a>
        </div>
        <div className="blog__row">
          <a
            href="https://www.w3schools.com/java/java_conditions.asp"
            target="_blank"
          >
            <JavaContainer title="Java Conditions" />
          </a>

          <a
            href="https://www.w3schools.com/java/java_methods.asp"
            target="_blank"
          >
            <JavaContainer title="Methods in Java" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/constructors-in-java/"
            target="_blank"
          >
            <JavaContainer title="Constructors in Java" />
          </a>
          <a
            href="https://www.w3schools.com/java/java_recursion.asp"
            target="_blank"
          >
            <JavaContainer title="Recursion in Java" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LearnJava;
