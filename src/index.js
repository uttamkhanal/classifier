const canv = document.getElementsByTagName('canvas')[0]
const ctx = canv.getContext('2d');

const W = 500;
const H = 500;
const classes = {r: [], g:[]}
const R = 10;
let line = [1,1,0.1, 1]
let learningRate = 0.06
function dot(a, b) { return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3] }
function add (a, b) { return [a[0]+b[0], a[1]+b[1],a[2]+b[2], a[3]+b[3]] }
function XN(x) { return (x-W/2)/(W/2)}
function YN(y) { return (y-H/2)/(H/2)}
function mult(k, fv) {
    return fv.map(d => d*k)
}
function feat(x, y) {
    return [x, y, x*x, y*y, x*y, 1]
}
function learn(line, p) {
    const cls = dot(line,  p.f) >= 0 ? 1 : -1
      const k = -learningRate  * (cls - p.class);
     if (cls != p.class) console.log('error', line)
      line = add(line, mult(k, p.f))
    let L = Math.sqrt(dot(line,line))
    if (L==0)L=1;
    return mult(1/L, line)
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

let temp=[]

function rebuild() {
    temp = []
    for (const p of classes['r']) { 
        temp.push(p)
    }
    for (const p of classes['g']) {
        temp.push(p);
    }

      //  shuffleArray(temp);

}

function step() {
    ctx.fillStyle="lightgrey"
    ctx.fillRect(0, 0, W, H);
    ctx.beginPath();
    ctx.fillStyle = "#0f0"

    for (const p of classes['r']) {
        ctx.beginPath();
        ctx.fillStyle = "#f00"

        ctx.arc(p.f[0] * W/2+W/2, p.f[1]*(H/2)+H/2, R, 0, 2*Math.PI);

        ctx.fill();
        }
    for (const p of classes['g']) {
        ctx.beginPath();
        ctx.fillStyle = "#0f0"

        ctx.arc(p.f[0] * W/2+W/2, p.f[1]*(H/2)+H/2, R, 0, 2*Math.PI);
        ctx.fill();

    }


    for (var i=0;i<temp.length;++i){
        line=learn(line,temp[i]);
    }
 

var L = dot(line, line)
L = Math.sqrt(L)
for (var x=0;x<W;x+=5) {
    for (var y=0;y<H;y+=5){
        var px = (x-W/2)/(W/2)
        var py = (y-H/2)/(H/2)
        var d = dot(line, feat(px, py)) / L
        if (1) {
            ctx.beginPath();
            ctx.fillStyle = Math.abs(d)>=0.01 ? "grey" : "#000"
            ctx.arc(x, y, 1, 0, 2*Math.PI)
            ctx.fill();
        }
    }
}


    requestAnimationFrame(step);
}

requestAnimationFrame(step)

canv.addEventListener('mousedown', (w, ev) => {
    let x = w.clientX - canv.getBoundingClientRect().left;
    let y = w.clientY -  canv.getBoundingClientRect().top;

    const color = (document.getElementsByName('cls')[0].checked) ? 'r' : 'g';

    const px = (x-W/2)/(W/2)
    const py= (y-H/2)/(H/2)
    const f = feat(px, py)
    classes[color].push({ f, class: color == 'r' ? 1 : -1 })
    rebuild()
})