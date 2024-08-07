process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let width =""
    for(let i=0;i<a;i++){
        width += "*"
    }
    width += '\n'
    
    console.log(width.repeat(b));
});