// Task 18.1
const task = 'task № 18.1';
console.log(task);

class CountdownTimer {
    constructor(duration, displayElement) {
        this.duration = duration;
        this.remaining = duration;
        this.displayElement = displayElement;
        this.intervalId = null;
    }

    formatTime (seconds) {
        const min = String(Math.floor(seconds / 60)).padStart(2, '0');
        const sec = String(seconds % 60).padStart(2, '0');
        return `${min} : ${sec}`;    
    }

    start () {
        if(this.intervalId) return;
        this.updateDisplay();
        this.intervalId = setInterval (() => {
            this.remaining--;
            this.updateDisplay();
            if(this.remaining <=0) {
                this.stop();
            }
        }, 1000);
        
    }

    stop () {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    updateDisplay() {
        this.displayElement.textContent = this.formatTime(this.remaining);
    }
}

const startSeconds = 85;
const display = document.getElementById('timer');
const timer = new CountdownTimer(startSeconds, display);
document.getElementById('startBtn').addEventListener('click', () => {
    timer.start();
})
