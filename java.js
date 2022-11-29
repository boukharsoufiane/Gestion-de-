let i=0;
function AddProduct(){
  i++;
  let name = document.getElementById('nom').value;
  let table = document.getElementById('table');
  let row = document.createElement('tr');
  let table2= document.createElement('td');
  let table3 = document.createElement('td');
  let table4 = document.createElement('td');
  let table5 = document.createElement('td');
  let table6 = document.createElement('td');
  let table7 = document.createElement('td');
  let table8 = document.createElement('td');
  let table9 = document.createElement('button');
  let table10 = document.createElement('button');
  row.id="col"+i;
  let text = document.createTextNode(name);
  let option = document.getElementById('select1').value;
  let option2 = document.getElementById('select2').value;
  let checkbox = document.getElementById('Oui').checked;

  let checkbox2 = document.getElementById('Non').checked;
  let option3 = document.getElementById('Oui').value;
  let option4 = document.getElementById('Non').value;
  let text2 = document.createTextNode(option);
  let price = document.getElementById('prix').value;
  let text3 = document.createTextNode(price);
  let date = document.getElementById('Date').value;
  let text4 = document.createTextNode(date);
  let text5 = document.createTextNode(option2);
  let text6 = document.createTextNode(option3);
  let text7 = document.createTextNode(option4);
  let contenue ='✎';
  let contenue1 ='☒';
  let text8 = document.createTextNode(contenue);
  let text9 =document.createTextNode(contenue1);
  if(name.length!==0 && name.length <= 30 && option.length!==0 && price.length !==0 && date.length!==0 && option2.length!==0 && (checkbox == true || checkbox2 == true)){
    window.location.replace("#table");
    table2.appendChild(text);
    table3.appendChild(text2);
    table4.appendChild(text3);
    table5.appendChild(text4);
    table6.appendChild(text5);
    row.appendChild(table2);
    row.appendChild(table3);
    row.appendChild(table4);
    row.appendChild(table5);
    row.appendChild(table6);
    if(checkbox == true){
      table7.appendChild(text6);
      row.appendChild(table7);
    }
    if(checkbox2 == true){
      table7.appendChild(text7);
      row.appendChild(table7);
    }
    table10.style.backgroundColor='red';
    table10.style.fontSize='1.4em';
    table10.style.padding='10px';
    table9.style.backgroundColor='green';
    table9.style.fontSize='1.4em';
    table9.style.padding='10px';
    table10.setAttribute('onclick' , 'DeleteRow('+i+')');
    table9.setAttribute('onclick' , 'ModifierRow()')
    table9.appendChild(text8);
    table8.appendChild(table9);
    table10.appendChild(text9);
    table8.appendChild(table10);
    row.appendChild(table8);
    table.appendChild(row);
    document.getElementById('nom').value ="";
    document.getElementById('select1').value="";
    document.getElementById('prix').value="";
    document.getElementById('Date').value="";
    document.getElementById('select2').value="";
    document.getElementById('Oui').checked="";
    document.getElementById('Non').checked="";
    window.location.replace("#table");
  }else{
    document.getElementById('text').style.display='none';
    document.getElementById('sec').style.display='none';
    document.getElementById('table').style.display='none';
    document.getElementById('warning2').style.display='block';
    document.getElementById('accept').onclick=function(){
      document.getElementById('warning2').style.display='none';
      document.getElementById('text').style.display='block';
      document.getElementById('sec').style.display='block';
      document.getElementById('table').style.display='block';
    }
  }
}
function DeleteRow(i){
  document.getElementById('text1').style.display='none';
  document.getElementById('sec').style.display='none';
  document.getElementById('table').style.display='none';
  document.getElementById('warning').style.display='block';
  document.getElementById('deleteRow').onclick=function(){
    document.getElementById("col"+i).remove();
    document.getElementById('warning').style.display='none';
    document.getElementById('text1').style.display='block';
    document.getElementById('sec').style.display='block';
    document.getElementById('table').style.display='block';
    window.location.replace("#table");
  }
  document.getElementById('cancelDelete').onclick=function(){
    document.getElementById('warning').style.display='none';
    document.getElementById('text1').style.display='block';
    document.getElementById('sec').style.display='block';
    document.getElementById('table').style.display='block';
    window.location.replace("#table");
  }
}

let table = document.getElementById('table'),rIndex;
function ModifierRow(){
 document.getElementById('btnAjouter').style.display="none";
 document.getElementById('btnEdit').style.display="block";
 for(let i = 0; i <= table.rows.length ; i++){
  table.rows[i].onclick = function(){
    rIndex = this.rowIndex;
    document.getElementById('nom').value = this.cells[0].innerHTML;
    document.getElementById('select1').value = this.cells[1].innerHTML;
    document.getElementById('prix').value = this.cells[2].innerHTML;
    document.getElementById('Date').value = this.cells[3].innerHTML;
    document.getElementById('select2').value = this.cells[4].innerHTML;
    document.getElementById('Oui').checked=this.cells[5].innerHTML;
    document.getElementById('Non').checked=this.cells[5].innerHTML;
  };
 }
}

function EditRow(){
  document.getElementById('btnAjouter').style.display="block";
  document.getElementById('btnEdit').style.display="none";
  let checkbox = document.getElementById('Oui').checked;
  let checkbox2 = document.getElementById('Non').checked;
  table.rows[rIndex].cells[0].innerHTML = document.getElementById('nom').value;
  table.rows[rIndex].cells[1].innerHTML = document.getElementById('select1').value;
  table.rows[rIndex].cells[2].innerHTML = document.getElementById('prix').value;
  table.rows[rIndex].cells[3].innerHTML = document.getElementById('Date').value;
  table.rows[rIndex].cells[4].innerHTML = document.getElementById('select2').value;
  if(checkbox == true){
    table.rows[rIndex].cells[5].innerHTML = document.getElementById('Oui').value;
  }
  else if(checkbox2 == true){
    table.rows[rIndex].cells[5].innerHTML = document.getElementById('Non').value;
  }
}

function rest(){
  document.getElementById('nom').value ="";
  document.getElementById('select1').value="";
  document.getElementById('prix').value="";
  document.getElementById('Date').value="";
  document.getElementById('select2').value="";
  document.getElementById('Oui').checked="";
  document.getElementById('Non').checked="";
}



