export function getFormData(callback) {
  const $formData = document.querySelectorAll('#form input');
  const $submitButton = document.querySelector('#submit-button');

  $submitButton.onclick = () => {
    const formData = {};
    $formData.forEach((data) => {
      formData[`${data.id}`] = data.value;
    });
    const attendee = { id: Date.now(), ...formData };
    callback(attendee);
  };
}

export function openModal() {
  const modal = document.getElementById('my-modal');
  const span = document.getElementsByClassName('close')[0];
  modal.style.display = 'block';
  span.onclick = () => {
    modal.style.display = 'none';
    window.location.reload();
  };
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      window.location.reload();
    }
  };
}
