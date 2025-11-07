let videoi = 1

if(videoi === 1) { document.getElementById("Frst").style.display = "block";
  } else { document.getElementById("Frst").style.display = "none";
  }
   if(videoi === 2) { document.getElementById("Scond").style.display = "block";
  } else { document.getElementById("Scond").style.display = "none";
  }
   if(videoi === 3) { document.getElementById("Tird").style.display = "block";
  } else { document.getElementById("Tird").style.display = "none";
  }
   if(videoi === 4) { document.getElementById("Frth").style.display = "block";
  } else { document.getElementById("Frth").style.display = "none";
  }
   if(videoi === 5) { document.getElementById("Ffth").style.display = "block";
  } else { document.getElementById("Ffth").style.display = "none";
  }
function right() {
  videoi = videoi-1
  if(videoi < 1) {
    videoi = 5
  }
  console.log(videoi)
  
  if(videoi === 1) { document.getElementById("Frst").style.display = "block";
  } else { document.getElementById("Frst").style.display = "none";
  }
   if(videoi === 2) { document.getElementById("Scond").style.display = "block";
  } else { document.getElementById("Scond").style.display = "none";
  }
   if(videoi === 3) { document.getElementById("Tird").style.display = "block";
  } else { document.getElementById("Tird").style.display = "none";
  }
   if(videoi === 4) { document.getElementById("Frth").style.display = "block";
  } else { document.getElementById("Frth").style.display = "none";
  }
   if(videoi === 5) { document.getElementById("Ffth").style.display = "block";
  } else { document.getElementById("Ffth").style.display = "none";
  }
  
}
function left() {
  videoi++
  if(videoi > 5) {
    videoi = 1
  }
  console.log(videoi)
  if(videoi === 1) { document.getElementById("Frst").style.display = "block";
  } else { document.getElementById("Frst").style.display = "none";
  }
   if(videoi === 2) { document.getElementById("Scond").style.display = "block";
  } else { document.getElementById("Scond").style.display = "none";
  }
   if(videoi === 3) { document.getElementById("Tird").style.display = "block";
  } else { document.getElementById("Tird").style.display = "none";
  }
   if(videoi === 4) { document.getElementById("Frth").style.display = "block";
  } else { document.getElementById("Frth").style.display = "none";
  }
   if(videoi === 5) { document.getElementById("Ffth").style.display = "block";
  } else { document.getElementById("Ffth").style.display = "none";
  }
}
