class DongHo {
    constructor(id, delay=1000) { //update the clock after each 1000ms
      this.state = "paused"; //paused or running only
      this.delay = delay; //set period of time interval between each delay
      this.display = document.getElementById(id); //template to display time
      this.value = 0; //current running/paused time
    }
    
    formatTime(ms) {
    var hours   = Math.floor(ms / 3600000);
    var minutes = Math.floor((ms - (hours * 3600000)) / 60000);
    var seconds = Math.floor((ms - (hours * 3600000) - (minutes * 60000)) / 1000);

      if (minutes < 10) {
        minutes = "0"+minutes;
    }
      if (seconds < 10) {
        seconds = "0"+seconds;
    }
      return minutes+':'+seconds;
    }
    
      update() {
      if (this.state=="running") {
        this.value += this.delay;
      }
      this.display.innerHTML = this.formatTime(this.value);
    }
    
    start() {
      if (this.state=="paused") {
        this.state="running";
        if (!this.interval) {
          var t=this;
          this.interval = setInterval(function(){t.update();}, this.delay); //update the timer after each 1000ms passed
        }
      }
    }
    
    stop() {  //pause the clock
         if (this.state=="running") { //if the stopwatch is running - changes state and clear interval => no more update
        this.state="paused";
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
         }
    }
    
    reset() { //reset value of clock to 00:00
      this.stop();
      this.value=0;
      this.update();
    }
  }
  
  dongho1 = new DongHo("dongho1");
  dongho2 = new DongHo("dongho2");
  dongho3 = new DongHo("dongho3");
  dongho4 = new DongHo("dongho4");
  dongho5 = new DongHo("dongho5");

function allclockreset(){
    dongho1.reset();
    dongho2.reset();
    dongho3.reset();
    dongho4.reset();
    dongho5.reset();
}