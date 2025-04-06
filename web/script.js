function enterApp(){
  window.location.href = "main.html";
}

function sendRequest(){
  const url = document.getElementById('url').value;
  const method = document.getElementById('method').value;
  let payload;
  try {
    payload = document.getElementById('payload').value ? JSON.parse(document.getElementById('payload').value) : {};
  } catch (e) {
    document.getElementById('responseOutput').textContent = "Неверный JSON.";
    return;
  }
  eel.send_request(url, method, payload)(function(response){
    document.getElementById('responseOutput').textContent = JSON.stringify(response, null, 2);
  });
}