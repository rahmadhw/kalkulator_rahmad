function getValue()
{
    let input = event.target.innerText;
    tampilValue(input);
}


function tampilValue(Value){
    let keluar = document.getElementById("result");
    let current = keluar.innerHTML;

    if (keluar.innerHTML == "0")
    {
        if (Value != "C" && Value != "Del")
        {
            keluar.innerHTML = "";
            keluar.innerHTML += Value;

        }
    }else 
    {
        if (Value == "Del")
        {
            keluar.innerHTML = current.slice(0, -1);
            if (keluar.innerHTML.length <= 1)
            {
                keluar.innerHTML = "0";
            }
        }

        if (Value != "C" && Value != "Del" && Value != "=")
        {
            keluar.innerHTML += Value;
        }

        if ( Value == "C")
        {
            keluar.innerHTML = "0";
        }

        if (Value == "=")
        {
            let resulthasil = keluar.innerHTML;
            keluar.innerHTML = eval(resulthasil);
        }
    }
}

const tombol = document.getElementsByTagName("button");
for (let i = 0; i < tombol.length; i++ ){
    tombol[i].setAttribute('onclick', 'getValue()');
}