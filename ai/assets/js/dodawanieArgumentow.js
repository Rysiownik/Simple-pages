let nowyArgument

document.getElementById('dodaj').addEventListener('click',function(){
    nowyArgument = document.getElementById('nowyArgument').value.trim();
    document.getElementById('noweArgumnety').innerHTML += `<p> ${nowyArgument}</p>`
    document.getElementById('nowyArgument').value = ""
})

