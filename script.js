var trung = false;
function riinaAppear() {
  if( trung == true) {
    document.querySelector("#riinavenusian").style="display: flex;animation: text-flicker 3s linear infinite;";
    document.querySelector(".continue").style="opacity: 1;transition: all 5s ease;";
  } 
}
function trungAppear() {
  document.querySelector(".unicorn").style="opacity: 100%;transition: all 0.3s ease;";
  document.querySelector(".mantathinking").style="opacity: 0;transition: all 0.3s ease;";
  trung = true;
  
}