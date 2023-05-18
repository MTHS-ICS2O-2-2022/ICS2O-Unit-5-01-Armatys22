// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Dominik Armatys
// Created on: may 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function generates a random number between 1 and 6
 */
const randomNumber = Math.floor(Math.random() * 6) + 1 // returns a random integer from 1 to 6 into variable "randomNumber"

/**
 * This function updates the slider value.
 */
function myButtonClicked() {
  // input
  const guessedNumber = parseFloat(
    document.getElementById("guessed-number").value
  )

  // process
  if (guessedNumber == randomNumber) {
    document.getElementById("answer").innerHTML =
      "The answer was " + randomNumber + " you got it!"
  }

  if (guessedNumber != randomNumber) {
    document.getElementById("answer").innerHTML = "Wrong answer. Try again"
  }
}
