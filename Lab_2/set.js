function calc(){
    let a = document.formcalc.a.value;
    let b = document.formcalc.b.value;
    let c = document.formcalc.c.value;
    let ah=Number(a);
    let bh=Number(b);
    let ch=Number(c);
    
    let desc=bh*bh-4*ah*ch;
    if(ah==0){
        alert("введен неправильный коэффициент");
        return;
    }

    if (desc<0){
        alert("Корней нет");
        return;
    }
    
    if(desc==0){
        alert("Один корень");
        let x=-bh/(2*ah);
        return;
    }
    let x=(-bh+Math.sqrt(desc))/(2*ah);
    let y=(-bh-Math.sqrt(desc))/(2*ah);
    alert(x);
    alert(y);
}