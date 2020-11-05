var id = 0;
var editId;
var isEdit=false;
function limparCampos(){
    document.getElementById('name').value=""
    document.getElementById('phone').value=""
    document.getElementById('email').value=""
}
function addContact()
{
    var contact = {
    nome: document.getElementById('name').value,
    tel: document.getElementById('phone').value,
    email: document.getElementById('email').value
    };
  if(isEdit==false){
    console.log(contact);
    loadContacts(contact);
    id++;
  }else{
    var contactElement=document.querySelector("[data-id='"+editId+"']")
      var nome=contactElement.querySelector(".nomeContato")
      nome.textContent=contact.nome
      var telefone=contactElement.querySelector(".telContato")
      telefone.textContent=contact.tel
      var email=contactElement.querySelector(".emailContato")
      email.textContent=contact.email
  }

}

function loadContacts(contactData)
{
  var contactInfo = document.createElement('div');
    contactInfo.dataset.id=id
    document.getElementById('contactList').appendChild(contactInfo);
    contactInfo.innerHTML = `<div class="contactInfo" id="contactInfo">
          <div class="row">
          <div class="col-6">
          <label class="nomeContato">${contactData.nome}</label>
                            <small>Telefone:</small> 
                            <span class="telContato">${contactData.tel}</span><br>
                            <small>E-maiL:</small>
                            <span class="emailContato">${contactData.email}</span>
                </div>
        <div class="col-3" id="cEdit">
         <button type="button" data-toggle="modal" data-target="#addContactModal" onclick="isEdit=true; editar(${id})" id="edit" class="button">Editar</button>
        </div>
        <div class="col-3" onclick="del(${id})" id="cDelete">
          <button type="button" id="delete" class="button">Deletar</button>

        </div>
        </div>
        </div>`;    
}
function del(id){
  var contact=document.querySelector("[data-id='"+id+"']")
  contact.remove()
}
function editar(id){
  editId=id
  var contactElement=document.querySelector("[data-id='"+id+"']")
  var nome=contactElement.querySelector(".nomeContato").textContent
  var telefone=contactElement.querySelector(".telContato").textContent
  var email=contactElement.querySelector(".emailContato").textContent
  document.getElementById('name').value=nome
  document.getElementById('phone').value=telefone
  document.getElementById('email').value=email
}