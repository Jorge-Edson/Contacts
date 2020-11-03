var id = 0;

function addContact()
{
  var contact = {
    nome: document.getElementById('name').value,
    tel: document.getElementById('phone').value,
    email: document.getElementById('email').value
  };

  console.log(contact);
  localStorage.setItem(id, JSON.stringify(contact));
  loadContacts();
  id++;
}

function loadContacts()
{
  var contactData = JSON.parse(localStorage.getItem(id));
    
  if (id == 0)
  {
    var contactInfo = document.getElementById('contactInfo');

    contactInfo.innerHTML = `<label>${contactData.nome}</label>
                            <small>Telefone:</small> ${contactData.tel}<br>
                            <small>E-maiL:</small> ${contactData.email}`;
  }
    
  if (id > 0)
  {
    var contactInfo = document.getElementById('contactInfo').cloneNode(true);
    console.log(contactInfo);
    document.getElementById('contactList').appendChild(contactInfo);
    contactInfo.innerHTML = `<label>${contactData.nome}</label>
                            <small>Telefone:</small> ${contactData.tel}<br>
                            <small>E-maiL:</small> ${contactData.email}`;
  }

  console.log(contactInfo);
}