import "./main.scss"; // important for build - do not remove
import { tooltip } from "./js/tooltip";
import { experience_clock } from "./js/experience_clock";

document.addEventListener("DOMContentLoaded", function() {
    tooltip();
    experience_clock("Sep 1, 2017 00:00:01", "experience-clock");
  });

  