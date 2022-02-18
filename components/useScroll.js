import React, { useEffect } from "react";

export default function Scroll() {

  useEffect(function mount() {
    var prevScrollpos = window.pageYOffset
    function onScroll() {

      window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
        if (prevScrollpos > currentScrollPos) {
          document.getElementById('Navbar').style.top = '0'
        } else {
          document.getElementById('Navbar').style.top = '-72px'
        }
        prevScrollpos = currentScrollPos
      }
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return null;
}

